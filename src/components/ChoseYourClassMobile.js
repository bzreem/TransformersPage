import Prime from "../assets/Img/OptimusPrime.png";
import Bee from "../assets/Img/Bumblebee.png";
import Sound from "../assets/Img/Soundwave.png";
import Jet from "../assets/Img/Jetfire.png";
import Grim from "../assets/Img/Grimlock.png";
const ChoseYourClassMobile = ({ handleChange, pj, bg }) => {
  return (
    <div>
      <div className="div-container-buttons-pj">
        <form>
          <input
            type="submit"
            name="OPTIMUS PRIME"
            className="input-active"
            data-information="Lider de los Autobots"
            data-number="0"
            data-type="1"
            value="TANQUES"
            onClick={handleChange}
          />
          <input
            type="submit"
            name="BUMBLEBEE"
            data-information="Autobot de infiltración"
            data-number="1"
            data-type="1"
            value="INFILTRADORES"
            onClick={handleChange}
          />
          <input
            type="submit"
            name="SOUNDWAVE"
            data-information="Decepticon de ciencia"
            data-number="2"
            data-type="2"
            value="CIENTÍFICOS"
            onClick={handleChange}
          />
          <input
            type="submit"
            name="RATCHET"
            data-information="Autobot Médico"
            data-number="3"
            data-type="1"
            value="MÉDICOS"
            onClick={handleChange}
          />
          <input
            type="submit"
            name="GRIMLOCK"
            data-information="Lider de los Dinobots"
            data-number="4"
            data-type="3"
            value="LUCHADORES"
            onClick={handleChange}
          />
        </form>
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

export default ChoseYourClassMobile;
