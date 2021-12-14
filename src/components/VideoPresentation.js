import { useResizeWindow } from "../hooks/useResizeWindow";
import { useEffect } from "react";
import VideoPresentationDesktop from "./VideoPresentationDesktop";
import VideoPresentationMobile from "./VideoPresentationMobile";
// import { IntersectionObserverHelper } from "./helpers/IntersectionObserverHelper";
const VideoPresentation = () => {
  let [mq] = useResizeWindow("(min-width: 600px)");

  useEffect(() => {
    if (mq === null) return;
    if (mq) {
      const $videoOne = document.getElementById("video-one-presentation");
      const $videoTwo = document.getElementById("video-two-presentation");
      $videoOne.muted = true;
      $videoTwo.muted = true;
      let videoOne = $videoOne.play();
      let videoTwo = $videoTwo.play();

      Promise.all([videoOne, videoTwo])
        .then(() => {
          if (videoOne !== undefined && videoTwo !== undefined) {
            $videoOne.play();
            $videoTwo.play();
            $videoOne.loop = true;
            $videoTwo.loop = true;
          }
        })
        .catch((e) => {
          console.log(e);
        });

      // IntersectionObserverHelper("#video-one-presentation")
      // IntersectionObserverHelper("#video-two-presentation")
    } else {
    }

    return () => {};
  }, [mq]);

  return <>{mq ? <VideoPresentationDesktop /> : <VideoPresentationMobile />}</>;
};

export default VideoPresentation;
