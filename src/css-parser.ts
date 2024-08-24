import antlr, {ParseTreeWalker} from 'antlr4';
import Lexer from './cssParser/css3Lexer';
import Parser, { BadPropertyContext, DeclarationContext, DeclarationListContext, ExprContext, GoodPropertyContext, KnownDeclarationContext, SimpleSelectorSequenceContext, UnknownDeclarationContext } from './cssParser/css3Parser';
import css3ParserListener from './cssParser/css3ParserListener';


class Walker extends css3ParserListener {
  private name!: string;
  private proerty!: string;
  private expr!: ExprContext;
  private record: Map<string, Record<string, ExprContext>> = new Map();
  exitSimpleSelectorSequence?: ((ctx: SimpleSelectorSequenceContext) => void) | undefined = (ctx) => {
    this.name = ctx.getText();
    if (!this.record.has(this.name)){
      this.record.set(this.name, {});
    }
  }
  exitDeclarationList?: ((ctx: DeclarationListContext) => void) | undefined = (ctx)=>{
    this.name = '';
  }
  exitBadProperty?: ((ctx: BadPropertyContext) => void) | undefined = (ctx) => this.proerty = ctx.getText();
  exitGoodProperty?: ((ctx: GoodPropertyContext) => void) | undefined = (ctx) => this.proerty = ctx.getText();

  exitExpr?: ((ctx: ExprContext) => void) | undefined = (ctx) => this.expr = ctx;
  exitKnownDeclaration?: ((ctx: KnownDeclarationContext) => void) | undefined = (ctx) => {
    if (this.record.get(this.name)) {
      this.record.set(
        this.name,
        {
          ...this.record.get(this.name),
          [this.proerty]: this.expr
        }
      );
      return;
    }
    this.record.set(this.name, {
      [this.proerty]: this.expr
    })
    return;
  }
  exitUnknownDeclaration?: ((ctx: UnknownDeclarationContext) => void) | undefined = (ctx) => {
    if (this.record.get(this.name)) {
      this.record.set(
        this.name,
        {
          ...this.record.get(this.name),
          [this.proerty]: this.expr
        }
      );
      return;
    }
    this.record.set(this.name, {
      [this.proerty]: this.expr
    })
    return;
  }
  get tree(){
    return this.record;
  }
}

export class CSSOM {
  public tree: Map<string, Record<string, ExprContext>> = new Map();
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