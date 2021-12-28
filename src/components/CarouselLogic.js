import Glider from "react-glider";
import "glider-js/glider.min.css";
export default function CarouselLogic() {
  document.addEventListener("DOMContentLoaded", () => {
    // new Glider(document.querySelector(".list-carousel"), {
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   draggable: true,
    //   dots: ".carousel-indicators",
    //   arrows: {
    //     prev: ".carousel-previous",
    //     next: ".carousel-next",
    //   },
    //   responsive: [
    //     {
    //       // screens greater than >= 775px
    //       breakpoint: 500,
    //       settings: {
    //         // Set to `auto` and provide item width to adjust to viewport
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //       },
    //     },
    //     {
    //       // screens greater than >= 1024px
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //       },
    //     },
    //     {
    //       // screens greater than >= 1024px
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 4,
    //       },
    //     },
    //   ],
    // });
    console.log(Glider)
  });
}
