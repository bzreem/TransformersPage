import "./Maps.css";
import MegaBg from "../assets/Img/megatronBg_Comprim.png";
import GrimlockBg from "../assets/Img/GrimlockBg_Comprim.png";
import StarsCreamBg from "../assets/Img/starscreamBg_Comprim.png";
import Videoo from "../assets/Video/TransformersPresentacion_1Comprim.mp4";
import Video1 from "../assets/Video/TransformersVideo1_Trim_Comprim.mp4";
import Video2 from "../assets/Video/TransformersVideo2_Trim_1_Comprim.mp4";
// import Bee from "../assets/Img/BeeMovie.jpg";
import Grimlock from "../assets/Cards/prueba2.png"
import Metroplex from "../assets/Cards/metroplex.png"
import Omega from "../assets/Cards/omega.png"
// import MapsBg from "../hooks/MapsBg";
const MapsMobile = ({ MapsBg }) => {
  return (
    <>
      <div className="bg-dark"></div>
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
              <video
                muted
                autoPlay
                loop
                preload="metadata"
                className="active-video-maps"
                src={Videoo}
              ></video>
              <video muted loop preload="metadata" src={Video1}></video>
              <video muted loop preload="metadata" src={Video2}></video>
            </figure>
          </div>

          <div className="div-container-scroll-x">
            <div className="select-maps">
              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale active-scale">
                  <img
                    src={Grimlock}
                    alt=""
                    onClick={() => {
                      MapsBg(0);
                    }}
                  />
                </figure>
                <span className="span-active-maps">IACON</span>
              </div>

              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale">
                  <img
                    src={Metroplex}
                    alt=""
                    onClick={() => {
                      MapsBg(1);
                    }}
                  />
                </figure>
                <span>METROPLEX RESPONDE</span>
              </div>

              <div className="div-container-figcaption">
                <figure className="select-maps-figure-scale">
                  <img
                    src={Omega}
                    alt=""
                    onClick={() => {
                      MapsBg(2);
                    }}
                  />
                </figure>
                <span>LLAVE OMEGA</span>
              </div>
            </div>
          </div>

          <div className="information-maps">
            <article className="article-information-position-absolute active-information-maps">
              <h4>LA GUERRA POR DEFENDER LA ÚLTIMA CIUDAD AUTOBOT</h4>
              <p>
                Enfréntate a los Decepticons en la última ciudad Autobots que va
                quedando. Derrota a gigantes como Bruticus y se el último que
                quede en pie.
              </p>
            </article>

            <article className="article-information-position-absolute">
              <h4>ENCIENDE A METROPLEX</h4>
              <p>
                Encuentra la antigua ciudad que se convierte en un gigante
                llamado Metroplex. Pídele ayuda para poder contener los asedios
                Decepticons.
              </p>
            </article>

            <article className="article-information-position-absolute">
              <h4>ENCUENTRA LA LLAVE OMEGA</h4>
              <p>
                Solicítale a Omega Supreme que te abra la entrada al nucleo de
                Cybertron y así poder tomar control del planeta.
              </p>
            </article>
          </div>
        </article>
      </section>
    </>
  );
};

export default MapsMobile;
