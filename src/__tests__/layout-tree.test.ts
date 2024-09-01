import { describe, expect, test } from "vitest";
import { CharLayout, InlineLayout, TextLayout } from "../layout-tree";
import { CSSRule } from "../css-rules";
import { createCavnas } from "./createCanvas";

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

describe('layout',()=>{  
  test('text layout', ()=>{
    const textLayout = createText('hello-world')
    expect(textLayout).toBeDefined();
    const {ctx} = createCavnas();
    const layoutInfo = textLayout.layout(ctx)
    expect(textLayout.layoutInfo).toBe(layoutInfo);
    expect(
      createText('hello-world')
    )
    .not
    .toBe(
      createText('hello-world')
    );
    const t1 = createText('hello-world');
    const t2 = createText('hello-world');
    expect(t1.layoutInfo).toStrictEqual(t2.layoutInfo)
  })
  describe('inline', ()=>{
    describe('layout (non-rules)',() => {
      test('nest text',()=>{
        const text = createText('hello-world');
        const inlineLayout = new InlineLayout();
        const {ctx} = createCavnas();
        text.parent = inlineLayout;
        inlineLayout.children.push(text);
        const {width} = inlineLayout.layout(ctx)
        expect(text.layoutInfo.width).toBe(width);
      })
      test('inline > inline > text', ()=>{
        const text = createText('hello-world');
        const textParent = new InlineLayout();
        const topInline=new InlineLayout();
        text.parent = textParent;
        textParent.parent = topInline;
        textParent.children.push(text);
        topInline.children.push(textParent);
        const {ctx} = createCavnas();
        topInline.layout(ctx);
        expect(text.layoutInfo.width).toBe(textParent.layoutInfo.width)
        expect(textParent.layoutInfo.width).toBe(topInline.layoutInfo.width)
        expect(text.layoutInfo.width).toBe(topInline.layoutInfo.width)
      })
      /**
       * inline - a
       *  inline - b
       *    text - c
       *  inline - d
       *    text - e
       * a.height = b.height + d.height
       * b.height = b.children.reduce((pre,cur) => pre.height + cur.height);
       * d.height = d.children.reduce((pre,cur) => pre.height + cur.height);
       */
      test(`nest height`, ()=>{
        const a = new InlineLayout();
        const b = new InlineLayout();
        const c = createText('hello-world');
        const d = new InlineLayout();
        const e = createText('hello-world');
        a.children.push(b,d);
        b.children.push(c);
        d.children.push(e);
        b.parent = a;
        d.parent = a;
        c.parent = b;
        e.parent = d;
        const {ctx} = createCavnas();
        const {height} = a.layout(ctx);
        expect(
          height
        )
        .toBe(b.layoutInfo.height + d.layoutInfo.height)
      })
    })

    describe('layout (with rules)', ()=>{
      /**
       * height = padding.top + content.height + padding.bottom
       * width = padding.left + content.width + padding.right
       */
      test.todo('inline width/height (padding)', ()=>{});
      test.todo('inline width/height (margin)', ()=>{});

      /**
       * if have mutiple padding, just use last padding
       */
      test.todo('inline width/height (mutiple padding)', ()=>{});
            /**
       * if have mutiple margin, just use last margin
       */
      test.todo('inline width/height (mutiple margin)', ()=>{});

      describe('children position', ()=>{
        test.todo('non padding')
        test.todo('non margin')
        test.todo('padding')
        test.todo('margin')
      })
    })
  })
})