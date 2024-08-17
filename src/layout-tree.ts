import { _Node, _Text } from "./html-parser";

export type LayoutInfo = {
  x:number;
  y:number;
  width:number;
  height:number;
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
      width:this.width,
      height:this.height
    }
  }
  paint(ctx: CanvasRenderingContext2D): void{}
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
    for (const child of this.children){
      const info = child.layout(ctx);
      this.width += info.width;
      this.height = Math.max(this.height, info.height);
    }
    this.x = this.parent?.width ?? 0;
    return {
      x:this.x,
      y:this.y,
      width:this.width,
      height:this.height
    }
  }
  paint(ctx: CanvasRenderingContext2D): void {
    super.paint(ctx);
    this.children.forEach(child => child.paint(ctx));
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
  layout(ctx: CanvasRenderingContext2D){
    const {width ,fontBoundingBoxAscent} = ctx.measureText(this.data);
    const x = this.parent?.width ?? 0;
    const y = fontBoundingBoxAscent;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=fontBoundingBoxAscent;
    return {
      x,
      y,
      width: width,
      height:this.height
    }
  }
  paint(ctx: CanvasRenderingContext2D): void {
    ctx.fillText(this.data, this.x, this.y);
  }
}