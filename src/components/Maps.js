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
  return (
    <>
      {/* <div className="bg-dark"></div>
      <section className="section-maps">
        <figure className="figure-maps-absolute">
          <img className="img-active-bg-maps" src={MegaBg} alt="" />
          <img src={GrimlockBg} alt="" />
          <img src={StarsCreamBg} alt="" />
        </figure>

        <article className="position-article-absolute">
          <h3>DISTINTOS MÁPAS QUE</h3>
          <h2>PROBAR</h2>
          <button>VER AHORA</button>
          <div className="container-video-maps">
            <figure className="figure-border-maps">
              <video muted autoPlay loop preload="auto" src={Videoo}></video>
            </figure>
          </div>

          <div className="div-container-scroll-x">
            <div className="select-maps">
              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale active-scale">
                  <img
                    src={Bee}
                    alt=""
                    onClick={() => {
                      MapsBg(0);
                    }}
                  />
                </figure>
                <span className="span-active-maps">Eto es una prueba</span>
              </div>

              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale">
                  <img
                    src={Bee}
                    alt=""
                    onClick={() => {
                      MapsBg(1);
                    }}
                  />
                </figure>
                <span>Eto es una prueba</span>
              </div>

              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale">
                  <img
                    src={Bee}
                    alt=""
                    onClick={() => {
                      MapsBg(2);
                    }}
                  />
                </figure>
                <span>Eto es una prueba</span>
              </div>
            </div>
          </div>

          <div className="information-maps">
            <article className="article-information-position-absolute active-information-maps">
              <h4>ESTO ES UNA PRUEBA 1 DE MAPAS</h4>
              <p>
                Eto es informacion acerca de los transformers en cybertron, que
                es el mejor juego del mundo
              </p>
            </article>

            <article className="article-information-position-absolute">
              <h4>ESTO ES UNA PRUEBA 2 DE MAPAS</h4>
              <p>
                Eto es informacion acerca de los transformers en cybertron, que
                es el mejor juego del mundo
              </p>
            </article>

            <article className="article-information-position-absolute">
              <h4>ESTO ES UNA PRUEBA 3 DE MAPAS</h4>
              <p>
                Eto es informacion acerca de los transformers en cybertron, que
                es el mejor juego del mundo
              </p>
            </article>
          </div>
        </article>
      </section> */}

      {/* {mq ? <MapsDesktop MapsBg={MapsBg} /> : <MapsMobile MapsBg={MapsBg} />} */}
      {mapsVisibility}
    </>
  );
};

export default Maps;
