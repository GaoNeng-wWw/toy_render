export enum TokenType {
  OPEN_TAG,
  TEXT,
  CLOSE_TAG,
  SELF_CLOSE,
}

export type Token = {
  type: TokenType,
  value: string,
  attrs: Record<string, string|boolean>
}

export const tokenizer = (
  html: string,
) => {
  const tokens: Token[] = [];
  let token:Token = {
    type: TokenType.OPEN_TAG,
    value: '',
    attrs: {}
  }
  let cur = '', pre = '', next = '';
  let attrKey = '', attrValue:string | boolean = '';
  let i=0;
  let unfinish = false;
  const addToken = () => {
    tokens.push(token);
    token = {
      type: TokenType.OPEN_TAG,
      value: '',
      attrs: {}
    }
    unfinish = false;
  }
  const onStart = () => {
    if (cur === '<') {
      token.type = TokenType.OPEN_TAG;
      return onTagName
    }
    token.type = TokenType.TEXT;
    token.value = cur;
    return onText
  }
  const onText = () => {
    if (cur === '<') {
      addToken();
      token.type = TokenType.OPEN_TAG;
      return onTagName;
    }
    token.value += cur;
    return onText;
  }
  const onSelfClose = () => {
    if (cur === '/') {
      return onSelfClose;
    }
    if (cur === ' ') {
      return onSelfClose
    }
    if (cur === '>') {
      addToken();
    }
    return onStart;
  }
  const onTagName = () => {
    if (cur === '/') {
      if (next === '>'){
        token.type = TokenType.SELF_CLOSE;
        return onSelfClose;
      }
      token.type = TokenType.CLOSE_TAG;
      token.value = '';
      token.attrs = {};
      return onTagName
    }
    if (cur === ' '){
      if (next === ' '){
        return onTagName;
      }
      return onAttr
    }
    if (
      /[a-zA-Z]/.test(cur)
    ) {
      token.value += cur;
      return onTagName;
    }
    if (cur === '>') {
      addToken();
      return onStart;
    }
    return onStart;
  }
  let firstQuote = ''
  const quotes= [`'`,`"`,"`"];
  const isQuote = (char: string) => quotes.includes(char);
  const onAttr = () => {
    const onAttrName = () =>{
      if (cur === '>') {
        if (!attrValue && attrKey) {
          attrValue = true;
        }
        token.attrs[attrKey] = attrValue;
        addToken();
        attrKey = '';
        attrValue = '';
        return onStart;
      }
      if (cur === '=') {
        return onAttrValue;
      }
      if (cur === ' '){
        if (/[a-zA-Z]/.test(next)){
          if (!attrValue && attrKey) {
            attrValue = true;
          }
          token.attrs[attrKey] = attrValue;
          attrKey = '';
          attrValue = '';
          return onAttrName
        }
        if (next === ' '){
          return onAttrName
        }
        if (next === '/') {
          token.type = TokenType.SELF_CLOSE;
          if (!attrValue) {
            attrValue = true;
          }
          token.attrs[attrKey] = attrValue;
          attrKey = '';
          attrValue = '';
          return onSelfClose;
        }
        return onAttrName;
      }
      attrKey += cur;
      return onAttrName
    }
    const onAttrValue = () => {
      if (!firstQuote && cur === ' '){
        return onAttrValue
      }
      if (isQuote(cur)) {
        if (!firstQuote) {
          firstQuote = cur;
          return onAttrValue
        }
        if(cur === firstQuote){
          token.attrs[attrKey] = attrValue;
          attrKey = '';
          attrValue = '';
          firstQuote = '';
          return onAttrName;
        } else {
          attrValue += cur;
          return onAttrValue;
        }
      } else {
        attrValue += cur;
        return onAttrValue;
      }
    }
    if (next === ' '||cur === ' '){
      return onAttr;
    }
    if (cur === '/') {
      let nextPos = i+1;
      if (html[nextPos] === '>'){
        token.type= TokenType.SELF_CLOSE;
        return onSelfClose;
      }
      while (html[nextPos++] === ' '){
        continue;
      }
      if(html[nextPos] === '>') {
        token.type= TokenType.SELF_CLOSE;
        return onSelfClose;
      }
    }
    attrKey = cur;
    return onAttrName;
  }
  const parse = () => {
    let s = onStart;
    for (;i<html.length;i++){
      unfinish = true;
      cur = html[i];
      pre = html[i-1] ?? '';
      next = html[i+1] ?? ''
      s = s();
    }
    if (unfinish) {
      addToken();
    }
    return tokens;
  }
  return parse();
}

export const valid = (tokens: Token[]):boolean => {
  const stack: Token[] = [];
  const onOpenTag = (token: Token) => {
    stack.push(token);
  }
  const onEndTag = (token: Token) => {
    const {value, type} = token;
    let item = stack.pop();
    if (!item) {
      throw new Error(`Should find <${value}> but find undefined`);
    }
    if (item.value === value && item.type === TokenType.OPEN_TAG) {
      return;
    }
    let errMsg = `Should find <${value}> but find <${item.value}>`
    throw new Error(errMsg);
  }
  for (const token of tokens) {
    if (token.type ===TokenType.OPEN_TAG) {
      onOpenTag(token)
    }
    if (token.type === TokenType.CLOSE_TAG) {
      onEndTag(token);
    }
  }
  if (stack.length > 0) {
    for (const token of tokens){
      if (token.type === TokenType.CLOSE_TAG || token.type === TokenType.OPEN_TAG) {
        let err = `External tag, find ` + 
          (token.type === TokenType.OPEN_TAG ? `<${token.value}>` :
            token.type === TokenType.CLOSE_TAG ? `</${token.value}>` : '')
        throw new Error(err);
      }
    }
  }
  return true;
}