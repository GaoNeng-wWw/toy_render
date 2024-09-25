import { CSSBoxSizing, CSSHeight, CSSMargin, CSSPadding, CSSPainRule, CSSRule, CSSWidth } from "./css-rules";
export class Position {
  constructor(
    public x: number = 0,
    public y: number = 0
  ) { }
  toJSON() {
    return { x: this.x, y: this.y }
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
export class RectBox {
  public top: number;
  public right: number;
  public bottom: number;
  public left: number;
  constructor(
    _top?: number,
    _right?: number,
    _bottom?: number,
    _left?: number
  ) {
    this.top = _top ? _top : _bottom ?? 0;
    this.right = _right ? _right : _left ?? 0;
    this.left = _left ? _left : _right ?? 0;
    this.bottom = _bottom ? _bottom : _bottom ?? 0;
  }
}
export class Area {
  constructor(
    public width: number = 0,
    public height: number = 0,
    public x: number = 0,
    public y: number = 0,
  ) { }
  toJSON() {
    return { width: this.width, height: this.height, x: this.x, y: this.y }
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}

export class Layout {
  constructor(
    public content: Area = new Area(),
    public padding: RectBox = new RectBox(),
    public margin: RectBox = new RectBox(),
    public children: Layout[] = [],
    public position: Position = new Position(),
    public prev: Layout | null = null,
    public parent: Layout | null = null,
    public styles: CSSRule[] = [],
    public id: string = '',
  ) { }
  layout(ctx: CanvasRenderingContext2D) { }
  pain(ctx: CanvasRenderingContext2D) { }
  get offsetWidth() {
    return this.margin.left + this.padding.left + this.content.width + this.padding.right + this.margin.right;
  }
  get offsetHeight() {
    return this.margin.top + this.padding.top + this.content.height + this.padding.bottom + this.margin.bottom;
  }
}

export class BlockLayout extends Layout {
  constructor() {
    super();
  }
  // 返回一个最近设置宽度的祖先
  private findParent(ctx: CanvasRenderingContext2D) {
    while (this.parent && this.parent.content.width === undefined) {
      this.parent = this.parent.parent;
    }
    return !this.parent ? ctx.canvas.offsetWidth : this.parent.content.width;
  }
  layout(ctx: CanvasRenderingContext2D): void {
    const widthStyle = this.styles.filter(style => style instanceof CSSWidth).at(-1);
    const heightStyle = this.styles.filter(style => style instanceof CSSHeight).at(-1);
    const paddingStyles = this.styles.filter(style => style instanceof CSSPadding).at(-1);
    const marginStyles = this.styles.filter(style => style instanceof CSSMargin).at(-1);
    if (marginStyles) {
      this.margin = marginStyles?.apply();
    }
    if (paddingStyles) {
      this.padding = paddingStyles.apply();
    }

    if (widthStyle) {
      this.content.width = widthStyle.apply().contentWidth;
    } else {
      const width = this.findParent(ctx)
      this.content.width = width;
    }
    const boxSizing = this.styles.filter(style => style instanceof CSSBoxSizing).at(-1);
    if (boxSizing) {
      const { width, height } = boxSizing.calc(this.content, this.padding)
      this.content.width = width;
      this.content.height = height;
    }
    let heightUnset = true;
    if (heightStyle) {
      this.content.height = heightStyle.apply().contentHeight;
      heightUnset = false;
    }
    if (this.prev) {
      this.position.y = this.prev.position.y + this.prev.offsetHeight;
      this.position.x = 0;
    } else if (this.parent) {
      this.position.y = this.parent.position.y + this.parent.padding.top + this.margin.top;
      this.position.x = this.parent.position.x + this.parent.padding.left + this.margin.left;
    } else {
      this.position.y = 0;
    }
    this.content.x = this.position.x;
    this.content.y = this.position.y;
    for (const child of this.children) {
      child.layout(ctx);
      if (heightUnset) {
        this.content.height += child.offsetHeight;
      }
    }
  }
  pain(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'transparent';
    this.styles.filter(style => style instanceof CSSPainRule)
      .forEach(style => style.apply(ctx));
    ctx.fillRect(this.position.x, this.position.y, this.offsetWidth, this.offsetHeight);
    this.children.forEach(child => child.pain(ctx));
  }
}