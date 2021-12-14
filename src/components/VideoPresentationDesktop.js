import video from "../assets/Video/TransformersPresentacion.mp4";
import Video2 from "../assets/Video/BeeMovie.mp4";
import "./VideoPresentation.css";
import title from "../assets/logos/TransformersTitulo3.png";
import { useEffect } from "react";
import { canvasHelper } from "./helpers/canvasHelper";
const VideoPresentationDesktop = () => {
  useEffect(() => {
    canvasHelper(".canvas-header-btn", "0.5rem", "white", 30, 0, 30, 0);
  }, []);
  return (
    <div className="div-container-desktop">
      <figure className="figure-container-one">
        <video id="video-one-presentation" muted src={video}></video>
      </figure>
      <section className="section-video-flex">
        <div className="video-container-two">
          <figure className="figure-container-two">
            <video id="video-two-presentation" muted src={video}></video>
          </figure>
          <figure className="figure-container-three">
            <img src={title} alt="Title Transformers" />
          </figure>
          <div className="container-button">
            <div className="div-border-btn-canvas">
              <button className="more-information">MÁS INFORMACIÓN</button>
              <div className="div-container-canvas-header">
                <canvas className="canvas-header-btn"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPresentationDesktop;
