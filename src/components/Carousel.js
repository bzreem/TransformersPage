// import Prime from "../assets/Cards/Prime1.jpg";
import Prime from "../assets/Img/OptimusPrueba.png";
// import Galvatron from "../assets/Cards/Galvatron.jpg";
import Galvatron from "../assets/Img/PruebaCard2.png";
// import Bee from "../assets/Cards/Bee.jpg";
import Bee from "../assets/Img/BeePrueba.png";
// import King from "../assets/Cards/King.jpg";
import King from "../assets/Img/PruebaCard.png";
import "./Carousel.css";
import { useEffect } from "react";
import { canvasHelper } from "./helpers/canvasHelper";
const Carousel = () => {
  useEffect(() => {
    // const $canvas = document.querySelectorAll(".border-a");
    // const radius = [0, 30, 0, 0];
    // const topLeftRadius = radius[0];
    // const topLRigthtRadius = radius[1];
    // const bottomRigthRadius = radius[2];
    // const bottomLeftRadius = radius[3];

    // $canvas.forEach((el) => {
    //   const ctx = el.getContext("2d");
    //   ctx.lineWidth = 3;
    //   const inset = ctx.lineWidth / 2;
    //   const withCanvas = el.width;
    //   const height = el.height;
    //   ctx.lineTo(topLeftRadius, inset);
    //   ctx.lineTo(withCanvas - topLRigthtRadius, inset);
    //   ctx.lineTo(withCanvas - inset, topLRigthtRadius);
    //   ctx.lineTo(withCanvas - inset, height - bottomRigthRadius);
    //   ctx.lineTo(withCanvas - bottomLeftRadius, height - inset);
    //   ctx.lineTo(bottomLeftRadius, height - inset);
    //   ctx.lineTo(inset, height - bottomLeftRadius);
    //   ctx.lineTo(inset, topLeftRadius);
    //   ctx.closePath();
    //   ctx.strokeStyle = "rgb(206, 192, 192)";
    //   ctx.stroke();
    // });
    canvasHelper(".border-a", "0.01rem", "black");
    return () => {};
  });
  return (
    <>
      <div className="div-position-title">
        {/* <section className="carousel">
          <div className="container-carousel">
            <div className="list-carousel">
              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={King} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Prime} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Galvatron} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Bee} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>
            </div>

            <button aria-label="previous" className="carousel-previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button aria-label="next" className="carousel-next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div
            aria-roledescription="tablelist"
            className="carousel-indicators"
          ></div>
        </section> */}

        <section className="carousel">
          <div className="container-carousel">
            <div className="list-carousel">
              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={King} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Prime} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Galvatron} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>

              <article>
                <a href="as" className="carousel-element">
                  <figure>
                    <img src={Bee} alt="" />
                  </figure>
                  <article>
                    <h4>Clasificación: Dinobots</h4>
                    <h3>Autobot Grimlock</h3>
                  </article>
                  <div className="container-border-a">
                    <canvas className="border-a"></canvas>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>

        <h2 className="title-carousel">Transformers destacados_</h2>
      </div>
    </>
  );
};

export default Carousel;
