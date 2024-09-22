const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let width = 200;
let height = 200;
const observer = new ResizeObserver(() => {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
});
observer.observe(canvas)


function start(){
  canvas.width = width;
  canvas.height = height;
  requestAnimationFrame(start)
}
start()
requestAnimationFrame(start)