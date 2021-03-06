const MapsBg = async (element) => {
  const $img = document.querySelectorAll(
    ".section-maps .figure-maps-absolute img"
  );
  const $span = document.querySelectorAll(
    ".section-maps .div-container-figcaption span"
  );

  const $divFigcaption = document.querySelectorAll(
    ".section-maps .div-container-figcaption"
  );
  const $figure = document.querySelectorAll(".select-maps-figure-scale");
  const $article = document.querySelectorAll(
    ".article-information-position-absolute"
  );

  const $video = document.querySelectorAll(
    ".container-video-maps figure video"
  );
  $img.forEach((el, index) => {
    el.classList.remove("img-active-bg-maps");
    $span[index].classList.remove("span-active-maps");
    $figure[index].classList.remove("active-scale");
    $article[index].classList.remove("active-information-maps");
    // $video[index].classList.remove("active-video-maps");
    // $video[index].style.display = "none";
  });

  $img[element].classList.add("img-active-bg-maps");
  $span[element].classList.add("span-active-maps");
  $figure[element].classList.add("active-scale");
  $article[element].classList.add("active-information-maps");
  // $video.forEach((el) => {
  //   el.classList.remove("active-video-maps");
  //   if (videoPlay !== undefined) {
  //     el.pause();
  //   }else{
  //     console.log("hola")
  //   }
  // });
  // $video.forEach((el) => {
  //   el.classList.remove("active-video-maps");
  // });
  // $video[element].classList.add("active-video-maps");
  // if (
  //   !(
  //     $video[element].paused === false &&
  //     $video[element].ended === false &&
  //     $video[element].currentTime > 0
  //   )
  // ) {
  //   $video[element].play();
  // } else {
  //   console.log("hola");
  // }

  let video = $video[element].play();
  $video[element].classList.add("active-video-maps");
  let controller = new AbortController();
  let signal = controller.signal;

  if (video !== undefined) {
    Promise.all([video], {signal: signal})
      .then(() => {
        $video.forEach((el) => {
          if (el !== $video[element] && el.currentTime > 0 && !el.paused) {
            el.classList.remove("active-video-maps");
            el.pause();
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });

    if (window.location.hash !== "#/") {
      controller.abort();
    }
  }
  // let videoPlay = $video[element].play();
  // if (videoPlay !== undefined) {
  //   videoPlay
  //     .then(() => {
  //       if (videoPlay !== undefined) {
  //         $video.forEach((el) => {
  //           el.classList.remove("active-video-maps");
  //           el.pause();
  //         });
  //         $video[element].classList.add("active-video-maps");
  //         $video[element].play();
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }
  // IntersectionObserverHelper($video[element])
  // console.log($video[element])

  if (matchMedia("(max-width:1399px)").matches) {
    if (element === 0) {
      $divFigcaption[0].style.transform = "translateX(150px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateX(200px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateX(250px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    }
    if (element === 1) {
      $divFigcaption[0].style.transform = "translateX(-50px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateX(-5px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateX(50px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    } else if (element === 2) {
      $divFigcaption[0].style.transform = "translateX(-250px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateX(-200px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateX(-150px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    }
  }

  if (matchMedia("(min-width:1400px)").matches) {
    if (element === 0) {
      $divFigcaption[0].style.transform = "translateY(0px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateY(0px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateY(0px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    }
    if (element === 1) {
      $divFigcaption[0].style.transform = "translateY(-100px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateY(-100px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateY(-100px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    } else if (element === 2) {
      $divFigcaption[0].style.transform = "translateY(-200px)";
      $divFigcaption[0].style.transition = "0.8s transform ease";
      $divFigcaption[1].style.transform = "translateY(-200px)";
      $divFigcaption[1].style.transition = "0.8s transform ease";
      $divFigcaption[2].style.transform = "translateY(-200px)";
      $divFigcaption[2].style.transition = "0.8s transform ease";
    }
  }
};

export default MapsBg;
