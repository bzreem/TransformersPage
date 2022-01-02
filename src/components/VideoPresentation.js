import { useResizeWindow } from "../hooks/useResizeWindow";
import { useEffect, useState } from "react";
import VideoPresentationDesktop from "./VideoPresentationDesktop";
import VideoPresentationMobile from "./VideoPresentationMobile";
const VideoPresentation = () => {
  let [mq, WindowRisezeHash, DomLoadedHash, hashChangeWindow] =
    useResizeWindow("(min-width: 600px)");
  let [videoVisibility, setVideoVisibilite] = useState(null);
  useEffect(() => {
    if (mq === null) return;
    if (mq) {
      setVideoVisibilite(<VideoPresentationDesktop />);
    } else {
      setVideoVisibilite(<VideoPresentationMobile />);
    }

    return () => {
      window.removeEventListener("resize", WindowRisezeHash);
      document.removeEventListener("DOMContentLoaded", DomLoadedHash);
      window.removeEventListener("hashchange", hashChangeWindow);
      setVideoVisibilite(null);
    };
  }, [mq]);

  // return <>{mq ? <VideoPresentationDesktop /> : <VideoPresentationMobile />}</>;
  return <>{videoVisibility}</>;
};

export default VideoPresentation;
