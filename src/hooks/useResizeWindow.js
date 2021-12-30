// import { useState } from "react";

// const useResizeWindow = (mediaQuerie) => {
//   let [mq, setMq] = useState(null);

//   function WindowRisezeHash() {
//     if (matchMedia(mediaQuerie).matches) {
//       if (window.location.hash === "#/") {
//         setMq(true);
//       }
//     } else {
//       if (window.location.hash === "#/") {
//         setMq(false);
//       }
//     }
//   }

//   window.addEventListener("resize", WindowRisezeHash);

//   function DomLoadedHash() {
//     if (matchMedia(mediaQuerie).matches) {
//       if (window.location.hash === "#/") {
//         setMq(true);
//       }
//     } else {
//       if (window.location.hash === "#/") {
//         setMq(false);
//       }
//     }
//   }

//   document.addEventListener("DOMContentLoaded", DomLoadedHash);

//   function hashChangeWindow() {
//     if (matchMedia(mediaQuerie).matches) {
//       if (window.location.hash === "#/") {
//         setMq(true);
//       }
//     } else {
//       setMq(null);
//     }
//   }

//   // let eventWindowHasChange = window.addEventListener("hashchange", () => {
//   //   if (matchMedia(mediaQuerie).matches) {
//   //     if (window.location.hash === "#/") {
//   //       setMq(true);
//   //     }
//   //   } else {
//   //     setMq(false);
//   //   }
//   // });

//   window.addEventListener("hashchange", hashChangeWindow);
//   return [mq, WindowRisezeHash, DomLoadedHash, hashChangeWindow];
// };

// export { useResizeWindow };

import { useState } from "react";

const useResizeWindow = (mediaQuerie) => {
  let [mq, setMq] = useState(null);

  function WindowRisezeHash() {
    if (matchMedia(mediaQuerie).matches) {
      setMq(true);
    } else {
      setMq(false);
    }
  }

  window.addEventListener("resize", WindowRisezeHash);

  function DomLoadedHash() {
    if (matchMedia(mediaQuerie).matches) {
      setMq(true);
    } else {
      setMq(false);
    }
  }

  document.addEventListener("DOMContentLoaded", DomLoadedHash);

  function hashChangeWindow() {
    if (matchMedia(mediaQuerie).matches) {
      setMq(true);
    } else {
    }
  }

  // let eventWindowHasChange = window.addEventListener("hashchange", () => {
  //   if (matchMedia(mediaQuerie).matches) {
  //     if (window.location.hash === "#/") {
  //       setMq(true);
  //     }
  //   } else {
  //     setMq(false);
  //   }
  // });

  window.addEventListener("hashchange", hashChangeWindow);
  return [mq, WindowRisezeHash, DomLoadedHash, hashChangeWindow];
};

export { useResizeWindow };
