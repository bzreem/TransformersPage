import "./Footer.css";
import Linkedin from "../assets/redes/linkedin.png";
import GitHub from "../assets/redes/github.png";
import Twitter from "../assets/redes/twitter.png";
import TransformersLogo from "../assets/logos/TransformersTitulo2.png";
import WarningImg from "../assets/logos/latam-war.png";
const Footer = () => {
  return (
    <footer>
      <div className="networks">
        <a href="as">
          <img src={Linkedin} alt="" />
        </a>

        <a href="as">
          <img src={GitHub} alt="" />
        </a>

        <a href="as">
          <img src={Twitter} alt="" />
        </a>
      </div>

      <div className="container-logo-transformers">
        <figure>
          <img src={TransformersLogo} alt="" />
        </figure>
      </div>

      <div className="information-extra">
        <article>
          <p>
            @ 2021 Transformers Page. Esto es texto aleatorio y demostrativo. No
            contiene información relacionada con la página, por ende, no es
            importante.
          </p>
        </article>
      </div>

      <div className="terms">
        <article className="article-terms">
          <a href="sd">AVISO DE PRIVACIDAD</a>
          <a href="sd">TÉRMINOS DE USO</a>
          <a href="as">PREFERENCIAS DE COOKIES</a>
        </article>
      </div>

      <div className="warning-information">
        <div className="container-img-warning">
          <figure>
            <img src={WarningImg} alt="" />
          </figure>
        </div>
        <article className="container-text-warning">
          <p>Sangre</p>
          <p>Violencia de fantasía</p>
          <p>Temas insinuantes moderados</p>
          <p>Uso de alcohol y tabaco</p>
          <p>Interacciones en línea no clasificadas por la ESRB</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
