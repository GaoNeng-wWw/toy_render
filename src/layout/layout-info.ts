import { $default } from "../utils";

export class Position {
  constructor(
    public x: number = 0,
    public y: number = 0
  ) { }
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
  ) { }
}

export class Layout {
  constructor(
    public content: Area = new Area(),
    public padding: RectBox = new RectBox(),
    public margin: RectBox = new RectBox(),
    public children: Layout[] = [],
    public position: Position = new Position(),
    public prev: Layout | null = null,
    public parent: Layout | null = null
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

export class CharLayout extends Layout {
  constructor(private readonly char: string) {
    super();
  }
  layout(ctx: CanvasRenderingContext2D): void {
    const { width, fontBoundingBoxAscent } = ctx.measureText(this.char);
    this.content.width = width;
    this.content.height = fontBoundingBoxAscent;
    this.position.x = $default(this.parent?.content.width, 0);
    if (!this.prev) {
      const parent = this.parent;
      /**
       * 
        BROWSER TOP
          -----
            | OFFSET TOP
          -----
  ML PL MTMTMTMTMT PR MR
  ML PL PTPTPTPTPT PR MR
  ML PL CCCCCCCCCC PR MR
  ML PL PBPBPBPBPB PR MR
  ML PL MBMBMBMBMB PR MR
       */
      const y = $default(parent?.position.y, 0) + $default(parent?.margin.top, 0) + $default(parent?.padding.top, 0);
      this.position.y = y;
    } else {
      this.position.y = this.prev?.position.y ?? 0;
    }
  }
  pain(ctx: CanvasRenderingContext2D): void {
    ctx.fillText(
      this.char, this.position.x, this.position.y
    )
  }
}

export class TextLayout extends Layout {
  constructor(private readonly text: string) {
    super();
    const charLayoutNodes: CharLayout[] = [];
    for (let i = 0; i < this.text.length; i++) {
      const node = new CharLayout(this.text[i]);
      if (charLayoutNodes.length > 1) {
        node.prev = charLayoutNodes[i - 1];
      }
      node.parent = this;
      charLayoutNodes.push(node);
    }
    this.children = charLayoutNodes;
  }
  layout(ctx: CanvasRenderingContext2D): void {
    for (const node of this.children) {
      node.layout(ctx);
      const { offsetWidth, offsetHeight } = node;
      this.content.width += offsetWidth;
      this.content.height = Math.max(this.content.height, offsetHeight);
    }
  }
  pain(ctx: CanvasRenderingContext2D): void {
    this.children.forEach(child => child.pain(ctx));
  }
}