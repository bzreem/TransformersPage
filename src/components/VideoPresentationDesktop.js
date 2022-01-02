// import video from "../assets/Video/TransformersPresentacion_1.mp4";
import vide2 from "../assets/Video/TransformersPresentacion_2.mp4";
// import Video2 from "../assets/Video/BeeMovie.mp4";
import "./VideoPresentation.css";
import title from "../assets/logos/TransformersTitulo3.png";
import { useEffect } from "react";
import { canvasHelper } from "./helpers/canvasHelper";
const VideoPresentationDesktop = () => {
  useEffect(() => {
    canvasHelper(".canvas-header-btn", "0.5rem", "white", 30, 0, 30, 0);
    const $videoOne = document.getElementById("video-one-presentation");
    const $videoTwo = document.getElementById("video-two-presentation");
    $videoOne.muted = true;
    $videoTwo.muted = true;
    let videoOne = $videoOne.play();
    let videoTwo = $videoTwo.play();
    let controller = new AbortController();
    let signal = controller.signal;

    Promise.all([videoOne, videoTwo], { signal })
      .then(() => {
        if (videoOne !== undefined && videoTwo !== undefined) {
          $videoOne.play();
          $videoTwo.play();
          $videoOne.currentTime = 0;
          $videoTwo.currentTime = 0;
          $videoOne.loop = true;
          $videoTwo.loop = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => controller.abort();
  }, []);
  return (
    <div className="div-container-desktop">
      <figure className="figure-container-one">
        <video
          preload="metadata"
          id="video-one-presentation"
          muted
          src={vide2}
        ></video>
      </figure>
      <section className="section-video-flex">
        <div className="video-container-two">
          <figure className="figure-container-two">
            <video
              preload="metadata"
              id="video-two-presentation"
              muted
              src={vide2}
            ></video>
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
