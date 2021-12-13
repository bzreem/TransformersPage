const canvasHelper = (
  classElement,
  border,
  color = "rgb(206, 192, 192)",
  top = 0,
  topRigth = 30,
  bottomRigth = 0,
  bottomLeft = 0
) => {
  const $canvas = document.querySelectorAll(classElement);
  //   const radius = [0, 30, 0, 0];
  const radius = [top, topRigth, bottomRigth, bottomLeft];
  const topLeftRadius = radius[0];
  const topLRigthtRadius = radius[1];
  const bottomRigthRadius = radius[2];
  const bottomLeftRadius = radius[3];

  $canvas.forEach((el) => {
    const ctx = el.getContext("2d");
    ctx.lineWidth = border;
    const inset = ctx.lineWidth / 1;
    const withCanvas = el.width;
    const height = el.height;
    ctx.lineTo(topLeftRadius, inset);
    ctx.lineTo(withCanvas - topLRigthtRadius, inset);
    ctx.lineTo(withCanvas - inset, topLRigthtRadius);
    ctx.lineTo(withCanvas - inset, height - bottomRigthRadius);
    ctx.lineTo(withCanvas - bottomLeftRadius, height - inset);
    ctx.lineTo(bottomLeftRadius, height - inset);
    ctx.lineTo(inset, height - bottomLeftRadius);
    ctx.lineTo(inset, topLeftRadius);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  });
};

export { canvasHelper };
