import { describe, it } from "vitest";

describe('block layout', ()=>{
  /**
   * width = padding.left+content.width+padding.right
   * height = padding.top+content.height+padding.bottom
   * content.width=children.reduce((pre,cur) => pre.width + cur.width)
   * content.height = children.reduce((pre,cur) => pre.height + cur.height)
   */
  describe.todo('non children', ()=>{
    it.todo('width')
    it.todo('height')
    it.todo('width (parent non padding)')
    it.todo('height (parent non padding)')
    it.todo('width (parent padding)')
    it.todo('height (parent padding)')
    it.todo('width (parent margin)')
    it.todo('height (parent margin)')
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