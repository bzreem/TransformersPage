// import { IntersectionObserverHelper } from "../components/helpers/IntersectionObserverHelper";

const MapsBg = (element) => {
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
    $video[index].classList.remove("active-video-maps");
    $video[index].pause()
  });

  $img[element].classList.add("img-active-bg-maps");
  $span[element].classList.add("span-active-maps");
  $figure[element].classList.add("active-scale");
  $article[element].classList.add("active-information-maps");
  $video[element].classList.add("active-video-maps");
  $video[element].play()
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
