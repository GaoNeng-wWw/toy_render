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
    ctx.fillStyle = ctx;
    return this.hex;
  }
}

export type Box = {
  top?:number;
  right?:number;
  bottom?:number;
  left?:number;
}

export class CSSLayoutRule extends CSSRule {}

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
    private box:Box = {}
  ){
    super(box);
    this.box=box;
  }
  apply() {
    const {top,right,bottom,left} = this.box ?? {top: 0, right: 0, bottom: 0, left: 0};
    return {
      top: top ?? bottom ?? 0,
      right: right ?? left ?? 0,
      bottom: bottom ?? top ?? 0,
      left: left ?? right ?? 0
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
    const {top,right,bottom,left} = this.box ?? {top: 0, right: 0, bottom: 0, left: 0};
    return {
      top: top ?? bottom ?? 0,
      right: right ?? left ?? 0,
      bottom: bottom ?? top ?? 0,
      left: left ?? right ?? 0
    }
  }
}

