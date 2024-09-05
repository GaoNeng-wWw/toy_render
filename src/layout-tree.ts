import { Box, CSSLayoutRule, CSSPainRule, CSSRule, CSSFont, CSSPadding, CSSMargin, CSSWidth, CSSHeight } from "./css-rules";

export class LayoutInfo {
  public position: {x: number;y: number;};
  public padding: Box;
  public margin: Box;
  public content: {width: number;height: number;};
  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0,
    padding: Box = {top: 0, right:0, bottom: 0, left: 0},
    margin: Box = {top: 0, right:0, bottom: 0, left: 0},
  ){
    this.position = {x,y};
    this.content = {width,height}
    this.padding = padding;
    this.margin = margin;
  }
  
  public incrWidth(value:number=0){
    this.content.width += value;
    return this;
  }
  public incrHeight(value:number=0){
    this.content.height += value;
    return this;
  }
  public setWidth(v : number) {
    this.content.width = v;
    return this;
  }
  public setHeight(v: number) {
    this.content.height = v;
    return this;
  }
  public setX(v: number) {
    this.position.x = v;
    return this;
  }
  public setY(v: number) {
    this.position.y = v;
    return this;
  }
  public setPadding(padding:Box){
    this.padding = padding;
    return this;
  }
  public setMargin(margin:Box){
    this.margin = margin;
    return this;
  }
  

  /**
   * @description
   * width = padding.left + content.width + padding.right
   */
  public get width(): number {
    return (this.padding.left ?? 0) + this.content.width + (this.padding.right ?? 0);
  }
  
  /**
   * @description
   * height = padding.top + content.height + padding.bottom
   */
  public get height() : number {
    return (this.padding.top ?? 0) + this.content.height + (this.padding.bottom ?? 0);
  }
}

export interface Layout {
  layoutInfo:LayoutInfo;
  rules: CSSRule[];
  parent: Layout | null;
  layout(ctx: CanvasRenderingContext2D): LayoutInfo;
  pain(ctx: CanvasRenderingContext2D): void;
}

export class TextLayout implements Layout {
  public layoutInfo:LayoutInfo = new LayoutInfo();
  constructor(
    public children: CharLayout[],
    public rules: CSSRule[] = [],
    public parent:Layout | null = null,
    public prev: Layout | null = null,
    public next: Layout | null = null,
  ){}
  layout(ctx: CanvasRenderingContext2D): LayoutInfo {
    this.layoutInfo = new LayoutInfo();
    this.rules.filter(rule=>rule instanceof CSSLayoutRule).forEach(rule => rule.apply(ctx));
    this.layoutInfo.setX(
      this.parent?.layoutInfo.padding.left??0
    );
    this.layoutInfo.setY(
      (this.prev?.layoutInfo.position.y ?? 0) + (this.prev?.layoutInfo.height ??0)
    )
    for (const child of this.children) {
      const childLayoutInfo = child.layout(ctx);
      this.layoutInfo.incrWidth(childLayoutInfo.width);
      this.layoutInfo.setHeight(childLayoutInfo.height);
    }
    return this.layoutInfo;
  }
  pain(ctx: CanvasRenderingContext2D): void {
    const rules = [...this.rules, ...this.parent?.rules ?? []].filter((rule) => rule instanceof CSSPainRule);
    rules.forEach((rule) => rule.apply(ctx));
    this.children.forEach(child => child.pain(ctx));
  }
}

export class CharLayout implements Layout {
  public layoutInfo: LayoutInfo = new LayoutInfo();
  public rules = [];
  constructor(
    public char: string,
    public parent: TextLayout | null = null,
    public next: Layout | null = null,
    public prev: Layout | null = null,
    public x: number=0,
    public y: number=0
  ){}
  pain(ctx: CanvasRenderingContext2D): void {
    this.parent?.rules
    .filter(rule => rule instanceof CSSPainRule)
    .forEach(rule => {rule.apply(ctx)})
    ctx.fillText(
      this.char, this.x,this.y
    )
  }
  layout(ctx: CanvasRenderingContext2D): LayoutInfo {
    ctx.textBaseline='bottom'
    const {width ,fontBoundingBoxAscent} = ctx.measureText(this.char);
    const x = (this.parent?.layoutInfo.position.x ?? 0)+(this.parent?.layoutInfo.width ?? 0);
    this.x=x;
    this.y=Math.abs(fontBoundingBoxAscent) + (this.parent?.layoutInfo.position.y ?? 0);
    this.layoutInfo.setX(x)
    .setY(this.y)
    .setWidth(width)
    .setHeight(Math.abs(fontBoundingBoxAscent))
    return this.layoutInfo;
  }
}

