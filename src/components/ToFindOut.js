import "./ToFindOut.css";
import Bee from "../assets/Img/BeeMovie.jpg";
import { useEffect } from "react";
import { canvasHelper } from "./helpers/canvasHelper";
const ToFindOut = () => {
  useEffect(() => {
    canvasHelper(".border-aa", "0.5rem");
    return () => {};
  }, []);
  return (
    <section className="section-find-out-bg">
      <article className="article-find-out">
        <h3>MÁS PARA</h3>
        <h2>DESCUBRIR</h2>
      </article>

      <div className="div-container-img-find-out">
        <a href="sd">
          <article>
            <figure>
              <img src={Bee} alt="" />
            </figure>
            <div className="div-container-title-article">
              <h3>ESTRUCTURA COMPETITIVA 2021</h3>
            </div>
          </article>
          <div className="div-border-a-find-out">
            <canvas className="border-aa"></canvas>
          </div>
        </a>

        <a href="sd" className="second-a">
          <article>
            <figure>
              <img src={Bee} alt="" />
            </figure>
            <div className="div-container-title-article">
              <h3>ESTRUCTURA COMPETITIVA 2021</h3>
            </div>
          </article>
          <div className="div-border-a-find-out">
            <canvas className="border-aa"></canvas>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ToFindOut;
