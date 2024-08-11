// Generated from css3Parser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { StylesheetContext } from "./css3Parser.js";
import { GoodCharsetContext } from "./css3Parser.js";
import { BadCharsetContext } from "./css3Parser.js";
import { GoodImportContext } from "./css3Parser.js";
import { BadImportContext } from "./css3Parser.js";
import { GoodNamespaceContext } from "./css3Parser.js";
import { BadNamespaceContext } from "./css3Parser.js";
import { NamespacePrefixContext } from "./css3Parser.js";
import { MediaContext } from "./css3Parser.js";
import { MediaQueryListContext } from "./css3Parser.js";
import { MediaQueryContext } from "./css3Parser.js";
import { MediaTypeContext } from "./css3Parser.js";
import { MediaExpressionContext } from "./css3Parser.js";
import { MediaFeatureContext } from "./css3Parser.js";
import { PageContext } from "./css3Parser.js";
import { PseudoPageContext } from "./css3Parser.js";
import { SelectorGroupContext } from "./css3Parser.js";
import { SelectorContext } from "./css3Parser.js";
import { CombinatorContext } from "./css3Parser.js";
import { SimpleSelectorSequenceContext } from "./css3Parser.js";
import { TypeSelectorContext } from "./css3Parser.js";
import { TypeNamespacePrefixContext } from "./css3Parser.js";
import { ElementNameContext } from "./css3Parser.js";
import { UniversalContext } from "./css3Parser.js";
import { ClassNameContext } from "./css3Parser.js";
import { AttribContext } from "./css3Parser.js";
import { PseudoContext } from "./css3Parser.js";
import { FunctionalPseudoContext } from "./css3Parser.js";
import { ExpressionContext } from "./css3Parser.js";
import { NegationContext } from "./css3Parser.js";
import { NegationArgContext } from "./css3Parser.js";
import { GoodOperatorContext } from "./css3Parser.js";
import { BadOperatorContext } from "./css3Parser.js";
import { GoodPropertyContext } from "./css3Parser.js";
import { BadPropertyContext } from "./css3Parser.js";
import { KnownRulesetContext } from "./css3Parser.js";
import { UnknownRulesetContext } from "./css3Parser.js";
import { DeclarationListContext } from "./css3Parser.js";
import { KnownDeclarationContext } from "./css3Parser.js";
import { UnknownDeclarationContext } from "./css3Parser.js";
import { PrioContext } from "./css3Parser.js";
import { ValueContext } from "./css3Parser.js";
import { ExprContext } from "./css3Parser.js";
import { KnownTermContext } from "./css3Parser.js";
import { UnknownTermContext } from "./css3Parser.js";
import { BadTermContext } from "./css3Parser.js";
import { Function_Context } from "./css3Parser.js";
import { DxImageTransformContext } from "./css3Parser.js";
import { HexcolorContext } from "./css3Parser.js";
import { NumberContext } from "./css3Parser.js";
import { PercentageContext } from "./css3Parser.js";
import { DimensionContext } from "./css3Parser.js";
import { UnknownDimensionContext } from "./css3Parser.js";
import { Any_Context } from "./css3Parser.js";
import { UnknownAtRuleContext } from "./css3Parser.js";
import { UnusedContext } from "./css3Parser.js";
import { BlockContext } from "./css3Parser.js";
import { NestedStatementContext } from "./css3Parser.js";
import { GroupRuleBodyContext } from "./css3Parser.js";
import { SupportsRuleContext } from "./css3Parser.js";
import { SupportsConditionContext } from "./css3Parser.js";
import { SupportsConditionInParensContext } from "./css3Parser.js";
import { SupportsNegationContext } from "./css3Parser.js";
import { SupportsConjunctionContext } from "./css3Parser.js";
import { SupportsDisjunctionContext } from "./css3Parser.js";
import { SupportsDeclarationConditionContext } from "./css3Parser.js";
import { GeneralEnclosedContext } from "./css3Parser.js";
import { UrlContext } from "./css3Parser.js";
import { Var_Context } from "./css3Parser.js";
import { CalcContext } from "./css3Parser.js";
import { CalcSumContext } from "./css3Parser.js";
import { CalcProductContext } from "./css3Parser.js";
import { CalcValueContext } from "./css3Parser.js";
import { FontFaceRuleContext } from "./css3Parser.js";
import { KnownFontFaceDeclarationContext } from "./css3Parser.js";
import { UnknownFontFaceDeclarationContext } from "./css3Parser.js";
import { KeyframesRuleContext } from "./css3Parser.js";
import { KeyframeBlockContext } from "./css3Parser.js";
import { KeyframeSelectorContext } from "./css3Parser.js";
import { ViewportContext } from "./css3Parser.js";
import { CounterStyleContext } from "./css3Parser.js";
import { FontFeatureValuesRuleContext } from "./css3Parser.js";
import { FontFamilyNameListContext } from "./css3Parser.js";
import { FontFamilyNameContext } from "./css3Parser.js";
import { FeatureValueBlockContext } from "./css3Parser.js";
import { FeatureTypeContext } from "./css3Parser.js";
import { FeatureValueDefinitionContext } from "./css3Parser.js";
import { IdentContext } from "./css3Parser.js";
import { WsContext } from "./css3Parser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `css3Parser`.
 */
