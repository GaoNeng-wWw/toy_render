export class CSSRule {
  constructor(protected value: any){
    this.value = value;
  }
}

export class CSSPainRule extends CSSRule {
  constructor(
    protected value: string,
  ){
    super(value);
  }
  apply(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.value;
    return this.value;
  }
};

export class CSSBackground extends CSSPainRule {
  constructor(
    private hex: string
  ){
    super(hex);
    this.hex = hex;
  }

  apply(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.hex;
    return this.hex;
  }
}

export class CSSColor extends CSSPainRule {
  constructor(
    private hex: string
  ){
    super(hex);
    this.hex = hex;
  }
  apply(ctx: CanvasRenderingContext2D): string {
    ctx.fillStyle = this.hex;
    return this.hex;
  }
}

export type Box = {
  top?:number;
  right?:number;
  bottom?:number;
  left?:number;
  x?:number;
  y?:number;
}

export class CSSLayoutRule extends CSSRule {
  constructor(
    protected value: any,
  ){
    super(value);
  }
  apply(ctx: CanvasRenderingContext2D) {}
}

export class CSSFont extends CSSLayoutRule{
  constructor(
    private size:string
  ){
    super(size);
  }
  apply(ctx: CanvasRenderingContext2D): string {
    ctx.font = this.size;
    return this.size;
  }
}

export class CSSWidth extends CSSLayoutRule {
  constructor(
    private size: number
  ){
    super(size);
    this.size = size;
  }

  apply() {
    return {
      contentWidth: this.size
    }
  }
}

export class CSSHeight extends CSSLayoutRule {
  constructor(
    private size: number
  ){
    super(size);
    this.size = size;
  }

  apply() {
    return {
      contentWidth: this.size
    }
  }
}

export class CSSPadding extends CSSLayoutRule {
  constructor(
    private box:Box = {top: 0, right: 0, bottom: 0, left: 0,x:0,y:0}
  ){
    super(box);
    this.box=box;
  }
  apply() {
    const {top,right,bottom,left,x,y} = this.box;
    return {
      top: y ?? top ?? 0,
      right: x ?? right ?? 0,
      bottom: y ??bottom ?? 0,
      left: x ?? left ?? 0
    }
  }
}

export class CSSMargin extends CSSLayoutRule {
  constructor(
    private box:Box = {}
  ){
    super(box);
    this.box=box;
  }
  apply() {
    const {top,right,bottom,left, x, y} = this.box ?? {top: 0, right: 0, bottom: 0, left: 0};
    return {
      top: y ?? top ?? 0,
      right: x ?? right ?? 0,
      bottom: y ??bottom ?? 0,
      left: x ?? left ?? 0
    }
  }
}

