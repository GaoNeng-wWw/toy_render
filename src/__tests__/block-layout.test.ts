import { describe, expect, it } from "vitest";
import { createCavnas } from "./createCanvas";
import { BlockLayout } from "../layout-tree";
import { CSSHeight, CSSMargin, CSSPadding, CSSWidth } from "../css-rules";

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
    it.todo('width')
    it.todo('height')
    it.todo('width (parent non padding)')
    it.todo('height (parent non padding)')
    it.todo('width (parent padding)')
    it.todo('height (parent padding)')
    it.todo('width (parent margin)')
    it.todo('height (parent margin)')

    it.todo('first children top (parent non padding,parent non margin)')
    it.todo('first children top (parent padding, parent non margin)')
    it.todo('first children top (parent padding, parent margin)')
  })
})