import { useResizeWindow } from "../hooks/useResizeWindow";
import { useEffect, useState } from "react";
import VideoPresentationDesktop from "./VideoPresentationDesktop";
import VideoPresentationMobile from "./VideoPresentationMobile";
const VideoPresentation = () => {
  let [mq, WindowRisezeHash, DomLoadedHash, hashChangeWindow] =
    useResizeWindow("(min-width: 600px)");
  let [videoVisibility, setVideoVisibilite] = useState(null);
  useEffect(() => {
    if (mq === null) return;
    if (mq) {
      // const $videoOne = document.getElementById("video-one-presentation");
      // const $videoTwo = document.getElementById("video-two-presentation");
      // $videoOne.muted = true;
      // $videoTwo.muted = true;
      // let videoOne = $videoOne.play();
      // let videoTwo = $videoTwo.play();

      // Promise.all([videoOne, videoTwo])
      //   .then(() => {
      //     if (videoOne !== undefined && videoTwo !== undefined) {
      //       $videoOne.play();
      //       $videoTwo.play();
      //       $videoOne.currentTime = 0;
      //       $videoTwo.currentTime = 0;
      //       $videoOne.loop = true;
      //       $videoTwo.loop = true;
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
      setVideoVisibilite(<VideoPresentationDesktop />);
    } else {
      // const $videoMobile = document.getElementById("video-presentation-mobile");
      // let videoMobile = $videoMobile.play();
      // videoMobile.then(() => {
      //   if (videoMobile !== undefined) {
      //     $videoMobile.play();
      //     $videoMobile.loop = true;
      //   }
      // });

      setVideoVisibilite(<VideoPresentationMobile />);
    }

    return () => {
      window.removeEventListener("resize", WindowRisezeHash);
      document.removeEventListener("DOMContentLoaded", DomLoadedHash);
      window.removeEventListener("hashchange", hashChangeWindow);
      setVideoVisibilite(null);
    };
  }, [mq]);

  // return <>{mq ? <VideoPresentationDesktop /> : <VideoPresentationMobile />}</>;
  return <>{videoVisibility}</>;
};

export default VideoPresentation;
