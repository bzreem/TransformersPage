import "./ChoseYourClass.css";
import BGAuto from "../assets/logos/AutoBg.png";
import BGDecep from "../assets/logos/DecepBg.png";
import BGDino from "../assets/logos/DinoBg.png";
import { usePjClass } from "../hooks/usePjClass";
import { useEffect, useState } from "react";
import ChoseYourClassDesktop from "./ChoseYourClassDesktop";
import { useResizeWindow } from "../hooks/useResizeWindow";
import ChoseYourClassMobile from "./ChoseYourClassMobile";
const ChoseYourClass = () => {
  const [mq] = useResizeWindow("(min-width: 1024px)");
  let [pj, handleChange] = usePjClass({
    name: "OPTIMUS PRIME",
    info: "Lider de los Autobots",
    type: "1",
  });

  let [bg, setBg] = useState({
    backgroundImage: `url(${BGAuto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  });

  useEffect(() => {
    if (pj.type === "1") {
      setBg({
        backgroundImage: `url(${BGAuto})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      });
    } else if (pj.type === "2") {
      setBg({
        backgroundImage: `url(${BGDecep})`,
        backgroundPosition: "bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      });
    } else if (pj.type === "3") {
      setBg({
        backgroundImage: `url(${BGDino})`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      });
    }

    return () => {};
  }, [pj]);

  useEffect(() => {
    if (mq === null) return;
  }, [mq]);

  return (
    <section className="section-class-pj">
      <article className="article-class-title">
        <h3>ELIGE TU</h3>
        <h2>CLASE</h2>
      </article>
      <article className="article-class-information">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          ratione distinctio, consequuntur.
        </p>
      </article>
      <div className="div-two-buttons">
        <button className="button-more-transformers">
          DESCUBRIR MÁS TRANSFORMERS
        </button>
        <button className="button-visit-now">VISITAR AHORA</button>
      </div>

      {/* <div>
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
      </div> */}
      {mq ? (
        <ChoseYourClassDesktop handleChange={handleChange} pj={pj} bg={bg} />
      ) : (
        <ChoseYourClassMobile handleChange={handleChange} pj={pj} bg={bg} />
      )}
    </section>
  );
};

export default ChoseYourClass;
