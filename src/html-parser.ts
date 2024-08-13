import { Token, TokenType } from "./tokenizer";

export class _EventHandle {
  constructor(){}
}

export class _Node {
  constructor(
    public name: string,
    public children: _Node[] = [],
    public parent: _Node | null = null,
    public attr: Record<string, string | boolean> = {}
  ){
    this.children = [];
    this.parent = parent;
    this.name = name;
    this.attr = attr;
  }
  append(child: _Node){
    this.children.push(child)
    child.parent = this;
    return child;
  }
  removeChild(child: _Node) {
    this.children = this.children.filter((_child) => _child !== child);
    child.parent = null;
    return child;
  }
}

export class _Text extends _Node {
  constructor(
    public data: string
  ){
    super('',[], null);
    this.data = data;
  }
}

export class Dom extends _Node {
  constructor(){
    super('', [], null);
  }
}

export const dom = (
  tokens: Token[]
) => {
  debugger;
  const dom = new Dom();
  let cur:Dom = dom;
  const createNode = (token: Token) => token.type === TokenType.TEXT ? new _Text(token.value) : new _Node(token.value, [], null, token.attrs);
  for (const token of tokens) {
    if (token.type !== TokenType.CLOSE_TAG) {
      const node = createNode(token);
      cur.append(node);
      if (token.type !== TokenType.TEXT && token.type !== TokenType.SELF_CLOSE) {
        cur = node;
      }
      continue;
    }
    if (!cur.parent){
      return dom;
    }
    cur = cur.parent;
  }
  return dom;
}