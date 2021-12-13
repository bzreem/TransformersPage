import { useState } from "react";

const useIntersectionObserver = (element) => {
  let [intersection, setIntersection] = useState(null);

  const prueba = async () => {
    let observer = new IntersectionObserver(
      (e) => {
        setIntersection("as");
      },
      { threshold: 0.2 }
    );

    let target = await document.querySelector(element)
    observer.observe(target);
    return [intersection];
  };

  prueba()
};

export { useIntersectionObserver };
