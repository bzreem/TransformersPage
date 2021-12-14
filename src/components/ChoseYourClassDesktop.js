import Prime from "../assets/Img/OptimusPrime.png";
import Bee from "../assets/Img/Bumblebee.png";
import Sound from "../assets/Img/Soundwave.png";
import Jet from "../assets/Img/Jetfire.png";
import Grim from "../assets/Img/Grimlock.png";
// import video from "../assets/Video/TransformersPresentacion.mp4";
import Tanque from "../assets/Video/Tanque2.mp4";
import Infiltradores from "../assets/Video/Infiltradores.mp4";
import Cientificos from "../assets/Video/Cientificos.mp4";
import Medicos from "../assets/Video/Medicos.mp4";
import Luchadores from "../assets/Video/Luchadores.mp4";
const ChoseYourClassDesktop = ({ handleChange, pj, bg }) => {
  return (
    <div className="div-container-desktop-flex">
      <div className="div-container-height">
        <div className="div-container-buttons-pj">
          <form>
            <input
              type="submit"
              name="OPTIMUS PRIME"
              className="input-active"
              data-information="Lider de los Autobots"
              data-number="0"
              data-type="1"
              data-src={Tanque}
              value="TANQUES"
              onClick={handleChange}
            />
            <input
              type="submit"
              name="BUMBLEBEE"
              data-information="Autobot de infiltración"
              data-number="1"
              data-type="1"
              data-src={Infiltradores}
              value="INFILTRADORES"
              onClick={handleChange}
            />
            <input
              type="submit"
              name="SOUNDWAVE"
              data-information="Decepticon de ciencia"
              data-number="2"
              data-type="2"
              data-src={Cientificos}
              value="CIENTÍFICOS"
              onClick={handleChange}
            />
            <input
              type="submit"
              name="RATCHET"
              data-information="Autobot Médico"
              data-number="3"
              data-type="1"
              data-src={Medicos}
              value="MÉDICOS"
              onClick={handleChange}
            />
            <input
              type="submit"
              name="GRIMLOCK"
              data-information="Lider de los Dinobots"
              data-number="4"
              data-type="3"
              data-src={Luchadores}
              value="LUCHADORES"
              onClick={handleChange}
            />
          </form>

          <div className="container-video-choose-class">
            <figure className="figure-container-video-class">
              <video
                className="video-choose-class video-active-class"
                autoPlay
                muted
                loop
                src={Tanque}
              ></video>
              <video
                className="video-choose-class"
                muted
                loop
                src={Infiltradores}
              ></video>

              <video
                className="video-choose-class"
                muted
                loop
                src={Cientificos}
              ></video>

              <video
                className="video-choose-class"
                muted
                loop
                src={Medicos}
              ></video>

              <video
                className="video-choose-class"
                muted
                loop
                src={Luchadores}
              ></video>
            </figure>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="div-border">
          <figure>
            <img className="img-active" src={Prime} alt="" />
            <img src={Bee} alt="" />
            <img src={Sound} alt="" />
            <img src={Jet} alt="" />
            <img src={Grim} alt="" />
          </figure>
        </div>

        <article className="information-pj">
          <h3>{pj.name}</h3>
          <p>{pj.info}</p>
        </article>
        <div className="container-img-bg" style={bg}></div>
      </div>
    </div>
  );
};

export default ChoseYourClassDesktop;
