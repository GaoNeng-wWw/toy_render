import { describe, expect, test } from "vitest";
import { CharLayout, InlineLayout, TextLayout } from "../layout-tree";
import { CSSMargin, CSSPadding, CSSRule } from "../css-rules";
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
      test('inline width/height (padding)', ()=>{
        const padding = new CSSPadding({y: 16, x: 16});
        const box = padding.apply();
        expect(box.top).toBe(16)
        expect(box.bottom).toBe(16);
        expect(box.left).toBe(16)
        expect(box.right).toBe(16);
        const a = new InlineLayout([],[
          new CSSPadding({y: 16, x:16}),
        ])
        const {ctx} = createCavnas();
        a.layout(ctx);
        a.pain(ctx);
        expect(a.layoutInfo.width).toBe(32)
        expect(a.layoutInfo.height).toBe(32)
        expect(a.layoutInfo.padding.top).toBe(16)
        expect(a.layoutInfo.padding.bottom).toBe(16)
      });
      test('inline width/height (margin)', ()=>{
        const a = new InlineLayout([],[
          new CSSMargin({y: 16, x:16}),
        ])
        const {ctx} = createCavnas();
        a.layout(ctx);
        a.pain(ctx);
        expect(a.layoutInfo.width).toBe(0)
        expect(a.layoutInfo.height).toBe(0)
        expect(a.layoutInfo.margin.top).toBe(16)
        expect(a.layoutInfo.margin.bottom).toBe(16)
      });

      /**
       * if have mutiple padding, just use last padding
       */
      test('inline width/height (mutiple padding)', ()=>{
        const a = new InlineLayout([],[
          new CSSPadding({y: 16, x:16}),
          new CSSPadding({y: 8, x:8}),
        ])
        const {ctx} = createCavnas();
        a.layout(ctx);
        a.pain(ctx);
        expect(a.layoutInfo.width).toBe(16)
        expect(a.layoutInfo.height).toBe(16)
        expect(a.layoutInfo.padding.top).toBe(8)
        expect(a.layoutInfo.padding.bottom).toBe(8)
      });
      /**
       * if have mutiple margin, just use last margin
       */
      test('inline width/height (mutiple margin)', ()=>{
        const a = new InlineLayout([],[
          new CSSMargin({y: 16, x:16}),
          new CSSMargin({y: 8, x:8}),
        ])
        const {ctx} = createCavnas();
        a.layout(ctx);
        a.pain(ctx);
        expect(a.layoutInfo.width).toBe(0)
        expect(a.layoutInfo.height).toBe(0)
        expect(a.layoutInfo.margin.top).toBe(8)
        expect(a.layoutInfo.margin.bottom).toBe(8)
      });

      // fontBoundingBoxAscent not support
      describe('children position', ()=>{
        test.skip('non padding & non margin', ()=>{
          const text = createText('hello-world');
          const inline = new InlineLayout([
            text
          ]);
          text.parent = inline;
          const {ctx} = createCavnas();
          inline.layout(ctx);
          expect(inline.layoutInfo.width).toBe(text.layoutInfo.width)
          console.log(text.layoutInfo)
        })
        test.todo('padding', ()=>{

        })
        test.todo('margin')
      })
    })
  })
})
