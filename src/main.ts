import { CSSBackground, CSSColor, CSSFont, CSSHeight, CSSRule, CSSWidth } from "./css-rules";
import { BlockLayout, CharLayout, InlineLayout, TextLayout } from "./layout-tree";

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let width = 200;
let height = 200;
const observer = new ResizeObserver(() => {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
});
observer.observe(canvas)

function createText(text: string, rules: CSSRule[] = []){
  const textLayout = new TextLayout(
    [],
    [
      new CSSColor('#000000'), new CSSFont('48px sans-serifs'),
      ...rules
    ]
  );
  let prev = null
  for (const char of text){
    prev = new CharLayout(char,textLayout,null,prev);
    textLayout.children.push(prev);
  }
  return textLayout;
}

function inlineLayout(){
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

function blockLayout(){
  const blockLayout = new BlockLayout(
    [],
    [
      new CSSBackground('#ff0000'),
      new CSSWidth(500),
    ],
  )
  const c1 = new BlockLayout(
    [],
    [
      new CSSBackground('#00ff00'),
      new CSSHeight(100)
    ],
  )
  const c2 = new BlockLayout([],
    [
      new CSSBackground('#0000ff'),
      new CSSHeight(50)
    ],
  )
  const t = createText('hello-world', [new CSSColor('#ffff00')]);
  blockLayout.children.push(c1, c2, t);
  t.prev = c2;
  c2.prev = c1;
  c1.parent = blockLayout;
  c2.parent = blockLayout;
  t.parent = blockLayout;
  blockLayout.layout(ctx);
  blockLayout.pain(ctx)
}

function start(){
  canvas.width = width;
  canvas.height = height;
  blockLayout();
  requestAnimationFrame(start)
}
start()
requestAnimationFrame(start)