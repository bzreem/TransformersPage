import "./Maps.css";
import MegaBg from "../assets/Img/megatronBg.png";
import GrimlockBg from "../assets/Img/GrimlockBg.png";
import StarsCreamBg from "../assets/Img/starscreamBg.png";
import Videoo from "../assets/Video/TransformersPresentacion.mp4";
import Video1 from "../assets/Video/TransformersVideo1_Trim.mp4";
import Video2 from "../assets/Video/TransformersVideo2_Trim.mp4";
import prueba1 from "../assets/Cards/prueba2.png";
import Metroplex from "../assets/Cards/metroplex.png";
import Omega from "../assets/Cards/omega.png";
// import Bee from "../assets/Img/BeeMovie.jpg";
// import MapsBg from "../hooks/MapsBg";
const MapsDesktop = ({ MapsBg }) => {
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
          {/* <h3>DISTINTOS MÁPAS QUE</h3>
          <h2>PROBAR</h2>
          <button>VER AHORA</button> */}
          {/* <div className="container-video-maps">
            <figure className="figure-border-maps">
              <video muted autoPlay loop preload="auto" src={Videoo}></video>
            </figure>
          </div> */}
          <div className="container-flex-desktop">
            <div className="div-container-title-desktop">
              <h3>DISTINTOS MÁPAS QUE</h3>
              <h2>PROBAR</h2>
              <button>VER AHORA</button>
            </div>

            <div className="container-video-maps">
              <figure className="figure-border-maps">
                <video
                  muted
                  loop
                  preload="auto"
                  className="active-video-maps"
                  src={Videoo}
                ></video>
                <video muted loop preload="auto" src={Video1}></video>
                <video muted loop preload="auto" src={Video2}></video>
              </figure>
            </div>

            <div className="div-container-scroll-x">
              <div className="select-maps">
                <div className="div-container-figcaption">
                  <figure className="select-maps-figure-scale active-scale">
                    <img
                      draggable="true"
                      src={prueba1}
                      alt=""
                      onClick={() => {
                        MapsBg(0);
                      }}
                      onDragCapture={(e) => {
                        // MapsBg(0);
                        console.log(e);
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
                      onDrag={() => {
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
                      onDrag={() => {
                        MapsBg(2);
                      }}
                    />
                  </figure>
                  <span>LLAVE OMEGA</span>
                </div>
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

export default MapsDesktop;
