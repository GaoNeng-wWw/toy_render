import { describe, expect, it } from "vitest";
import { TokenType, tokenizer, valid } from "../tokenizer";

describe('tokenizer',()=>{
  describe('open & close tag', ()=>{
    it('not nest', ()=>{
      const tokens = tokenizer('<div></div>')
      expect(tokens[0].type).toBe(TokenType.OPEN_TAG);
      expect(tokens[1].type).toBe(TokenType.CLOSE_TAG);
      expect(tokens[0].value).toBe('div');
      expect(tokens[1].value).toBe('div');
    })
    it('nest',()=>{
      const tokens = tokenizer('<div><div></div></div>')
      expect(tokens[0].type).toBe(TokenType.OPEN_TAG);
      expect(tokens[1].type).toBe(TokenType.OPEN_TAG);
      expect(tokens[2].type).toBe(TokenType.CLOSE_TAG);
      expect(tokens[3].type).toBe(TokenType.CLOSE_TAG);
      expect(tokens[0].value).toBe('div');
      expect(tokens[1].value).toBe('div');
      expect(tokens[2].value).toBe('div');
      expect(tokens[3].value).toBe('div');
    })
    it('has text', ()=>{
      const tokens = tokenizer('<div>hello</div>')
      expect(tokens[0].type).toBe(TokenType.OPEN_TAG);
      expect(tokens[1].type).toBe(TokenType.TEXT);
      expect(tokens[2].type).toBe(TokenType.CLOSE_TAG);
      expect(tokens[0].value).toBe('div');
      expect(tokens[1].value).toBe('hello');
      expect(tokens[2].value).toBe('div');
    })
    it('text after tag',()=>{
      const tokens = tokenizer('hello<span>world</span>!')
      console.log(tokens);
      expect(tokens[0].type).toBe(TokenType.TEXT);
      expect(tokens[1].type).toBe(TokenType.OPEN_TAG);
      expect(tokens[2].type).toBe(TokenType.TEXT);
      expect(tokens[3].type).toBe(TokenType.CLOSE_TAG);
      expect(tokens[4].type).toBe(TokenType.TEXT);
    })
    describe('attr', ()=>{
      it('string', ()=>{
        const tokens = tokenizer('<div class="hello-world">text</div>')
        expect(tokens[0].attrs.class).toBe('hello-world')
        expect(tokens[1].value).toBe('text')
      })
      it('bool', ()=>{
        const tokens = tokenizer('<div disabled>text</div>')
        expect(tokens[0].attrs.disabled).toBe(true)
        expect(tokens[1].value).toBe('text')
      })
      it('If parent set foo attribute, but child not set foo attribute, the child should not have foo attr',()=>{
        const tokens = tokenizer('<div foo="bar"><div></div></div>')
        expect(tokens[0].attrs.foo).toBe('bar');
        expect(tokens[1].attrs.foo).toBeUndefined()
      })
      it('mutil attr', ()=>{
        const tokens = tokenizer('<div                    disabled                                class                =              "hello world" data-class="data class" te st></div>')
        expect(tokens[0].attrs.class).toBe('hello world')
        expect(tokens[0].attrs.disabled).toBe(true)
        expect(tokens[0].attrs['data-class']).toBe('data class')
      })
      it.fails('mutil attr new line', ()=>{
        const tokens = tokenizer(`
        
        <div 
          disabled
          class
          =
          "hello world"
          data-class
          =
          "data class"
          ></div>
        `)
        expect(tokens[0].attrs.class).toBe('hello world')
        expect(tokens[0].attrs.disabled).toBe(true)
        expect(tokens[0].attrs['data-class']).toBe('data class')
      })
    })
  })
  describe('self close', () =>{
    it('not attr', ()=>{
      const tokens = tokenizer('<br        />')
      expect(tokens[0].type).toBe(TokenType.SELF_CLOSE);
    })
    it('has attr', ()=>{
      const tokens = tokenizer('<input disabled />')
      expect(tokens[0].type).toBe(TokenType.SELF_CLOSE);
      expect(tokens[0].attrs.disabled).toBeTruthy();
    })
  })
})
describe('valid', ()=>{
  it('success', ()=>{
    expect(
      valid(
        tokenizer('<div></div>')
      )
    ).toBeTruthy()
    expect(
      valid(
        tokenizer('<div><div><span></span></div></div>')
      )
    ).toBeTruthy()
  })
  it('fail', ()=>{
    expect(
      ()=>valid(
        tokenizer('<div><div></div>')
      )
    ).toThrow('External tag, find <div>')
    expect(
      ()=>valid(
        tokenizer('<div></div></div>')
      )
    ).toThrow('Should find <div> but find undefined')
    expect(
      ()=>valid(
        tokenizer('<div></div></div>')
      )
    ).toThrow('Should find <div> but find undefined')
    expect(
      ()=>valid(
        tokenizer('<span></div>')
      )
    ).toThrow('Should find <div> but find <span>')
  })
})