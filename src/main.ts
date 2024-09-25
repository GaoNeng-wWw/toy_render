import { CSSBackground, CSSBorderBox, CSSHeight, CSSPadding } from "./css-rules";
import { BlockLayout } from "./layout-tree";

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

  blockLayout.children.push(c1, c2);
  c1.parent = blockLayout;
  c2.parent = blockLayout;
  c1.children.push(c3);
  c3.children.push(c4)
  c3.parent = c1;
  c4.parent = c3;

  c2.prev = c1

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
    new CSSBackground('#66ccff')
  )
  c4.styles.push(new CSSHeight(150), new CSSBackground('#0000ff'));

  blockLayout.id = 'blockLayout';
  c1.id = 'c1';
  c2.id = 'c2'
  c3.id = 'c3';
  c4.id = 'c4'
  blockLayout.layout(ctx);
  blockLayout.pain(ctx);
  requestAnimationFrame(start)
}
start()