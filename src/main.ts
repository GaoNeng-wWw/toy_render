import { CSSBackground, CSSColor, CSSFont } from "./css-rules";
import { CharLayout, InlineLayout, TextLayout } from "./layout-tree";

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
  const inlineLayout = new InlineLayout([],[
    new CSSBackground('#ff0000'),
  ]);
  const textLayout = new TextLayout(
    [],
    [
      new CSSColor('#00ff00'),
      new CSSFont('48px sans-serifs'),
    ]
  )
  const text = "hello, world";
  let prev = null
  for (const char of text){
    prev = new CharLayout(char,textLayout,null,prev);
    textLayout.children.push(prev);
  }
  inlineLayout.children.push(textLayout);
  textLayout.parent = inlineLayout;
  inlineLayout.layout(ctx);
  inlineLayout.pain(ctx);
  requestAnimationFrame(start)
}
requestAnimationFrame(start)