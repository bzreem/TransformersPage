import "./PjPersonalitation.css";
import Transformers1 from "../assets/Personification/1.png";
import Transformers2 from "../assets/Personification/2.png";
import Transformers3 from "../assets/Personification/3.png";
import Transformers4 from "../assets/Personification/4.png";
import Transformers5 from "../assets/Personification/5.png";
import { TransitionImages } from "../hooks/TransitionImages";
import { useEffect } from "react";
const PjPersonalitation = () => {
  useEffect(() => {
    TransitionImages(
      document.querySelectorAll(".container-position-absolute figure img"),
      "img-active-personification"
    );
    return () => {};
  }, []);
  return (
    <>
      <section className="section-personafication-bg">
        <article className="article-personifiation">
          <div className="container-flex">
            <h3>JUEGA CON</h3>
            <h2>ESTILO</h2>
            <div className="information-personification">
              <p className="p-information">
                Cambia la apariencia de tus transformers favoritos con aspectos
                y personaliza tu estilo.
              </p>
            </div>

            <div>
              <button className="personification-button">VER AHORA</button>
            </div>
          </div>

          <div className="container-flex-img">
            <div className="container-position-absolute">
              <figure>
                <img
                  className={"img-active-personification"}
                  src={Transformers1}
                  alt=""
                />
                <img src={Transformers2} alt="" />
                <img src={Transformers3} alt="" />
                <img src={Transformers4} alt="" />
                <img src={Transformers5} alt="" />
              </figure>
              <div className="border-personification"></div>
            </div>
          </div>
        </article>
        {/* <div id="particles-js"></div> */}
      </section>
    </>
  );
};

export default PjPersonalitation;
