import video from "../assets/Video/TransformersPresentacion_2.mp4";
import title from "../assets/logos/TransformersTitulo3.png";
import "./VideoPresentationMobile.css";
import { useEffect } from "react";
import { canvasHelper } from "./helpers/canvasHelper";
const VideoPresentationMobile = () => {

  useEffect(()=>{
    canvasHelper(".canvas-header-btn", "0.5rem", "white", 30, 0, 30, 0);
    const $videoMobile = document.getElementById("video-presentation-mobile");
    let videoMobile = $videoMobile.play();
    videoMobile.then(() => {
      if (videoMobile !== undefined) {
        $videoMobile.play();
        $videoMobile.loop = true;
      }
    });
  },[])
  return (
    <div className = "div-container-mobile">
      <figure>
        <video preload="metadata" id= "video-presentation-mobile" muted src={video}></video>
      </figure>
      <section className="section-video-flex-mobile">
        <figure>
          <img src={title} alt="Transformers Title" />     
        </figure>
        <div className="div-border-btn-canvas">
        <button className="more-information">MÁS INFORMACIÓN</button>
        <div className="div-container-canvas-header">
          <canvas className="canvas-header-btn"></canvas>
        </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPresentationMobile;
