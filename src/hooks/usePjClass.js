import { useState } from "react";

const usePjClass = (initialPj) => {
  let [pj, setPj] = useState(initialPj);
  const handleChange = (e) => {
    e.preventDefault();
    const $input = document.querySelectorAll(
      ".section-class-pj .div-container-buttons-pj form input"
    );
    const $img = document.querySelectorAll(".characters figure img");
    const $video = document.querySelectorAll(".video-choose-class");
    $img.forEach((el, index) => {
      el.classList.remove("img-active");
      if (matchMedia("(min-width: 1024px)").matches) {
        // $video[index].classList.remove("video-active-class");
        // $video[index].pause();
      }
    });

    $input.forEach((el) => {
      el.classList.remove("input-active");
    });
    e.target.classList.toggle("input-active");
    let pjObj = {
      name: e.target.name,
      info: e.target.dataset.information,
      type: e.target.dataset.type,
    };

    $img[e.target.dataset.number].classList.add("img-active");

    if (matchMedia("(min-width:1024px)").matches) {
      let video = $video[e.target.dataset.number].play();
      $video[e.target.dataset.number].classList.add("video-active-class");

      if (video !== undefined) {
        video
          .then(() => {
            $video.forEach((el) => {
              if (
                el !== $video[e.target.dataset.number] &&
                el.currentTime > 0 &&
                !el.paused
              ) {
                el.classList.remove("video-active-class");
                el.pause();
              } else {
                // console.log("sssss");
              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }

    setPj(pjObj);
  };
  return [pj, handleChange];
};

export { usePjClass };
