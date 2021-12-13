import video from "../assets/Video/TransformersPresentacion.mp4";
import "./VideoFooter.css";
import AutoBg from "../assets/logos/AutoBg.png";
import DeceptBg from "../assets/logos/DecepBg.png";
const VideoFooter = () => {
  return (
    <>
      <section className="section-video-footer">
        <figure>
          <video muted autoPlay loop src={video}></video>
        </figure>
        <div className="div-position-absolute-btn-video">
          <button className="see-more">VER MÁS</button>
        </div>
      </section>

      <div className="transformers-transfer">
        <article className="article-container-flex">
          <div className="container-title-h3">
          <h3>LLEVA TRANSFORMERS CONTIGO.</h3>
          </div>
          <div className="div-container-p-information">
            <p>
              Descarga la aplicación de LoL para conectarte con amigos y recibir
              las noticias más recientes del juego y de los esports.
            </p>
          </div>

          <div className="div-container-a-logos">
            <a href="sd">
              <img src={AutoBg} alt="" />
            </a>

            <a href="sd">
              <img src={DeceptBg} alt="" />
            </a>
          </div>
        </article>
      </div>
    </>
  );
};

export default VideoFooter;