export class InlineLayout implements Layout {
  constructor(
    public children: Layout[] = [],
    public rules: CSSRule[] = [],
    public parent: Layout | null = null,
    public next: Layout | null = null,
    public prev: Layout | null = null,
    public layoutInfo: LayoutInfo = new LayoutInfo(),
  ){}
  layout(ctx: CanvasRenderingContext2D): LayoutInfo {
    let width = 0;
    let height = 0;
    const layoutInfo = new LayoutInfo();
    this.layoutInfo = layoutInfo;
    const paddingRule = this.rules.filter(rule=>rule instanceof CSSPadding).at(-1);
    const marginRule = this.rules.filter(rule => rule instanceof CSSMargin).at(-1);
    if (paddingRule){
      layoutInfo.setPadding(paddingRule.apply());
    }
    if (marginRule){
      layoutInfo.setMargin(marginRule.apply());
    }
    for (const child of this.children) {
      const childLayoutInfo = child.layout(ctx);
      width += childLayoutInfo.width;
      height = Math.max(height, childLayoutInfo.height);
    }
    layoutInfo
    .setWidth(width)
    .setHeight(height)
    .setX(this.parent?.layoutInfo.width ?? 0)
    .setY(0);
    return layoutInfo;
  }
  pain(ctx: CanvasRenderingContext2D): void {
    const painRule = this.rules.filter(rule => rule instanceof CSSPainRule);
    if (!painRule.length){
      ctx.fillStyle = 'transparent';
    }
    painRule.forEach((rule) => rule.apply(ctx));
    ctx.fillRect(
      this.layoutInfo.position.x,
      this.layoutInfo.position.y,
      this.layoutInfo.width,
      this.layoutInfo.height
    );
    this.children.forEach((child) => child.pain(ctx));
  }
}

export class BlockLayout implements Layout {
  constructor(
    public children: Layout[] = [],
    public rules: CSSRule[] = [],
    public parent: Layout | null = null,
    public next: Layout | null = null,
    public prev: Layout | null = null,
    public layoutInfo: LayoutInfo = new LayoutInfo(),
  ){}
  layout(ctx: CanvasRenderingContext2D): LayoutInfo {
    const widthRule = this.rules.filter(rule => rule instanceof CSSWidth).at(-1);
    const heightRule = this.rules.filter(rule => rule instanceof CSSHeight).at(-1);
    let width = widthRule?.apply().contentWidth ??0;
    this.layoutInfo.setWidth(width);
    let height = heightRule?.apply().contentWidth ?? 0;
    let parent = this.parent;
    for (const child of this.children) {
      const childrenLayoutInfo = child.layout(ctx);
      const {height:childrenHeight, position} = childrenLayoutInfo;
      height = position.y + childrenHeight > height ? height + childrenHeight : height
    }
    this.layoutInfo.setHeight(height).setX(0);
    if (width === 0){
      while (parent) {
        if (parent.layoutInfo.content.width) {
          width = parent.layoutInfo.content.width;
          break;
        }
        parent = parent.parent;
      }
      if (width === 0){
        width = ctx.canvas.offsetWidth;
      }
    }
    let y = this.prev ? this.prev.layoutInfo.height : this.parent?.layoutInfo.height ?? 0;
    this.layoutInfo.setWidth(width).setY(y);
    return this.layoutInfo;
  }
  pain(ctx: CanvasRenderingContext2D): void {
    this.rules.filter((rule) => rule instanceof CSSPainRule)
    .forEach(rule => rule.apply(ctx))
    ctx.fillRect(this.layoutInfo.position.x, this.layoutInfo.position.y, this.layoutInfo.width, this.layoutInfo.height);
    this.children.forEach(child => child.pain(ctx));
  }

}