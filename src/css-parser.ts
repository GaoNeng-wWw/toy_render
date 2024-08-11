import antlr, {ParseTreeWalker} from 'antlr4';
import Lexer from './cssParser/css3Lexer';
import Parser, { DeclarationContext, DeclarationListContext, SimpleSelectorSequenceContext } from './cssParser/css3Parser';
import css3ParserListener from './cssParser/css3ParserListener';


class Walker extends css3ParserListener {
  private name!: string;
  private record: Map<string, DeclarationContext[]> = new Map();
  exitSimpleSelectorSequence?: ((ctx: SimpleSelectorSequenceContext) => void) | undefined = (ctx) => {
    this.name = ctx.getText();
    if (!this.record.has(this.name)){
      this.record.set(this.name, []);
    }
  }
  exitDeclarationList?: ((ctx: DeclarationListContext) => void) | undefined = (ctx)=>{
    const decls = ctx.declaration_list();
    this.record.set(this.name, [
      ...this.record.get(this.name) ?? [],
      ...decls
    ])
    this.name = '';
  }
  get tree(){
    return this.record;
  }
}

export class CSSOM {
  public tree: Map<string, DeclarationContext[]> = new Map();
  constructor(
    css:string
  ){
    const inputStream = new antlr.CharStream(css);
    const lexer = new Lexer(inputStream);
    const tokenStream = new antlr.CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);
    const walker = new Walker();
    ParseTreeWalker.DEFAULT.walk(
      walker,
      parser.stylesheet()
    )
    this.tree = walker.tree;
  }
}