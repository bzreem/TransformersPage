import { useEffect } from "react";
import "./PageBioStyles.css";
import Megatron from "../../assets/megatron/megatron.jpg";
import RowDown from "../../assets/logos/rowDown.png";
const PageMegatronBio = () => {
  let styles = {
    backgroundImage: `url(${Megatron})`,
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
        <h2>MEGATRON</h2>
        <h3>LIDER DECEPTICONS</h3>
      </div>
      <div style={styles} className="container-img-bio">
        <article className="article-title">
          <h1>MEGATRON</h1>
          <h2>LIDER DECEPTICONS</h2>
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
          <h2>MEGATRON</h2>
          <h3>LIDER DECEPTICONS</h3>
        </div>

        <div className="container-article">
          <article className="article-container-information">
            <p>
              Megatron es el temible líder de los Decepticons. Tiene un único
              objetivo y es controlar el universo. El único que lo impide es
              Optimus Prime. Megatron intentará cualquier cosa para lograr sus
              objetivos, pero rara vez sus planes funcionan bien. Esto es quizás
              debido a su arrogancia, su orgullo, pero no es tan fuerte como
              para disuadirle de abandonar una batalla que está perdiendo.
              Algunos cuestionan su cordura, pero la mayoría lo hace en silencio
              debido al temor que tienen a su poder y a su cañón de fusión. A
              veces usa su maza de energon para derribar a sus oponentes.
            </p>

            <p>
              El planeta Cybertron es gobernado por los Quintessons, una raza
              alienígena superior, que construye Autobots y Decepticons, para
              venderlos a través de la galaxia. Los Transformers se rebelan
              contra los Quintessons y obtienen su libertad. Autobots y
              Decepticons viven en una sociedad en paz donde los Autobots
              obtienen energía (obreros) y los Decepticons se encargan de la
              defensa del planeta (ejército), hasta el día en que llegó el
              momento en que los Decepticons, en su afán de poder, declaran la
              guerra a los Autobots, quienes manejaban la mayor parte de la
              energía del planeta. Los Decepticons saben que necesitan a un
              líder que los lleve a la victoria, así que los Constructicons con
              la última tecnología del momento construyen a Megatron, el
              Decepticon que tiene como destino convertirse en el líder que
              llevara a los Decepticons a la anhelada victoria.
            </p>

            <p>
              Su intención es hacer que sus enemigos, los Autobots, estén bajo
              su yugo y poder empezar después su principal tarea, reconstruir
              Cybertron en un acorazado cósmico. Desea transformar su planeta en
              el arma singular más mortífera que jamás haya existido para que el
              Universo se estremezca.
            </p>

            <p>
              Los principales ataques de Megatron fueron estratégicamente
              planeados; éstos eran los hangares de almacenaje de energía de los
              Autobots. Uno de estos hangares era dirigido por Orion Pax.
              Megatron destruyó ese hangar, se robó la energía del mismo y
              eliminó a Orión Pax quien trató de defender a sus amigos y al
              hangar. Los amigos de Orión Pax llevaron el cuerpo de este a Alpha
              Trion para repararlo. Alpha Trion siente algo especial en Orión
              Pax y decide experimentar con su cuerpo y chispa; así crea a
              Optimus Prime, el Autobot que llevara a sus semejantes a la
              victoria en una nueva guerra cibertroniana, la gran guerra entre
              Decepticons y Autobots.
            </p>

            <p>
              Megatron por años pudo mantener a sus tropas con energía robada a
              los Autobots y la que les proporcionaba una extraña reliquia
              conocida como el Corazón de Cybertron que producía energía
              infinita. Los Autobots a su vez no tenían esta ventaja. Además de
              ir perdiendo la guerra contra los decepticons, los autobots se ven
              obligados a buscar nuevas fuentes de energía. Así construyen una
              nave llamada el Arca y comienzan su viaje en busca de nuevas
              fuentes de energía . Megatron descubre los planes de Optimus Prime
              y los sigue con la mejor nave de toda la flota decepticon, El
              Némesis. El Némesis usaba como fuente de poder el Corazón de
              Cybertron. Después de una persecución en el espacio empieza una
              batalla al interior del Sistema Solar, hasta el momento que llegan
              a la órbita de la Tierra; Megatron entonces da la orden de abordar
              la nave autobot y matar a los que se encuentren en ella; empieza
              una batalla en el Arca, las 2 naves atraviesan un campo de
              asteroides y quedan en malas condiciones, precipitándose al
              planeta Tierra, lo que hizo que quedaran atrapados en dicho
              planeta (la Tierra) por 4 millones de años.
            </p>

            <p>
              Debido a una erupción volcánica Teletran 1, la computadora
              principal del arca, se activa y empieza a reparar a los
              Transformers dándoles el aspecto de maquinas terrestre, siendo el
              primero el Decepticon Skywarp (conversion en F-15) quien luego
              hace que revivan a Megatron (conversion en pistola Walther P-38) y
              al resto de los Decepticons. Los Decepticons se marchan de la
              nave, Starscream sin darse cuenta que, en su intento por sepultar
              el arca, la computadora empieza a reformar/revivir a sus enemigos.
            </p>

            <p>
              Megatron se da cuenta del potencial energético del planeta y
              empieza una nueva campaña para robar esta energía y transportarla
              a Cybertron y para destruir a los Autobots, mientras que los
              Autobots luchan contra los Decepticons para detenerlos. Las
              batallas en la Tierra entre Autobots y Decepticons, demuestran la
              astucia del líder Decepticon, siempre buscando la manera de
              fraccionar las filas enemigas, robar toda energía posible y en
              especial asesinar a Prime; a su vez tiene que lidiar con las
              traiciones de Starscream, y luchar contra enfermedades como la del
              óxido espacial.
            </p>

            <p>
              Durante los años previos al 2005 los Decepticons se vieron
              obligados a dejar la Tierra y volver a Cybertron, dando así un
              poco de paz en el planeta y permitiendo que los Autobots
              construyan Ciudad Autobot que más tarde será conocida como
              Metroplex. Mientras algunos Autobots se establecen en las lunas de
              Cybertron para monitorear las operaciones decepticons que aun
              dominan el planeta Cybertron.
            </p>

            <p>
              Cuando una nave Autobot comandada por Ironhide y tripulada por
              Ratchet, Prowl, Wheeljack y Brawn se prepara a viajar hacia ciudad
              Autobot (La Tierra), la nave es descubierta por espías
              decepticons, Megatron ve entonces la nave como una oportunidad de
              invadir Ciudad Autobot. Este junto a sus tropas se infiltra y
              asesina a todos los Autobots a bordo, y llega a la Tierra donde
              comienza una de las batallas más feroces que la gran guerra ha
              tenido. Los Autobots en gran desventaja piden ayuda a Cybertron y
              Optimus Prime junto a otros autobots viaja a la Tierra. El líder
              autobot se enfrenta contra Megatron en una lucha a muerte "donde
              sólo uno quedará en pie y el otro caerá", Megatron utilizando
              artimañas logra herir mortalmente a Prime; sin embargo, Prime
              logra derrotar a Megatron quien también queda muy malherido.
              Soundwave corre hacia a su herido líder y lo lleva dentro de
              Astrotrain para escapar siguiendo la orden de Starscream, quien se
              arrogó el liderazgo de los decepticons. Al huir dentro de
              Astrotrain, éste les informa que necesita aligerar carga, pues de
              lo contrario no podrán llegar a Cybertron. Alentados por
              Starscream, los decepticons deciden que los heridos serán los que
              tendrán que sacrificarse; entre los heridos están los Insecticons
              (Bombshell, Kickback y Shrapnel, o unos clones de ellos), Skywarp
              , Thundercracker y Megatron, quienes son lanzados al espacio.
            </p>

            <p>
              Los decepticons heridos flotan por el espacio y son encontrados
              por Unicron, un planeta robot cuyo objetivo es alimentarse de
              todos los planetas que encuentra a su paso. Unicron hace un pacto
              con Megatron, para que destruya la Matriz del liderazgo de los
              autobots, a cambio, Unicron le promete a Megatron un cuerpo nuevo
              y nuevas tropas. Megatron accede, después de percatarse que de lo
              contrario moriría en el espacio, y Unicrón transforma a Megatron
              en Galvatron, dándole poder para reclamar el liderazgo de los
              decepticons; además transforma a los otros Decepticons heridos en
              nuevas tropas más eficientes y leales a él, así nacen Cyclonus (ex
              Skywarp); Scourge (ex Thundercracker) y los Sweeps (los demás).
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

export default PageMegatronBio;
