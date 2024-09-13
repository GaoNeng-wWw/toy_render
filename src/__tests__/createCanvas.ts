export const createCavnas = () => {
  let canvas: any;
  let ctx: CanvasRenderingContext2D;
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  return {canvas,ctx};
}