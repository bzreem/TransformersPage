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
    let imgSelected;

    if (matchMedia("(min-width:1024px)").matches) {
      // $video.forEach((el) => {
      //   el.classList.remove("video-active-class");
      // });
      // $video[e.target.dataset.number].classList.add("video-active-class");
      // let videoPlay = $video[e.target.dataset.number].play();

      // if (videoPlay !== undefined) {
      //   videoPlay
      //     .then(() => {
      //       if (videoPlay !== undefined) {
      //         $video.forEach((el) => {
      //           el.classList.remove("video-active-class");
      //           el.pause()
      //         });
      //         $video[e.target.dataset.number].classList.add(
      //           "video-active-class"
      //         );
      //         $video[e.target.dataset.number].play();
      //       }
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // }

      let video = $video[e.target.dataset.number].play();
      $video[e.target.dataset.number].classList.add("video-active-class");

      if (video !== undefined) {
        video.then(() => {
          $video.forEach((el) => {
            if (el !== $video[e.target.dataset.number]) {
              el.classList.remove("video-active-class");
              el.pause();
            } else {
              // console.log("sssss");
            }
          });
        }).catch(e=>{console.log(e)})
      }
    }

    setPj(pjObj);
  };
  return [pj, handleChange];
};

export { usePjClass };
