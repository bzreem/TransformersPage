import Bg from "../assets/Img/bg-star2.jpg";
// import Bg from "../assets/Img/prueba.png";
import "./StarTransformers.css";
const StarTransformers = () => {
  return (
    <section className="section-start-bg">
      <article className="article-start-bg">
        <figure>
          <img src={Bg} alt="" />
        </figure>
      </article>
      <div className = "div-container-title">
        <div className="text-star">
          <h3>COMIENZA</h3>
          <h2>LA GUERRA</h2>
          <div className="container-p-start">
            <p>
              ¿No conoces League of Legends? Aquí encontrarás un buen resumen de
              los fundamentos del modo de juego más popular.
            </p>
          </div>
        </div>

        <div className="container-btn-star">
          <button className="seew-now">VER AHORA</button>
          <button className="start-btn-now">COMENZAR</button>
        </div>
      </div>
    </section>
  );
};

export default StarTransformers;
