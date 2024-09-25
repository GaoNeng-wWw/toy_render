import { CSSBackground, CSSBorderBox, CSSBoxSizing, CSSFont, CSSHeight, CSSPadding } from "./css-rules";
import { BlockLayout, TextLayout } from "./layout-tree";

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
  const blockLayout = new BlockLayout();
  const c1 = new BlockLayout();
  const c2 = new BlockLayout();
  const c3 = new BlockLayout();
  const c4 = new BlockLayout();
  const c5 = new BlockLayout();


  const t1 = new TextLayout('hello world')
  const t2 = new TextLayout('hello world!')

  blockLayout.children.push(c1, c2);
  c1.parent = blockLayout;
  c2.parent = blockLayout;
  c1.children.push(c3);
  c3.children.push(c4)
  c3.parent = c1;
  c4.parent = c3;
  c5.parent = c2;
  t1.parent = c2;
  t2.parent = c2;
  c2.children.push(c5, t1, t2);

  c2.prev = c1
  t1.prev = c5
  t2.prev = t1;


  t1.styles.push(
    new CSSFont('48px sans')
  )
  c1.styles.push(
    new CSSPadding({ y: 16, x: 16 }),
    new CSSBackground('#FF0000'),
    new CSSBorderBox()
  )
  c3.styles.push(
    new CSSHeight(150),
    new CSSPadding({ x: 16, y: 16 }),
    new CSSBorderBox(),
    new CSSBackground('#00ff00')
  )
  c2.styles.push(
    new CSSHeight(150),
    new CSSPadding({ x: 16, y: 16 }),
    new CSSBorderBox(),
    new CSSBackground('#66ccff')
  )
  c5.styles.push(
    new CSSHeight(150),
    new CSSBackground('#ff0000')
  )
  c4.styles.push(new CSSHeight(150), new CSSBackground('#0000ff'));

  blockLayout.id = 'blockLayout';
  c1.id = 'c1';
  c2.id = 'c2';
  c3.id = 'c3';
  c4.id = 'c4';
  c5.id = 'c5';
  t1.id = 't1';
  t2.id = 't2'
  debugger;
  blockLayout.layout(ctx);
  blockLayout.pain(ctx);
  requestAnimationFrame(start)
}
start()