import { _Node, _Text } from "./html-parser";

export type LayoutInfo = {
  x:number;
  y:number;
  w:number;
  h:number;
}

export class Layout{
  constructor(
    public width: number,
    public height: number,
    public x:number,
    public y:number,
    public parent: Layout | null,
  ){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.parent=parent;
  }
  layout(ctx: CanvasRenderingContext2D):LayoutInfo{
    return {
      x:this.x,
      y:this.y,
      w:this.width,
      h:this.height
    }
  }
  pain(ctx: CanvasRenderingContext2D): void{}
}
export class InlineLayout extends Layout{
  constructor(
    public width: number = 0,
    public height: number = 0,
    public x:number = 0,
    public y:number = 0,
    public children: Layout[]=[],
    public parent: Layout | null
  ){
    super(
      width,
      height,
      x,
      y,
      parent,
    );
    this.children = children;
    this.parent=parent;
  }
  layout(ctx: CanvasRenderingContext2D){
    const childrenLayoutInfo = this.children.map((child) => child.layout(ctx));
    const width = childrenLayoutInfo.reduce((pre,cur) => {
      return pre + cur.w
    }, 0);
    const height = Math.max(...childrenLayoutInfo.map((child) => child.h));
    return {
      x:this.x,
      y:this.y,
      w:width,
      h:height
    }
  }
  pain(ctx: CanvasRenderingContext2D): void {
    this.children.forEach(child => child.pain(ctx));
  }
}

export class TextLayout extends InlineLayout {
  constructor(
    public parnet:Layout | null=null,
    public data: string
  ){
    super(0,0,0,0,[], parnet);
    this.parent = parnet;
    this.data = data
  }
  layout(ctx: CanvasRenderingContext2D): { x: number; y: number; w: number; h: number; } {
    const {width ,fontBoundingBoxDescent} = ctx.measureText(this.data);
    const x = this.parent?.width ?? 0 + width;
    const y = 0;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=fontBoundingBoxDescent;
    return {
      x,y,
      w: width, h:fontBoundingBoxDescent
    }
  }
  pain(ctx: CanvasRenderingContext2D): void {
    ctx.fillText(this.data, this.x, this.y, this.width);
  }
}