export default class css3ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `css3Parser.stylesheet`.
	 * @param ctx the parse tree
	 */
	enterStylesheet?: (ctx: StylesheetContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.stylesheet`.
	 * @param ctx the parse tree
	 */
	exitStylesheet?: (ctx: StylesheetContext) => void;
	/**
	 * Enter a parse tree produced by the `goodCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 */
	enterGoodCharset?: (ctx: GoodCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `goodCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 */
	exitGoodCharset?: (ctx: GoodCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `badCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 */
	enterBadCharset?: (ctx: BadCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `badCharset`
	 * labeled alternative in `css3Parser.charset`.
	 * @param ctx the parse tree
	 */
	exitBadCharset?: (ctx: BadCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `goodImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 */
	enterGoodImport?: (ctx: GoodImportContext) => void;
	/**
	 * Exit a parse tree produced by the `goodImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 */
	exitGoodImport?: (ctx: GoodImportContext) => void;
	/**
	 * Enter a parse tree produced by the `badImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 */
	enterBadImport?: (ctx: BadImportContext) => void;
	/**
	 * Exit a parse tree produced by the `badImport`
	 * labeled alternative in `css3Parser.imports`.
	 * @param ctx the parse tree
	 */
	exitBadImport?: (ctx: BadImportContext) => void;
	/**
	 * Enter a parse tree produced by the `goodNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 */
	enterGoodNamespace?: (ctx: GoodNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `goodNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 */
	exitGoodNamespace?: (ctx: GoodNamespaceContext) => void;
	/**
	 * Enter a parse tree produced by the `badNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 */
	enterBadNamespace?: (ctx: BadNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `badNamespace`
	 * labeled alternative in `css3Parser.namespace_`.
	 * @param ctx the parse tree
	 */
	exitBadNamespace?: (ctx: BadNamespaceContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.namespacePrefix`.
	 * @param ctx the parse tree
	 */
	enterNamespacePrefix?: (ctx: NamespacePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.namespacePrefix`.
	 * @param ctx the parse tree
	 */
	exitNamespacePrefix?: (ctx: NamespacePrefixContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.media`.
	 * @param ctx the parse tree
	 */
	enterMedia?: (ctx: MediaContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.media`.
	 * @param ctx the parse tree
	 */
	exitMedia?: (ctx: MediaContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	enterMediaQueryList?: (ctx: MediaQueryListContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	exitMediaQueryList?: (ctx: MediaQueryListContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	enterMediaQuery?: (ctx: MediaQueryContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	exitMediaQuery?: (ctx: MediaQueryContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.mediaType`.
	 * @param ctx the parse tree
	 */
	enterMediaType?: (ctx: MediaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.mediaType`.
	 * @param ctx the parse tree
	 */
	exitMediaType?: (ctx: MediaTypeContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	enterMediaExpression?: (ctx: MediaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	exitMediaExpression?: (ctx: MediaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.mediaFeature`.
	 * @param ctx the parse tree
	 */
	enterMediaFeature?: (ctx: MediaFeatureContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.mediaFeature`.
	 * @param ctx the parse tree
	 */
	exitMediaFeature?: (ctx: MediaFeatureContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.page`.
	 * @param ctx the parse tree
	 */
	enterPage?: (ctx: PageContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.page`.
	 * @param ctx the parse tree
	 */
	exitPage?: (ctx: PageContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.pseudoPage`.
	 * @param ctx the parse tree
	 */
	enterPseudoPage?: (ctx: PseudoPageContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.pseudoPage`.
	 * @param ctx the parse tree
	 */
	exitPseudoPage?: (ctx: PseudoPageContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.selectorGroup`.
	 * @param ctx the parse tree
	 */
	enterSelectorGroup?: (ctx: SelectorGroupContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.selectorGroup`.
	 * @param ctx the parse tree
	 */
	exitSelectorGroup?: (ctx: SelectorGroupContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.combinator`.
	 * @param ctx the parse tree
	 */
	enterCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.combinator`.
	 * @param ctx the parse tree
	 */
	exitCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.simpleSelectorSequence`.
	 * @param ctx the parse tree
	 */
	enterSimpleSelectorSequence?: (ctx: SimpleSelectorSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.simpleSelectorSequence`.
	 * @param ctx the parse tree
	 */
	exitSimpleSelectorSequence?: (ctx: SimpleSelectorSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.typeSelector`.
	 * @param ctx the parse tree
	 */
	enterTypeSelector?: (ctx: TypeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.typeSelector`.
	 * @param ctx the parse tree
	 */
	exitTypeSelector?: (ctx: TypeSelectorContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 */
	enterTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 */
	exitTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.elementName`.
	 * @param ctx the parse tree
	 */
	enterElementName?: (ctx: ElementNameContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.elementName`.
	 * @param ctx the parse tree
	 */
	exitElementName?: (ctx: ElementNameContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.universal`.
	 * @param ctx the parse tree
	 */
	enterUniversal?: (ctx: UniversalContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.universal`.
	 * @param ctx the parse tree
	 */
	exitUniversal?: (ctx: UniversalContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.pseudo`.
	 * @param ctx the parse tree
	 */
	enterPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.pseudo`.
	 * @param ctx the parse tree
	 */
	exitPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.functionalPseudo`.
	 * @param ctx the parse tree
	 */
	enterFunctionalPseudo?: (ctx: FunctionalPseudoContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.functionalPseudo`.
	 * @param ctx the parse tree
	 */
	exitFunctionalPseudo?: (ctx: FunctionalPseudoContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.negation`.
	 * @param ctx the parse tree
	 */
	enterNegation?: (ctx: NegationContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.negation`.
	 * @param ctx the parse tree
	 */
	exitNegation?: (ctx: NegationContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.negationArg`.
	 * @param ctx the parse tree
	 */
	enterNegationArg?: (ctx: NegationArgContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.negationArg`.
	 * @param ctx the parse tree
	 */
	exitNegationArg?: (ctx: NegationArgContext) => void;
	/**
	 * Enter a parse tree produced by the `goodOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 */
	enterGoodOperator?: (ctx: GoodOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `goodOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 */
	exitGoodOperator?: (ctx: GoodOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `badOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 */
	enterBadOperator?: (ctx: BadOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `badOperator`
	 * labeled alternative in `css3Parser.operator_`.
	 * @param ctx the parse tree
	 */
	exitBadOperator?: (ctx: BadOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `goodProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 */
	enterGoodProperty?: (ctx: GoodPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `goodProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 */
	exitGoodProperty?: (ctx: GoodPropertyContext) => void;
	/**
	 * Enter a parse tree produced by the `badProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 */
	enterBadProperty?: (ctx: BadPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `badProperty`
	 * labeled alternative in `css3Parser.property_`.
	 * @param ctx the parse tree
	 */
	exitBadProperty?: (ctx: BadPropertyContext) => void;
	/**
	 * Enter a parse tree produced by the `knownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 */
	enterKnownRuleset?: (ctx: KnownRulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `knownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 */
	exitKnownRuleset?: (ctx: KnownRulesetContext) => void;
	/**
	 * Enter a parse tree produced by the `unknownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 */
	enterUnknownRuleset?: (ctx: UnknownRulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `unknownRuleset`
	 * labeled alternative in `css3Parser.ruleset`.
	 * @param ctx the parse tree
	 */
	exitUnknownRuleset?: (ctx: UnknownRulesetContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.declarationList`.
	 * @param ctx the parse tree
	 */
	enterDeclarationList?: (ctx: DeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.declarationList`.
	 * @param ctx the parse tree
	 */
	exitDeclarationList?: (ctx: DeclarationListContext) => void;
	/**
	 * Enter a parse tree produced by the `knownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterKnownDeclaration?: (ctx: KnownDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `knownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitKnownDeclaration?: (ctx: KnownDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `unknownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterUnknownDeclaration?: (ctx: UnknownDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `unknownDeclaration`
	 * labeled alternative in `css3Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitUnknownDeclaration?: (ctx: UnknownDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.prio`.
	 * @param ctx the parse tree
	 */
	enterPrio?: (ctx: PrioContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.prio`.
	 * @param ctx the parse tree
	 */
	exitPrio?: (ctx: PrioContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by the `knownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	enterKnownTerm?: (ctx: KnownTermContext) => void;
	/**
	 * Exit a parse tree produced by the `knownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	exitKnownTerm?: (ctx: KnownTermContext) => void;
	/**
	 * Enter a parse tree produced by the `unknownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	enterUnknownTerm?: (ctx: UnknownTermContext) => void;
	/**
	 * Exit a parse tree produced by the `unknownTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	exitUnknownTerm?: (ctx: UnknownTermContext) => void;
	/**
	 * Enter a parse tree produced by the `badTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	enterBadTerm?: (ctx: BadTermContext) => void;
	/**
	 * Exit a parse tree produced by the `badTerm`
	 * labeled alternative in `css3Parser.term`.
	 * @param ctx the parse tree
	 */
	exitBadTerm?: (ctx: BadTermContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.dxImageTransform`.
	 * @param ctx the parse tree
	 */
	enterDxImageTransform?: (ctx: DxImageTransformContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.dxImageTransform`.
	 * @param ctx the parse tree
	 */
	exitDxImageTransform?: (ctx: DxImageTransformContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.hexcolor`.
	 * @param ctx the parse tree
	 */
	enterHexcolor?: (ctx: HexcolorContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.hexcolor`.
	 * @param ctx the parse tree
	 */
	exitHexcolor?: (ctx: HexcolorContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.percentage`.
	 * @param ctx the parse tree
	 */
	enterPercentage?: (ctx: PercentageContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.percentage`.
	 * @param ctx the parse tree
	 */
	exitPercentage?: (ctx: PercentageContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.dimension`.
	 * @param ctx the parse tree
	 */
	enterDimension?: (ctx: DimensionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.dimension`.
	 * @param ctx the parse tree
	 */
	exitDimension?: (ctx: DimensionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.unknownDimension`.
	 * @param ctx the parse tree
	 */
	enterUnknownDimension?: (ctx: UnknownDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.unknownDimension`.
	 * @param ctx the parse tree
	 */
	exitUnknownDimension?: (ctx: UnknownDimensionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.any_`.
	 * @param ctx the parse tree
	 */
	enterAny_?: (ctx: Any_Context) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.any_`.
	 * @param ctx the parse tree
	 */
	exitAny_?: (ctx: Any_Context) => void;
	/**
	 * Enter a parse tree produced by the `unknownAtRule`
	 * labeled alternative in `css3Parser.atRule`.
	 * @param ctx the parse tree
	 */
	enterUnknownAtRule?: (ctx: UnknownAtRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `unknownAtRule`
	 * labeled alternative in `css3Parser.atRule`.
	 * @param ctx the parse tree
	 */
	exitUnknownAtRule?: (ctx: UnknownAtRuleContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.unused`.
	 * @param ctx the parse tree
	 */
	enterUnused?: (ctx: UnusedContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.unused`.
	 * @param ctx the parse tree
	 */
	exitUnused?: (ctx: UnusedContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.nestedStatement`.
	 * @param ctx the parse tree
	 */
	enterNestedStatement?: (ctx: NestedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.nestedStatement`.
	 * @param ctx the parse tree
	 */
	exitNestedStatement?: (ctx: NestedStatementContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.groupRuleBody`.
	 * @param ctx the parse tree
	 */
	enterGroupRuleBody?: (ctx: GroupRuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.groupRuleBody`.
	 * @param ctx the parse tree
	 */
	exitGroupRuleBody?: (ctx: GroupRuleBodyContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsRule`.
	 * @param ctx the parse tree
	 */
	enterSupportsRule?: (ctx: SupportsRuleContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsRule`.
	 * @param ctx the parse tree
	 */
	exitSupportsRule?: (ctx: SupportsRuleContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsCondition`.
	 * @param ctx the parse tree
	 */
	enterSupportsCondition?: (ctx: SupportsConditionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsCondition`.
	 * @param ctx the parse tree
	 */
	exitSupportsCondition?: (ctx: SupportsConditionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsConditionInParens`.
	 * @param ctx the parse tree
	 */
	enterSupportsConditionInParens?: (ctx: SupportsConditionInParensContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsConditionInParens`.
	 * @param ctx the parse tree
	 */
	exitSupportsConditionInParens?: (ctx: SupportsConditionInParensContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsNegation`.
	 * @param ctx the parse tree
	 */
	enterSupportsNegation?: (ctx: SupportsNegationContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsNegation`.
	 * @param ctx the parse tree
	 */
	exitSupportsNegation?: (ctx: SupportsNegationContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsConjunction`.
	 * @param ctx the parse tree
	 */
	enterSupportsConjunction?: (ctx: SupportsConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsConjunction`.
	 * @param ctx the parse tree
	 */
	exitSupportsConjunction?: (ctx: SupportsConjunctionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsDisjunction`.
	 * @param ctx the parse tree
	 */
	enterSupportsDisjunction?: (ctx: SupportsDisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsDisjunction`.
	 * @param ctx the parse tree
	 */
	exitSupportsDisjunction?: (ctx: SupportsDisjunctionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.supportsDeclarationCondition`.
	 * @param ctx the parse tree
	 */
	enterSupportsDeclarationCondition?: (ctx: SupportsDeclarationConditionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.supportsDeclarationCondition`.
	 * @param ctx the parse tree
	 */
	exitSupportsDeclarationCondition?: (ctx: SupportsDeclarationConditionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.generalEnclosed`.
	 * @param ctx the parse tree
	 */
	enterGeneralEnclosed?: (ctx: GeneralEnclosedContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.generalEnclosed`.
	 * @param ctx the parse tree
	 */
	exitGeneralEnclosed?: (ctx: GeneralEnclosedContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.var_`.
	 * @param ctx the parse tree
	 */
	enterVar_?: (ctx: Var_Context) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.var_`.
	 * @param ctx the parse tree
	 */
	exitVar_?: (ctx: Var_Context) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.calc`.
	 * @param ctx the parse tree
	 */
	enterCalc?: (ctx: CalcContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.calc`.
	 * @param ctx the parse tree
	 */
	exitCalc?: (ctx: CalcContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.calcSum`.
	 * @param ctx the parse tree
	 */
	enterCalcSum?: (ctx: CalcSumContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.calcSum`.
	 * @param ctx the parse tree
	 */
	exitCalcSum?: (ctx: CalcSumContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.calcProduct`.
	 * @param ctx the parse tree
	 */
	enterCalcProduct?: (ctx: CalcProductContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.calcProduct`.
	 * @param ctx the parse tree
	 */
	exitCalcProduct?: (ctx: CalcProductContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.calcValue`.
	 * @param ctx the parse tree
	 */
	enterCalcValue?: (ctx: CalcValueContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.calcValue`.
	 * @param ctx the parse tree
	 */
	exitCalcValue?: (ctx: CalcValueContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.fontFaceRule`.
	 * @param ctx the parse tree
	 */
	enterFontFaceRule?: (ctx: FontFaceRuleContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.fontFaceRule`.
	 * @param ctx the parse tree
	 */
	exitFontFaceRule?: (ctx: FontFaceRuleContext) => void;
	/**
	 * Enter a parse tree produced by the `knownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterKnownFontFaceDeclaration?: (ctx: KnownFontFaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `knownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitKnownFontFaceDeclaration?: (ctx: KnownFontFaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `unknownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUnknownFontFaceDeclaration?: (ctx: UnknownFontFaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `unknownFontFaceDeclaration`
	 * labeled alternative in `css3Parser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUnknownFontFaceDeclaration?: (ctx: UnknownFontFaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.keyframesRule`.
	 * @param ctx the parse tree
	 */
	enterKeyframesRule?: (ctx: KeyframesRuleContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.keyframesRule`.
	 * @param ctx the parse tree
	 */
	exitKeyframesRule?: (ctx: KeyframesRuleContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.keyframeBlock`.
	 * @param ctx the parse tree
	 */
	enterKeyframeBlock?: (ctx: KeyframeBlockContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.keyframeBlock`.
	 * @param ctx the parse tree
	 */
	exitKeyframeBlock?: (ctx: KeyframeBlockContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.keyframeSelector`.
	 * @param ctx the parse tree
	 */
	enterKeyframeSelector?: (ctx: KeyframeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.keyframeSelector`.
	 * @param ctx the parse tree
	 */
	exitKeyframeSelector?: (ctx: KeyframeSelectorContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.viewport`.
	 * @param ctx the parse tree
	 */
	enterViewport?: (ctx: ViewportContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.viewport`.
	 * @param ctx the parse tree
	 */
	exitViewport?: (ctx: ViewportContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.counterStyle`.
	 * @param ctx the parse tree
	 */
	enterCounterStyle?: (ctx: CounterStyleContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.counterStyle`.
	 * @param ctx the parse tree
	 */
	exitCounterStyle?: (ctx: CounterStyleContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.fontFeatureValuesRule`.
	 * @param ctx the parse tree
	 */
	enterFontFeatureValuesRule?: (ctx: FontFeatureValuesRuleContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.fontFeatureValuesRule`.
	 * @param ctx the parse tree
	 */
	exitFontFeatureValuesRule?: (ctx: FontFeatureValuesRuleContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.fontFamilyNameList`.
	 * @param ctx the parse tree
	 */
	enterFontFamilyNameList?: (ctx: FontFamilyNameListContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.fontFamilyNameList`.
	 * @param ctx the parse tree
	 */
	exitFontFamilyNameList?: (ctx: FontFamilyNameListContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.fontFamilyName`.
	 * @param ctx the parse tree
	 */
	enterFontFamilyName?: (ctx: FontFamilyNameContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.fontFamilyName`.
	 * @param ctx the parse tree
	 */
	exitFontFamilyName?: (ctx: FontFamilyNameContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.featureValueBlock`.
	 * @param ctx the parse tree
	 */
	enterFeatureValueBlock?: (ctx: FeatureValueBlockContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.featureValueBlock`.
	 * @param ctx the parse tree
	 */
	exitFeatureValueBlock?: (ctx: FeatureValueBlockContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.featureType`.
	 * @param ctx the parse tree
	 */
	enterFeatureType?: (ctx: FeatureTypeContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.featureType`.
	 * @param ctx the parse tree
	 */
	exitFeatureType?: (ctx: FeatureTypeContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.featureValueDefinition`.
	 * @param ctx the parse tree
	 */
	enterFeatureValueDefinition?: (ctx: FeatureValueDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.featureValueDefinition`.
	 * @param ctx the parse tree
	 */
	exitFeatureValueDefinition?: (ctx: FeatureValueDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;
	/**
	 * Enter a parse tree produced by `css3Parser.ws`.
	 * @param ctx the parse tree
	 */
	enterWs?: (ctx: WsContext) => void;
	/**
	 * Exit a parse tree produced by `css3Parser.ws`.
	 * @param ctx the parse tree
	 */
	exitWs?: (ctx: WsContext) => void;
}

