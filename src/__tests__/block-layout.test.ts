import { describe, expect, it } from "vitest";
import { createCavnas } from "./createCanvas";
import { BlockLayout, CharLayout, InlineLayout, TextLayout } from "../layout-tree";
import { CSSHeight, CSSMargin, CSSPadding, CSSRule, CSSWidth } from "../css-rules";

function createText(text: string, rules: CSSRule[] = []){
  const textLayout = new TextLayout(
    [],
    [...rules]
  );
  let prev = null
  for (const char of text){
    prev = new CharLayout(char,textLayout,null,prev);
    textLayout.children.push(prev);
  }
  return textLayout;
}

describe('block layout', ()=>{
  /**
   * width = padding.left+content.width+padding.right
   * height = padding.top+content.height+padding.bottom
   * content.width=children.reduce((pre,cur) => pre.width + cur.width)
   * content.height = children.reduce((pre,cur) => pre.height + cur.height)
   */
  describe('non children', ()=>{
    it('width', ()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSWidth(200),
      ])
      node.layout(ctx);
      expect(node.layoutInfo.width).toBe(200)
    })
    it('height', ()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSHeight(200),
      ])
      node.layout(ctx);
      expect(node.layoutInfo.height).toBe(200)
    })
    it('width (padding)', ()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSWidth(200),
        new CSSPadding({ x: 10, y: 10 })
      ])
      node.layout(ctx);
      expect(node.layoutInfo.width).toBe(220);
      expect(node.layoutInfo.height).toBe(20);
    })
    it('height (padding)', ()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSHeight(200),
        new CSSPadding({ y: 10, x: 10 }),
      ])
      node.layout(ctx);
      expect(node.layoutInfo.height).toBe(220);
      expect(node.layoutInfo.width).toBe(20);
    })
    it('width (margin)',()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSWidth(200),
        new CSSMargin({ y: 10, x: 10 }),
      ])
      node.layout(ctx);
      expect(node.layoutInfo.width).toBe(200);
      expect(node.layoutInfo.margin.left).toBe(10);
      expect(node.layoutInfo.margin.right).toBe(10);
      expect(node.layoutInfo.margin.top).toBe(10);
      expect(node.layoutInfo.margin.bottom).toBe(10);
    })
    it('height (margin)', ()=>{
      const {ctx} = createCavnas();
      const node = new BlockLayout([], [
        new CSSHeight(200),
        new CSSMargin({ y: 10, x: 10 }),
      ])
      node.layout(ctx);
      expect(node.layoutInfo.height).toBe(200);
      expect(node.layoutInfo.margin.left).toBe(10);
      expect(node.layoutInfo.margin.right).toBe(10);
      expect(node.layoutInfo.margin.top).toBe(10);
      expect(node.layoutInfo.margin.bottom).toBe(10);
    })
  })
  describe('children', ()=>{
    it('width (parent non padding)',()=>{
      const {ctx} = createCavnas();
      const t = createText('hello-world');
      const a = new InlineLayout()
      const b = new BlockLayout([]);
      // const b2 = new BlockLayout([]);
      const c = new BlockLayout([]);
      t.parent = a;
      a.parent = b;
      b.parent = c;
      // b2.parent = c;
      a.children.push(t);
      b.children.push(a);
      // FIXME
      c.children.push(b, /*b2*/);
      c.layout(ctx);
      expect(a.layoutInfo.width).toBe(t.layoutInfo.width);
      expect(b.layoutInfo.width).toBe(a.layoutInfo.width);
      // FIXME
      // expect(b2.layoutInfo.width).toBe(a.layoutInfo.width);
      expect(c.layoutInfo.width).toBe(b.layoutInfo.width);
    })
    it('height (parent non padding)', ()=>{
      const a = new BlockLayout([], [
        new CSSWidth(200),
      ]);
      const b = new BlockLayout([],[
        new CSSHeight(100)
      ]);
      const b2 = new BlockLayout([],[
        new CSSHeight(100)
      ]);
      const c = new BlockLayout([],[
        new CSSHeight(50)
      ]);
      b.parent = a;
      b2.parent = a;
      c.parent = b;
      b.prev = null;
      b2.prev = b;

      a.children.push(b,b2);
      b.children.push(c);
      const {ctx} = createCavnas();
      a.layout(ctx);
      expect(a.layoutInfo.height).toBe(200)
    })
    it('width (parent padding)', () => {
      const a = new BlockLayout([], [
        new CSSPadding({x: 16})
      ]);
      const b = new BlockLayout([],[
        new CSSWidth(100),
        new CSSHeight(100)
      ]);
      a.children.push(b);
      b.parent = a;
      const {ctx} = createCavnas();
      a.layout(ctx);
      expect(a.layoutInfo.width).toBe(b.layoutInfo.width + 32)
      expect(b.layoutInfo.width).toBe(100)
    })
    it('height (parent padding)', ()=>{
      const a = new BlockLayout([], [
        new CSSPadding({y: 16})
      ]);
      const b = new BlockLayout([],[
        new CSSWidth(100),
        new CSSHeight(100)
      ]);
      a.children.push(b);
      b.parent = a;
      const {ctx} = createCavnas();
      a.layout(ctx);
      expect(a.layoutInfo.height).toBe(b.layoutInfo.height + 32)
      expect(b.layoutInfo.height).toBe(100)
    })
    it('width (parent margin)', () => {
      const a = new BlockLayout([], [
        new CSSMargin({x: 16})
      ]);
      const b = new BlockLayout([],[
        new CSSWidth(100),
        new CSSHeight(100)
      ]);
      a.children.push(b);
      b.parent = a;
      const {ctx} = createCavnas();
      a.layout(ctx);
      expect(a.layoutInfo.width).toBe(b.layoutInfo.width)
      expect(b.layoutInfo.width).toBe(100)
    })
    it('height (parent margin)', () => {
      const a = new BlockLayout([], [
        new CSSMargin({y: 16})
      ]);
      const b = new BlockLayout([],[
        new CSSWidth(100),
        new CSSHeight(100)
      ]);
      a.children.push(b);
      b.parent = a;
      const {ctx} = createCavnas();
      a.layout(ctx);
      expect(a.layoutInfo.height).toBe(b.layoutInfo.height)
      expect(b.layoutInfo.height).toBe(100)
    })

    it('children top (parent non padding,parent non margin)', ()=>{
      const a = new BlockLayout([], [
        new CSSWidth(100)
      ]);
      const b = new BlockLayout([], [
        new CSSHeight(100),
        new CSSWidth(100)
      ]);
      const c = new BlockLayout([], [
        new CSSHeight(100)
      ])
      a.children.push(b,c);
      b.parent = a;
      c.parent = a;
      expect(b.layoutInfo.position.y).toBe(a.layoutInfo.position.y);
      expect(c.layoutInfo.position.y).toBe(b.layoutInfo.position.y + b.layoutInfo.height)
    })
    it('children top (parent padding, parent non margin)',() => {
      const a = new BlockLayout([], [
        new CSSWidth(100),
        new CSSPadding({y: 16})
      ]);
      const b = new BlockLayout([], [
        new CSSHeight(100),
        new CSSWidth(100)
      ]);
      const c = new BlockLayout([], [
        new CSSHeight(100)
      ])
      a.children.push(b,c);
      b.parent = a;
      c.parent = a;
      c.prev = b;
      const {ctx} = createCavnas();
      a.layout(ctx)
      expect(b.layoutInfo.position.y).toBe(a.layoutInfo.position.y + 16)
      expect(c.layoutInfo.position.y).toBe(b.layoutInfo.position.y + b.layoutInfo.height)
    })
    it('first children top (parent padding, parent margin)', () => {
      const a = new BlockLayout([], [
        new CSSWidth(100),
        new CSSPadding({y: 16}),
        new CSSMargin({y: 16})
      ]);
      const b = new BlockLayout([], [
        new CSSHeight(100),
        new CSSWidth(100)
      ]);
      const c = new BlockLayout([], [
        new CSSHeight(100)
      ])
      a.children.push(b,c);
      b.parent = a;
      c.parent = a;
      c.prev = b;
      const {ctx} = createCavnas();
      a.layout(ctx)
      expect(b.layoutInfo.position.y).toBe(32);
      expect(c.layoutInfo.position.y).toBe(132);
    })
  })
})