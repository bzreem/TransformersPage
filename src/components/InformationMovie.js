import { useEffect } from "react";
import MovieImg from "../assets/Img/BeeMovie.jpg";
import { canvasHelper } from "./helpers/canvasHelper";
import "./InformationMovie.css";
const InformationMovie = () => {
  useEffect(() => {
    canvasHelper(".border-canvas", "0.5rem", "rgb(194, 187, 187)");
  }, []);
  return (
    // <section className="section-movie">
    //   <div className="container-section-movie">
    //     <figure>
    //       <img src={MovieImg} alt="" />
    //     </figure>

    //     <div className="information-movie">
    //       <article>
    //         <h2>Bumblebee Movie. A transformers History</h2>
    //       </article>
    //     </div>
    //   </div>
    //   <div className="border-container">
    //       <div className="border"></div>
    //   </div>
    // </section>

    <section className="section-movie">
      <div className="container-section-movie">
        <figure>
          <img src={MovieImg} alt="" />
        </figure>
        <div className="information-movie">
          <article className="information-movie-article">
            <h2>Bumblebee Movie. A transformers History</h2>
          </article>
        </div>
        <div className="border-canvas-movie">
          <canvas className="border-canvas"></canvas>
        </div>
      </div>
    </section>
  );
};

export default InformationMovie;
