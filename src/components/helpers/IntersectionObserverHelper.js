const IntersectionObserverHelper = (elelement) => {
  let observer = new IntersectionObserver(
    (e) => {
      if (e[0].isIntersecting) {
        document.querySelector(elelement).play();
      } else {
        document.querySelector(elelement).pause();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(document.querySelector(elelement));
};

export { IntersectionObserverHelper };
