import { useState } from "react";

const useResizeWindow = (mediaQuerie) => {
  let [mq, setMq] = useState(null);

  window.addEventListener("resize", (e) => {
    if (matchMedia(mediaQuerie).matches) {
      setMq(true);
    } else {
      setMq(false);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (matchMedia(mediaQuerie).matches) {
      setMq(true);
    } else {
      setMq(false);
    }
  });

  return [mq];
};

export { useResizeWindow };
