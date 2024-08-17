import { _Node } from "./html-parser";

export type Box = {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export class CssRule {
  constructor(){}
  actions(ctx: CanvasRenderingContext2D): any{}
}

export class CssDrawRule extends CssRule {
  constructor(
    public value: string
  ){
    super();
    this.value = value;
  }

}

export class CssBackground extends CssDrawRule {
  constructor(public hex: string) {
    super(hex);
    this.hex = hex;
  }
  actions(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.hex;
  }
}

export class CssColor extends CssDrawRule {
  constructor(public hex: string) {
    super(hex);
    this.hex = hex;
  }
  actions(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.hex;
  }
}

export class CssFilter extends CssDrawRule {
  constructor(public value: string) {
    super(value);
    this.value = value;
  }
  actions(ctx: CanvasRenderingContext2D): void {
    ctx.filter = this.value
  }
}