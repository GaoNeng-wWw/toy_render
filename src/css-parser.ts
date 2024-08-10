import antlr from 'antlr4';
import Lexer from './cssParser/css3Lexer';
import Parser from './cssParser/css3Parser';
import ParserListener from './cssParser/css3ParserListener';

export class CSSOM {
  constructor(
    private css: string
  ){
    this.css = css
  }
  static of(
    css: string
  ){
    const inputStream = new antlr.CharStream(css);
    const lexer = new Lexer(inputStream);
    const tokenStream = new antlr.CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);
    
  }
}