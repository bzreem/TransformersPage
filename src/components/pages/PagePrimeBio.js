import { useEffect } from "react";
import "./PageBioStyles.css";
import Prime from "../../assets/optimusPrime/prime23-min.jpg";
import RowDown from "../../assets/logos/rowDown.png";
const PagePrimeBio = () => {
  let styles = {
    backgroundImage: `url(${Prime})`,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const $containerImg = document.querySelector(".container-img-bio");
    const $articleTitle = document.querySelector(".article-title");
    const $sectionBio = document.querySelector(".section-bio");
    const $themeAndInformation = document.querySelector(
      ".theme-and-information"
    );
    const scrollVisibility = () => {
      if ($containerImg.getBoundingClientRect().y < 0) {
        $containerImg.classList.add("scroll-active");
        $articleTitle.classList.add("active-slide");
        $sectionBio.classList.add("active-section-bio");
        $themeAndInformation.classList.add("information-scroll-active");
      } else {
        $containerImg.classList.remove("scroll-active");
        $articleTitle.classList.remove("active-slide");
        $sectionBio.classList.remove("active-section-bio");
        $themeAndInformation.classList.remove("information-scroll-active");
      }
    };
    window.addEventListener("scroll", scrollVisibility);

    return () => {
      window.removeEventListener("scroll", scrollVisibility);
    };
  });
  return (
    <section className="container-section-bio">
      <div className="theme-and-information">
        <h2>OPTIMUS PRIME</h2>
        <h3>LIDER AUTOBOT</h3>
      </div>
      <div style={styles} className="container-img-bio">
        <article className="article-title">
          <h1>OPTIMUS PRIME</h1>
          <h2>LIDER AUTOBOT</h2>
        </article>

        <div className="div-instruction">
          <p>DESPLÁZATE PARA COMENZAR</p>
          <figure>
            <img src={RowDown} alt="" />
          </figure>
        </div>
      </div>

      <section className="section-bio">
        <div className="line-gold"></div>
        <div className="rotate-div"></div>
        <div className="div-title">
          <h2>OPTIMUS PRIME</h2>
          <h3>LIDER AUTOBOT</h3>
        </div>

        <div className="container-article">
          <article className="article-container-information">
            <p>
              Optimus Prime es el asombroso líder de las fuerzas Autobot.
              Proviene de Iacon, la ciudad-estado más grande de los Autobots en
              Cybertron. Se convirtió en un líder para inspirar a los Autobots
              en los momentos de mayor y más mortífero peligro.
            </p>

            <p>
              De todos los Autobots, tan solo él, sabio y poderoso más allá de
              toda comprensión, fue capaz de unir a los dispersos guerreros en
              una fuerza de combate totalmente efectiva.
            </p>

            <p>
              En Cybertron utilizaba su habilidad para transformarse en un
              vehículo de combate. Optimus Prime poseía una potencia de disparo
              que nadie salvo Megatron podría igualar.
            </p>

            <p>
              Bajo el liderazgo de Optimus Prime, los Autobots repelieron los
              asaltos de los Decepticons con un vigor renovado, y reconstruyeron
              sus ciudades-estado derruidas, hasta que, de nuevo, funcionaran
              como santuarios.
            </p>

            <p>
              Originalmente era un civil, elegido por La Matriz de Liderazgo, el
              primero de una serie de cargas pesadas que él ha visto obligado a
              soportar. Otra es su interposición del conflicto de los
              Transformers en la Tierra. Todo lo contrario que su mortal enemigo
              Megatron, todas las perdidas, humanas o Cybertronianas, pesan
              mucho en su chispa. Optimus Primer no muestra este lado a sus
              soldados, y nunca cae en la desesperación pues los Autobots
              necesitan de un líder decidido y carismático.
            </p>

            <p>
              La historia de Optimus Prime comienza en la era de Oro del planeta
              Cybertron, una época en que los Autobots se habían liberado de sus
              creadores, los Quintessons, y la paz reinaba en el planeta.
            </p>

            <p>
              En ese entonces, Optimus Prime era conocido como Orion Pax, y se
              encargaba de uno de los hangares principales de abastecimientos de
              energía de Cybertron. Por otro lado, Megatron fue construido por
              los Constructicons, quienes se encargaban de construir los robots
              en ese momento.
            </p>

            <p>
              Megatron era un nuevo modelo de máquina más poderoso y con la
              capacidad de volar, algo que envidiaba y admiraba mucho Orion Pax.
              Él siempre lo veía en los cielos y simplemente deseaba conocerlo.
              Megatron, por poseer atributos especiales, decidió que era
              superior al resto y por tanto, él debía ser el amo absoluto del
              planeta. Decidió crear un ejército de Decepticons y declararle la
              guerra a los Autobots, robando la energía de los mismos. En uno de
              esos ataques Orion Pax es herido, junto a su novia Ariel. Alpha
              Trion logra reparar a Orion Pax, le añade las cualidades que tenía
              Megatron y lo nombra Optimus Prime; luego repara a Ariel y la
              convierte en Elita One.
            </p>

            <p>
              En Cybertron utilizaba su habilidad para transformarse en un
              vehículo de combate. Optimus Prime poseía una potencia de disparo
              que nadie salvo Megatron podría igualar.
            </p>

            <p>
              Bajo el liderazgo de Optimus Prime, los Autobots repelieron los
              asaltos de los Decepticons con un vigor renovado, y reconstruyeron
              sus ciudades-estado derruidas, hasta que, de nuevo, funcionaran
              como santuarios.
            </p>

            <p>
              Así la guerra se extendió durante un millar de años, mientras
              Cybertron continuaba su alocada carrera a través del Cosmos.
            </p>

            <p>
              Optimus Prime ha combatido contra Megatron en Cybertron durante
              milenios, hasta que el planeta se ve sin energía, entonces Prime
              recolecta a los mejores Autobots para llevarlos como tripulación
              en una misión de búsqueda de energía a bordo de la nave Autobot
              llamada El Arca. Los Decepticons se enteran de esto y siguen a
              Optimus Prime, dándose una batalla al interior del Sistema Solar,
              hasta que llegan a la órbita de la Tierra. Allí caen ambas naves,
              dejándolos atrapados en la tierra por 4 millones de años.
            </p>
          </article>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default PagePrimeBio;
