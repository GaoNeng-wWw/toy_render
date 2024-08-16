import { InlineLayout, TextLayout } from "./layout-tree";

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


  const inline = new InlineLayout(0,0,0,0,[],null);
  const cn = new TextLayout(inline, '你好 ');
  const en = new TextLayout(inline, 'hello world')
  inline.children.push(cn,en);
  inline.layout(ctx);
  inline.paint(ctx);
  requestAnimationFrame(start)
}

// start();

requestAnimationFrame(start)