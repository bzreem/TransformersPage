import "./Maps.css";
// import MegaBg from "../assets/Img/megatronBg.png";
// import GrimlockBg from "../assets/Img/GrimlockBg.png";
// import StarsCreamBg from "../assets/Img/starscreamBg.png";
// import Videoo from "../assets/Video/TransformersPresentacion.mp4";
// import Bee from "../assets/Img/BeeMovie.jpg";
import MapsBg from "../hooks/MapsBg";
import MapsMobile from "./MapsMobile";
import MapsDesktop from "./MapsDesktop";
import { useResizeWindow } from "../hooks/useResizeWindow";
import { useEffect, useState } from "react";
const Maps = () => {
  let [mq, WindowRisezeHash, DomLoadedHash, hashChangeWindow] = useResizeWindow(
    "(min-width: 1400px)"
  );

  let [mapsVisibility, setMapsVisibilite] = useState(null);
  useEffect(() => {
    const prueba = async () => {
      if (mq === null) return;

      if (mq) {
        setMapsVisibilite(<MapsDesktop MapsBg={MapsBg} />);
      } else {
        setMapsVisibilite(<MapsMobile MapsBg={MapsBg} />);
      }
    };
    let controller = new AbortController();
    let signal = controller.signal;
    Promise.all([prueba], { signal }).then(() => prueba());
    return () => {
      controller.abort();
      window.removeEventListener("resize", WindowRisezeHash);
      document.removeEventListener("DOMContentLoaded", DomLoadedHash);
      window.removeEventListener("hashchange", hashChangeWindow);
      setMapsVisibilite(null);
    };
  }, [mq]);
  return <>{mapsVisibility}</>;
};

export default Maps;
