import './tokenizer';
// function tokenizer(html:string){
//   const tokens:Token[] = [];
//   let selfClose = false;
//   let token: Token = {
//     type:TokenType.START_TAG,
//     value: ''
//   }
//   const pushToken = () => {
//     if(!token){
//       return;
//     }
//     debugger;
//     tokens.push({...token})
//     token={
//       type:TokenType.START_TAG,
//       value: ''
//     };
//   }
//   const start = (char: string) => {
//     if (char === '<') {
//       token = {
//         type: TokenType.START_TAG,
//         value: ''
//       };
//       return onTagName;
//     }
//     if (char === '/'){
//       token = {
//         type: TokenType.END_TAG,
//         value: token.value
//       }
//       pushToken();
//     }
//     token = {
//       type:TokenType.TEXT,
//       value: char
//     }
//     return onText;
//   }
//   const onText = (char: string) => {
//     if (char === '<') {
//       pushToken();
//       token = {
//         type: TokenType.START_TAG,
//         value: ''
//       }
//       return onTagName;
//     }
//     if (char === '/'){
//       const _ = {...token};
//       pushToken();
//       token = {..._};
//       return onTagName;
//     }
//     token.value += char;
//     return onText;
//   }
//   const onTagName = (char: string) => {
//     if (char === '>'){
//       if (selfClose){
//         tokens[tokens.length-1].type = TokenType.START_TAG;
//       }
//       pushToken();
//       selfClose = false;
//       return start;
//     }
//     if (char === '/') {

//       selfClose = true;
//       token.type = TokenType.END_TAG
//       const _ = {...token};
//       pushToken();
//       token = {..._};
//       // return start
//     }
//     token.value += char === '/' ? '' : char;
//     return onTagName;
//   }
//   const parse = () => {
//     let state = start;
//     for (const char of html){
//       state = state(char);
//     }
//     return tokens;
//   }
//   return parse();
// }
// const tokens = tokenizer(
// `
// <div>
//   hello-world
//   <input />
// </div>
// `
// )
// .filter((token) => token.value !== '\n');

// class Node{}

// class Text extends Node {
//   constructor(
//     private content: string
//   ){
//     super();
//     this.content = content;
//   }
// }

// class Ele extends Node {
//   constructor(
//     private tagName: string,
//     private attrs: Map<string, string>,
//   ){
//     super();
//     this.tagName = tagName;
//     this.attrs = attrs;
//   }
// }

// const debugToken = (tokens: Token[]) => {
//   let ident = 0;

//   const info = [];
//   for (let i=0;i < tokens.length;i++){
//     const token = tokens[i];
//     if (token.type === TokenType.START_TAG) {
//       ident ++;
//     }
//     if (token.type === TokenType.END_TAG) {
//       ident --;
//     }
//     info.push(
//       `${'  '.repeat(ident)} - ${TokenType[token.type]} ${token.value}`
//     )
//   }
//   info.forEach(i => console.log(i))
// }

// // debugToken(tokens);

// console.log(tokens)