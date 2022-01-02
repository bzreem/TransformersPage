const TransitionImages = (elements, classElement) => {
  let contador = 0;

  let intervalImage = setInterval(() => {
    if (contador < elements.length-1) {
      elements[contador].classList.remove(classElement);
      contador++;
      elements[contador].classList.add(classElement);
    } else {
      elements[contador].classList.remove(classElement);
      contador = 0;
      elements[contador].classList.add(classElement);

    }
  }, 3000);
    return intervalImage
};
export { TransitionImages };
