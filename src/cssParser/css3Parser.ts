// Generated from css3Parser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import css3ParserListener from "./css3ParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class css3Parser extends Parser {
	public static readonly OpenBracket = 1;
	public static readonly CloseBracket = 2;
	public static readonly OpenParen = 3;
	public static readonly CloseParen = 4;
	public static readonly OpenBrace = 5;
	public static readonly CloseBrace = 6;
	public static readonly SemiColon = 7;
	public static readonly Equal = 8;
	public static readonly Colon = 9;
	public static readonly Dot = 10;
	public static readonly Multiply = 11;
	public static readonly Divide = 12;
	public static readonly Pipe = 13;
	public static readonly Underscore = 14;
	public static readonly Comment = 15;
	public static readonly Url = 16;
	public static readonly Space = 17;
	public static readonly Cdo = 18;
	public static readonly Cdc = 19;
	public static readonly Includes = 20;
	public static readonly DashMatch = 21;
	public static readonly Hash = 22;
	public static readonly Import = 23;
	public static readonly Page = 24;
	public static readonly Media = 25;
	public static readonly Namespace = 26;
	public static readonly Charset = 27;
	public static readonly Important = 28;
	public static readonly Percentage = 29;
	public static readonly Url_ = 30;
	public static readonly UnicodeRange = 31;
	public static readonly MediaOnly = 32;
	public static readonly Not = 33;
	public static readonly And = 34;
	public static readonly Dimension = 35;
	public static readonly UnknownDimension = 36;
	public static readonly Plus = 37;
	public static readonly Minus = 38;
	public static readonly Greater = 39;
	public static readonly Comma = 40;
	public static readonly Tilde = 41;
	public static readonly PseudoNot = 42;
	public static readonly Number = 43;
	public static readonly String_ = 44;
	public static readonly PrefixMatch = 45;
	public static readonly SuffixMatch = 46;
	public static readonly SubstringMatch = 47;
	public static readonly FontFace = 48;
	public static readonly Supports = 49;
	public static readonly Or = 50;
	public static readonly Keyframes = 51;
	public static readonly From = 52;
	public static readonly To = 53;
	public static readonly Calc = 54;
	public static readonly Viewport = 55;
	public static readonly CounterStyle = 56;
	public static readonly FontFeatureValues = 57;
	public static readonly DxImageTransform = 58;
	public static readonly AtKeyword = 59;
	public static readonly Variable = 60;
	public static readonly Var = 61;
	public static readonly Ident = 62;
	public static readonly Function_ = 63;
	public static readonly UnexpectedCharacter = 64;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_stylesheet = 0;
	public static readonly RULE_charset = 1;
	public static readonly RULE_imports = 2;
	public static readonly RULE_namespace_ = 3;
	public static readonly RULE_namespacePrefix = 4;
	public static readonly RULE_media = 5;
	public static readonly RULE_mediaQueryList = 6;
	public static readonly RULE_mediaQuery = 7;
	public static readonly RULE_mediaType = 8;
	public static readonly RULE_mediaExpression = 9;
	public static readonly RULE_mediaFeature = 10;
	public static readonly RULE_page = 11;
	public static readonly RULE_pseudoPage = 12;
	public static readonly RULE_selectorGroup = 13;
	public static readonly RULE_selector = 14;
	public static readonly RULE_combinator = 15;
	public static readonly RULE_simpleSelectorSequence = 16;
	public static readonly RULE_typeSelector = 17;
	public static readonly RULE_typeNamespacePrefix = 18;
	public static readonly RULE_elementName = 19;
	public static readonly RULE_universal = 20;
	public static readonly RULE_className = 21;
	public static readonly RULE_attrib = 22;
	public static readonly RULE_pseudo = 23;
	public static readonly RULE_functionalPseudo = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_negation = 26;
	public static readonly RULE_negationArg = 27;
	public static readonly RULE_operator_ = 28;
	public static readonly RULE_property_ = 29;
	public static readonly RULE_ruleset = 30;
	public static readonly RULE_declarationList = 31;
	public static readonly RULE_declaration = 32;
	public static readonly RULE_prio = 33;
	public static readonly RULE_value = 34;
	public static readonly RULE_expr = 35;
	public static readonly RULE_term = 36;
	public static readonly RULE_function_ = 37;
	public static readonly RULE_dxImageTransform = 38;
	public static readonly RULE_hexcolor = 39;
	public static readonly RULE_number = 40;
	public static readonly RULE_percentage = 41;
	public static readonly RULE_dimension = 42;
	public static readonly RULE_unknownDimension = 43;
	public static readonly RULE_any_ = 44;
	public static readonly RULE_atRule = 45;
	public static readonly RULE_unused = 46;
	public static readonly RULE_block = 47;
	public static readonly RULE_nestedStatement = 48;
	public static readonly RULE_groupRuleBody = 49;
	public static readonly RULE_supportsRule = 50;
	public static readonly RULE_supportsCondition = 51;
	public static readonly RULE_supportsConditionInParens = 52;
	public static readonly RULE_supportsNegation = 53;
	public static readonly RULE_supportsConjunction = 54;
	public static readonly RULE_supportsDisjunction = 55;
	public static readonly RULE_supportsDeclarationCondition = 56;
	public static readonly RULE_generalEnclosed = 57;
	public static readonly RULE_url = 58;
	public static readonly RULE_var_ = 59;
	public static readonly RULE_calc = 60;
	public static readonly RULE_calcSum = 61;
	public static readonly RULE_calcProduct = 62;
	public static readonly RULE_calcValue = 63;
	public static readonly RULE_fontFaceRule = 64;
	public static readonly RULE_fontFaceDeclaration = 65;
	public static readonly RULE_keyframesRule = 66;
	public static readonly RULE_keyframeBlock = 67;
	public static readonly RULE_keyframeSelector = 68;
	public static readonly RULE_viewport = 69;
	public static readonly RULE_counterStyle = 70;
	public static readonly RULE_fontFeatureValuesRule = 71;
	public static readonly RULE_fontFamilyNameList = 72;
	public static readonly RULE_fontFamilyName = 73;
	public static readonly RULE_featureValueBlock = 74;
	public static readonly RULE_featureType = 75;
	public static readonly RULE_featureValueDefinition = 76;
	public static readonly RULE_ident = 77;
	public static readonly RULE_ws = 78;
	public static readonly literalNames: (string | null)[] = [ null, "'['", 
                                                            "']'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "';'", 
                                                            "'='", "':'", 
                                                            "'.'", "'*'", 
                                                            "'/'", "'|'", 
                                                            "'_'", null, 
                                                            null, null, 
                                                            "'<!--'", "'-->'", 
                                                            "'~='", "'|='", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'@charset '", 
                                                            null, null, 
                                                            "'url('", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'+'", 
                                                            "'-'", "'>'", 
                                                            "','", "'~'", 
                                                            null, null, 
                                                            null, "'^='", 
                                                            "'$='", "'*='", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'calc('", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'var('" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OpenBracket", 
                                                             "CloseBracket", 
                                                             "OpenParen", 
                                                             "CloseParen", 
                                                             "OpenBrace", 
                                                             "CloseBrace", 
                                                             "SemiColon", 
                                                             "Equal", "Colon", 
                                                             "Dot", "Multiply", 
                                                             "Divide", "Pipe", 
                                                             "Underscore", 
                                                             "Comment", 
                                                             "Url", "Space", 
                                                             "Cdo", "Cdc", 
                                                             "Includes", 
                                                             "DashMatch", 
                                                             "Hash", "Import", 
                                                             "Page", "Media", 
                                                             "Namespace", 
                                                             "Charset", 
                                                             "Important", 
                                                             "Percentage", 
                                                             "Url_", "UnicodeRange", 
                                                             "MediaOnly", 
                                                             "Not", "And", 
                                                             "Dimension", 
                                                             "UnknownDimension", 
                                                             "Plus", "Minus", 
                                                             "Greater", 
                                                             "Comma", "Tilde", 
                                                             "PseudoNot", 
                                                             "Number", "String_", 
                                                             "PrefixMatch", 
                                                             "SuffixMatch", 
                                                             "SubstringMatch", 
                                                             "FontFace", 
                                                             "Supports", 
                                                             "Or", "Keyframes", 
                                                             "From", "To", 
                                                             "Calc", "Viewport", 
                                                             "CounterStyle", 
                                                             "FontFeatureValues", 
                                                             "DxImageTransform", 
                                                             "AtKeyword", 
                                                             "Variable", 
                                                             "Var", "Ident", 
                                                             "Function_", 
                                                             "UnexpectedCharacter" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stylesheet", "charset", "imports", "namespace_", "namespacePrefix", "media", 
		"mediaQueryList", "mediaQuery", "mediaType", "mediaExpression", "mediaFeature", 
		"page", "pseudoPage", "selectorGroup", "selector", "combinator", "simpleSelectorSequence", 
		"typeSelector", "typeNamespacePrefix", "elementName", "universal", "className", 
		"attrib", "pseudo", "functionalPseudo", "expression", "negation", "negationArg", 
		"operator_", "property_", "ruleset", "declarationList", "declaration", 
		"prio", "value", "expr", "term", "function_", "dxImageTransform", "hexcolor", 
		"number", "percentage", "dimension", "unknownDimension", "any_", "atRule", 
		"unused", "block", "nestedStatement", "groupRuleBody", "supportsRule", 
		"supportsCondition", "supportsConditionInParens", "supportsNegation", 
		"supportsConjunction", "supportsDisjunction", "supportsDeclarationCondition", 
		"generalEnclosed", "url", "var_", "calc", "calcSum", "calcProduct", "calcValue", 
		"fontFaceRule", "fontFaceDeclaration", "keyframesRule", "keyframeBlock", 
		"keyframeSelector", "viewport", "counterStyle", "fontFeatureValuesRule", 
		"fontFamilyNameList", "fontFamilyName", "featureValueBlock", "featureType", 
		"featureValueDefinition", "ident", "ws",
	];
	public get grammarFileName(): string { return "css3Parser.g4"; }
	public get literalNames(): (string | null)[] { return css3Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return css3Parser.symbolicNames; }
	public get ruleNames(): string[] { return css3Parser.ruleNames; }
	public get serializedATN(): number[] { return css3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, css3Parser._ATN, css3Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public stylesheet(): StylesheetContext {
		let localctx: StylesheetContext = new StylesheetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, css3Parser.RULE_stylesheet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this.ws();
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 159;
				this.charset();
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0)) {
					{
					{
					this.state = 160;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23) {
				{
				{
				this.state = 171;
				this.imports();
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0)) {
					{
					{
					this.state = 172;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26) {
				{
				{
				this.state = 183;
				this.namespace_();
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0)) {
					{
					{
					this.state = 184;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3815845418) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3418299519) !== 0)) {
				{
				{
				this.state = 195;
				this.nestedStatement();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0)) {
					{
					{
					this.state = 196;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 950272) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(css3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charset(): CharsetContext {
		let localctx: CharsetContext = new CharsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, css3Parser.RULE_charset);
		try {
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				localctx = new GoodCharsetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 209;
				this.match(css3Parser.Charset);
				this.state = 210;
				this.ws();
				this.state = 211;
				this.match(css3Parser.String_);
				this.state = 212;
				this.ws();
				this.state = 213;
				this.match(css3Parser.SemiColon);
				this.state = 214;
				this.ws();
				}
				break;
			case 2:
				localctx = new BadCharsetContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
				this.match(css3Parser.Charset);
				this.state = 217;
				this.ws();
				this.state = 218;
				this.match(css3Parser.String_);
				this.state = 219;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let localctx: ImportsContext = new ImportsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, css3Parser.RULE_imports);
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				localctx = new GoodImportContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 223;
				this.match(css3Parser.Import);
				this.state = 224;
				this.ws();
				this.state = 227;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 225;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 226;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 229;
				this.ws();
				this.state = 230;
				this.mediaQueryList();
				this.state = 231;
				this.match(css3Parser.SemiColon);
				this.state = 232;
				this.ws();
				}
				break;
			case 2:
				localctx = new GoodImportContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 234;
				this.match(css3Parser.Import);
				this.state = 235;
				this.ws();
				this.state = 238;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 236;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 237;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 240;
				this.ws();
				this.state = 241;
				this.match(css3Parser.SemiColon);
				this.state = 242;
				this.ws();
				}
				break;
			case 3:
				localctx = new BadImportContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 244;
				this.match(css3Parser.Import);
				this.state = 245;
				this.ws();
				this.state = 248;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 246;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 247;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 250;
				this.ws();
				this.state = 251;
				this.mediaQueryList();
				}
				break;
			case 4:
				localctx = new BadImportContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 253;
				this.match(css3Parser.Import);
				this.state = 254;
				this.ws();
				this.state = 257;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 255;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 256;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 259;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespace_(): Namespace_Context {
		let localctx: Namespace_Context = new Namespace_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 6, css3Parser.RULE_namespace_);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				localctx = new GoodNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 263;
				this.match(css3Parser.Namespace);
				this.state = 264;
				this.ws();
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077149703) !== 0)) {
					{
					this.state = 265;
					this.namespacePrefix();
					this.state = 266;
					this.ws();
					}
				}

				this.state = 272;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 270;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 271;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 274;
				this.ws();
				this.state = 275;
				this.match(css3Parser.SemiColon);
				this.state = 276;
				this.ws();
				}
				break;
			case 2:
				localctx = new BadNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 278;
				this.match(css3Parser.Namespace);
				this.state = 279;
				this.ws();
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077149703) !== 0)) {
					{
					this.state = 280;
					this.namespacePrefix();
					this.state = 281;
					this.ws();
					}
				}

				this.state = 287;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 285;
					this.match(css3Parser.String_);
					}
					break;
				case 16:
				case 30:
					{
					this.state = 286;
					this.url();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 289;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespacePrefix(): NamespacePrefixContext {
		let localctx: NamespacePrefixContext = new NamespacePrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, css3Parser.RULE_namespacePrefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public media(): MediaContext {
		let localctx: MediaContext = new MediaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, css3Parser.RULE_media);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.match(css3Parser.Media);
			this.state = 296;
			this.ws();
			this.state = 297;
			this.mediaQueryList();
			this.state = 298;
			this.groupRuleBody();
			this.state = 299;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaQueryList(): MediaQueryListContext {
		let localctx: MediaQueryListContext = new MediaQueryListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, css3Parser.RULE_mediaQueryList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 301;
				this.mediaQuery();
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===40) {
					{
					{
					this.state = 302;
					this.match(css3Parser.Comma);
					this.state = 303;
					this.ws();
					this.state = 304;
					this.mediaQuery();
					}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 313;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaQuery(): MediaQueryContext {
		let localctx: MediaQueryContext = new MediaQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, css3Parser.RULE_mediaQuery);
		let _la: number;
		try {
			let _alt: number;
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
			case 17:
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 316;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 315;
					_la = this._input.LA(1);
					if(!(_la===32 || _la===33)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 318;
				this.ws();
				this.state = 319;
				this.mediaType();
				this.state = 320;
				this.ws();
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.match(css3Parser.And);
						this.state = 322;
						this.ws();
						this.state = 323;
						this.mediaExpression();
						}
						}
					}
					this.state = 329;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 330;
				this.mediaExpression();
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 331;
						this.match(css3Parser.And);
						this.state = 332;
						this.ws();
						this.state = 333;
						this.mediaExpression();
						}
						}
					}
					this.state = 339;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaType(): MediaTypeContext {
		let localctx: MediaTypeContext = new MediaTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, css3Parser.RULE_mediaType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaExpression(): MediaExpressionContext {
		let localctx: MediaExpressionContext = new MediaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, css3Parser.RULE_mediaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 344;
			this.match(css3Parser.OpenParen);
			this.state = 345;
			this.ws();
			this.state = 346;
			this.mediaFeature();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 347;
				this.match(css3Parser.Colon);
				this.state = 348;
				this.ws();
				this.state = 349;
				this.expr();
				}
			}

			this.state = 353;
			this.match(css3Parser.CloseParen);
			this.state = 354;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaFeature(): MediaFeatureContext {
		let localctx: MediaFeatureContext = new MediaFeatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, css3Parser.RULE_mediaFeature);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			this.ident();
			this.state = 357;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public page(): PageContext {
		let localctx: PageContext = new PageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, css3Parser.RULE_page);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this.match(css3Parser.Page);
			this.state = 360;
			this.ws();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 361;
				this.pseudoPage();
				}
			}

			this.state = 364;
			this.match(css3Parser.OpenBrace);
			this.state = 365;
			this.ws();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11 || _la===14 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
				{
				this.state = 366;
				this.declaration();
				}
			}

			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 369;
				this.match(css3Parser.SemiColon);
				this.state = 370;
				this.ws();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11 || _la===14 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
					{
					this.state = 371;
					this.declaration();
					}
				}

				}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 379;
			this.match(css3Parser.CloseBrace);
			this.state = 380;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pseudoPage(): PseudoPageContext {
		let localctx: PseudoPageContext = new PseudoPageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, css3Parser.RULE_pseudoPage);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(css3Parser.Colon);
			this.state = 383;
			this.ident();
			this.state = 384;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectorGroup(): SelectorGroupContext {
		let localctx: SelectorGroupContext = new SelectorGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, css3Parser.RULE_selectorGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.selector();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 387;
				this.match(css3Parser.Comma);
				this.state = 388;
				this.ws();
				this.state = 389;
				this.selector();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let localctx: SelectorContext = new SelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, css3Parser.RULE_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.simpleSelectorSequence();
			this.state = 397;
			this.ws();
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 22020097) !== 0)) {
				{
				{
				this.state = 398;
				this.combinator();
				this.state = 399;
				this.simpleSelectorSequence();
				this.state = 400;
				this.ws();
				}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let localctx: CombinatorContext = new CombinatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, css3Parser.RULE_combinator);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 407;
				this.match(css3Parser.Plus);
				this.state = 408;
				this.ws();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 409;
				this.match(css3Parser.Greater);
				this.state = 410;
				this.ws();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 411;
				this.match(css3Parser.Tilde);
				this.state = 412;
				this.ws();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 413;
				this.match(css3Parser.Space);
				this.state = 414;
				this.ws();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleSelectorSequence(): SimpleSelectorSequenceContext {
		let localctx: SimpleSelectorSequenceContext = new SimpleSelectorSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, css3Parser.RULE_simpleSelectorSequence);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
			case 13:
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 417;
					this.typeSelector();
					}
					break;
				case 2:
					{
					this.state = 418;
					this.universal();
					}
					break;
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4195842) !== 0) || _la===42) {
					{
					this.state = 426;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 22:
						{
						this.state = 421;
						this.match(css3Parser.Hash);
						}
						break;
					case 10:
						{
						this.state = 422;
						this.className();
						}
						break;
					case 1:
						{
						this.state = 423;
						this.attrib();
						}
						break;
					case 9:
						{
						this.state = 424;
						this.pseudo();
						}
						break;
					case 42:
						{
						this.state = 425;
						this.negation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 430;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 1:
			case 9:
			case 10:
			case 22:
			case 42:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 436;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 22:
						{
						this.state = 431;
						this.match(css3Parser.Hash);
						}
						break;
					case 10:
						{
						this.state = 432;
						this.className();
						}
						break;
					case 1:
						{
						this.state = 433;
						this.attrib();
						}
						break;
					case 9:
						{
						this.state = 434;
						this.pseudo();
						}
						break;
					case 42:
						{
						this.state = 435;
						this.negation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4195842) !== 0) || _la===42);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeSelector(): TypeSelectorContext {
		let localctx: TypeSelectorContext = new TypeSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, css3Parser.RULE_typeSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 442;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 445;
			this.elementName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		let localctx: TypeNamespacePrefixContext = new TypeNamespacePrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, css3Parser.RULE_typeNamespacePrefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				{
				this.state = 447;
				this.ident();
				}
				break;
			case 11:
				{
				this.state = 448;
				this.match(css3Parser.Multiply);
				}
				break;
			case 13:
				break;
			default:
				break;
			}
			this.state = 451;
			this.match(css3Parser.Pipe);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementName(): ElementNameContext {
		let localctx: ElementNameContext = new ElementNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, css3Parser.RULE_elementName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public universal(): UniversalContext {
		let localctx: UniversalContext = new UniversalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, css3Parser.RULE_universal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 458;
			this.match(css3Parser.Multiply);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let localctx: ClassNameContext = new ClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, css3Parser.RULE_className);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			this.match(css3Parser.Dot);
			this.state = 461;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let localctx: AttribContext = new AttribContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, css3Parser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this.match(css3Parser.OpenBracket);
			this.state = 464;
			this.ws();
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 465;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 468;
			this.ident();
			this.state = 469;
			this.ws();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3145984) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0)) {
				{
				this.state = 470;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3145984) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 471;
				this.ws();
				this.state = 474;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 32:
				case 33:
				case 34:
				case 50:
				case 52:
				case 53:
				case 62:
					{
					this.state = 472;
					this.ident();
					}
					break;
				case 44:
					{
					this.state = 473;
					this.match(css3Parser.String_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 476;
				this.ws();
				}
			}

			this.state = 480;
			this.match(css3Parser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let localctx: PseudoContext = new PseudoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, css3Parser.RULE_pseudo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 482;
			this.match(css3Parser.Colon);
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 483;
				this.match(css3Parser.Colon);
				}
			}

			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				{
				this.state = 486;
				this.ident();
				}
				break;
			case 63:
				{
				this.state = 487;
				this.functionalPseudo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionalPseudo(): FunctionalPseudoContext {
		let localctx: FunctionalPseudoContext = new FunctionalPseudoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, css3Parser.RULE_functionalPseudo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(css3Parser.Function_);
			this.state = 491;
			this.ws();
			this.state = 492;
			this.expression();
			this.state = 493;
			this.match(css3Parser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, css3Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 502;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 37:
					{
					this.state = 495;
					this.match(css3Parser.Plus);
					}
					break;
				case 38:
					{
					this.state = 496;
					this.match(css3Parser.Minus);
					}
					break;
				case 35:
					{
					this.state = 497;
					this.match(css3Parser.Dimension);
					}
					break;
				case 36:
					{
					this.state = 498;
					this.match(css3Parser.UnknownDimension);
					}
					break;
				case 43:
					{
					this.state = 499;
					this.match(css3Parser.Number);
					}
					break;
				case 44:
					{
					this.state = 500;
					this.match(css3Parser.String_);
					}
					break;
				case 32:
				case 33:
				case 34:
				case 50:
				case 52:
				case 53:
				case 62:
					{
					this.state = 501;
					this.ident();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 504;
				this.ws();
				}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077155967) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public negation(): NegationContext {
		let localctx: NegationContext = new NegationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, css3Parser.RULE_negation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.match(css3Parser.PseudoNot);
			this.state = 510;
			this.ws();
			this.state = 511;
			this.negationArg();
			this.state = 512;
			this.ws();
			this.state = 513;
			this.match(css3Parser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public negationArg(): NegationArgContext {
		let localctx: NegationArgContext = new NegationArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, css3Parser.RULE_negationArg);
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 515;
				this.typeSelector();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 516;
				this.universal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 517;
				this.match(css3Parser.Hash);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 518;
				this.className();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 519;
				this.attrib();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 520;
				this.pseudo();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator_(): Operator_Context {
		let localctx: Operator_Context = new Operator_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 56, css3Parser.RULE_operator_);
		try {
			this.state = 531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new GoodOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 523;
				this.match(css3Parser.Divide);
				this.state = 524;
				this.ws();
				}
				break;
			case 40:
				localctx = new GoodOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 525;
				this.match(css3Parser.Comma);
				this.state = 526;
				this.ws();
				}
				break;
			case 17:
				localctx = new GoodOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 527;
				this.match(css3Parser.Space);
				this.state = 528;
				this.ws();
				}
				break;
			case 8:
				localctx = new BadOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 529;
				this.match(css3Parser.Equal);
				this.state = 530;
				this.ws();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public property_(): Property_Context {
		let localctx: Property_Context = new Property_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 58, css3Parser.RULE_property_);
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				localctx = new GoodPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 533;
				this.ident();
				this.state = 534;
				this.ws();
				}
				break;
			case 60:
				localctx = new GoodPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 536;
				this.match(css3Parser.Variable);
				this.state = 537;
				this.ws();
				}
				break;
			case 11:
				localctx = new BadPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 538;
				this.match(css3Parser.Multiply);
				this.state = 539;
				this.ident();
				}
				break;
			case 14:
				localctx = new BadPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 540;
				this.match(css3Parser.Underscore);
				this.state = 541;
				this.ident();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ruleset(): RulesetContext {
		let localctx: RulesetContext = new RulesetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, css3Parser.RULE_ruleset);
		let _la: number;
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				localctx = new KnownRulesetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 544;
				this.selectorGroup();
				this.state = 545;
				this.match(css3Parser.OpenBrace);
				this.state = 546;
				this.ws();
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 18560) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
					{
					this.state = 547;
					this.declarationList();
					}
				}

				this.state = 550;
				this.match(css3Parser.CloseBrace);
				this.state = 551;
				this.ws();
				}
				break;
			case 2:
				localctx = new UnknownRulesetContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3765502474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3224639615) !== 0)) {
					{
					{
					this.state = 553;
					this.any_();
					}
					}
					this.state = 558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 559;
				this.match(css3Parser.OpenBrace);
				this.state = 560;
				this.ws();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 18560) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
					{
					this.state = 561;
					this.declarationList();
					}
				}

				this.state = 564;
				this.match(css3Parser.CloseBrace);
				this.state = 565;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let localctx: DeclarationListContext = new DeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, css3Parser.RULE_declarationList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 569;
				this.match(css3Parser.SemiColon);
				this.state = 570;
				this.ws();
				}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 576;
			this.declaration();
			this.state = 577;
			this.ws();
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 578;
					this.match(css3Parser.SemiColon);
					this.state = 579;
					this.ws();
					this.state = 581;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						this.state = 580;
						this.declaration();
						}
						break;
					}
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, css3Parser.RULE_declaration);
		let _la: number;
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				localctx = new KnownDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 588;
				this.property_();
				this.state = 589;
				this.match(css3Parser.Colon);
				this.state = 590;
				this.ws();
				this.state = 591;
				this.expr();
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===28) {
					{
					this.state = 592;
					this.prio();
					}
				}

				}
				break;
			case 2:
				localctx = new UnknownDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 595;
				this.property_();
				this.state = 596;
				this.match(css3Parser.Colon);
				this.state = 597;
				this.ws();
				this.state = 598;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prio(): PrioContext {
		let localctx: PrioContext = new PrioContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, css3Parser.RULE_prio);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 602;
			this.match(css3Parser.Important);
			this.state = 603;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, css3Parser.RULE_value);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 609;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 3:
					case 9:
					case 16:
					case 20:
					case 21:
					case 22:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 43:
					case 44:
					case 50:
					case 52:
					case 53:
					case 62:
					case 63:
						{
						this.state = 605;
						this.any_();
						}
						break;
					case 5:
						{
						this.state = 606;
						this.block();
						}
						break;
					case 59:
						{
						this.state = 607;
						this.match(css3Parser.AtKeyword);
						this.state = 608;
						this.ws();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 611;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, css3Parser.RULE_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 613;
			this.term();
			this.state = 620;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 135424) !== 0) || _la===40) {
						{
						this.state = 614;
						this.operator_();
						}
					}

					this.state = 617;
					this.term();
					}
					}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, css3Parser.RULE_term);
		try {
			this.state = 650;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 623;
				this.number_();
				this.state = 624;
				this.ws();
				}
				break;
			case 2:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 626;
				this.percentage();
				this.state = 627;
				this.ws();
				}
				break;
			case 3:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 629;
				this.dimension();
				this.state = 630;
				this.ws();
				}
				break;
			case 4:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 632;
				this.match(css3Parser.String_);
				this.state = 633;
				this.ws();
				}
				break;
			case 5:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 634;
				this.match(css3Parser.UnicodeRange);
				this.state = 635;
				this.ws();
				}
				break;
			case 6:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 636;
				this.ident();
				this.state = 637;
				this.ws();
				}
				break;
			case 7:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 639;
				this.var_();
				}
				break;
			case 8:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 640;
				this.url();
				this.state = 641;
				this.ws();
				}
				break;
			case 9:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 643;
				this.hexcolor();
				}
				break;
			case 10:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 644;
				this.calc();
				}
				break;
			case 11:
				localctx = new KnownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 645;
				this.function_();
				}
				break;
			case 12:
				localctx = new UnknownTermContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 646;
				this.unknownDimension();
				this.state = 647;
				this.ws();
				}
				break;
			case 13:
				localctx = new BadTermContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 649;
				this.dxImageTransform();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_(): Function_Context {
		let localctx: Function_Context = new Function_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 74, css3Parser.RULE_function_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.match(css3Parser.Function_);
			this.state = 653;
			this.ws();
			this.state = 654;
			this.expr();
			this.state = 655;
			this.match(css3Parser.CloseParen);
			this.state = 656;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dxImageTransform(): DxImageTransformContext {
		let localctx: DxImageTransformContext = new DxImageTransformContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, css3Parser.RULE_dxImageTransform);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 658;
			this.match(css3Parser.DxImageTransform);
			this.state = 659;
			this.ws();
			this.state = 660;
			this.expr();
			this.state = 661;
			this.match(css3Parser.CloseParen);
			this.state = 662;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hexcolor(): HexcolorContext {
		let localctx: HexcolorContext = new HexcolorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, css3Parser.RULE_hexcolor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 664;
			this.match(css3Parser.Hash);
			this.state = 665;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, css3Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38) {
				{
				this.state = 667;
				_la = this._input.LA(1);
				if(!(_la===37 || _la===38)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 670;
			this.match(css3Parser.Number);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public percentage(): PercentageContext {
		let localctx: PercentageContext = new PercentageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, css3Parser.RULE_percentage);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38) {
				{
				this.state = 672;
				_la = this._input.LA(1);
				if(!(_la===37 || _la===38)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 675;
			this.match(css3Parser.Percentage);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimension(): DimensionContext {
		let localctx: DimensionContext = new DimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, css3Parser.RULE_dimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38) {
				{
				this.state = 677;
				_la = this._input.LA(1);
				if(!(_la===37 || _la===38)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 680;
			this.match(css3Parser.Dimension);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unknownDimension(): UnknownDimensionContext {
		let localctx: UnknownDimensionContext = new UnknownDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, css3Parser.RULE_unknownDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38) {
				{
				this.state = 682;
				_la = this._input.LA(1);
				if(!(_la===37 || _la===38)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 685;
			this.match(css3Parser.UnknownDimension);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_(): Any_Context {
		let localctx: Any_Context = new Any_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 88, css3Parser.RULE_any_);
		let _la: number;
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 687;
				this.ident();
				this.state = 688;
				this.ws();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 690;
				this.number_();
				this.state = 691;
				this.ws();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 693;
				this.percentage();
				this.state = 694;
				this.ws();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 696;
				this.dimension();
				this.state = 697;
				this.ws();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 699;
				this.unknownDimension();
				this.state = 700;
				this.ws();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 702;
				this.match(css3Parser.String_);
				this.state = 703;
				this.ws();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 704;
				this.url();
				this.state = 705;
				this.ws();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 707;
				this.match(css3Parser.Hash);
				this.state = 708;
				this.ws();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 709;
				this.match(css3Parser.UnicodeRange);
				this.state = 710;
				this.ws();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 711;
				this.match(css3Parser.Includes);
				this.state = 712;
				this.ws();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 713;
				this.match(css3Parser.DashMatch);
				this.state = 714;
				this.ws();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 715;
				this.match(css3Parser.Colon);
				this.state = 716;
				this.ws();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 717;
				this.match(css3Parser.Function_);
				this.state = 718;
				this.ws();
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3766289066) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3358857343) !== 0)) {
					{
					this.state = 721;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 3:
					case 9:
					case 16:
					case 20:
					case 21:
					case 22:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 43:
					case 44:
					case 50:
					case 52:
					case 53:
					case 62:
					case 63:
						{
						this.state = 719;
						this.any_();
						}
						break;
					case 5:
					case 7:
					case 18:
					case 19:
					case 59:
						{
						this.state = 720;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 726;
				this.match(css3Parser.CloseParen);
				this.state = 727;
				this.ws();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 729;
				this.match(css3Parser.OpenParen);
				this.state = 730;
				this.ws();
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3766289066) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3358857343) !== 0)) {
					{
					this.state = 733;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 3:
					case 9:
					case 16:
					case 20:
					case 21:
					case 22:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 43:
					case 44:
					case 50:
					case 52:
					case 53:
					case 62:
					case 63:
						{
						this.state = 731;
						this.any_();
						}
						break;
					case 5:
					case 7:
					case 18:
					case 19:
					case 59:
						{
						this.state = 732;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 737;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 738;
				this.match(css3Parser.CloseParen);
				this.state = 739;
				this.ws();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 741;
				this.match(css3Parser.OpenBracket);
				this.state = 742;
				this.ws();
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3766289066) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3358857343) !== 0)) {
					{
					this.state = 745;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 3:
					case 9:
					case 16:
					case 20:
					case 21:
					case 22:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 43:
					case 44:
					case 50:
					case 52:
					case 53:
					case 62:
					case 63:
						{
						this.state = 743;
						this.any_();
						}
						break;
					case 5:
					case 7:
					case 18:
					case 19:
					case 59:
						{
						this.state = 744;
						this.unused();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 749;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 750;
				this.match(css3Parser.CloseBracket);
				this.state = 751;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atRule(): AtRuleContext {
		let localctx: AtRuleContext = new AtRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, css3Parser.RULE_atRule);
		let _la: number;
		try {
			localctx = new UnknownAtRuleContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 755;
			this.match(css3Parser.AtKeyword);
			this.state = 756;
			this.ws();
			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3765502474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3224639615) !== 0)) {
				{
				{
				this.state = 757;
				this.any_();
				}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 766;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 763;
				this.block();
				}
				break;
			case 7:
				{
				this.state = 764;
				this.match(css3Parser.SemiColon);
				this.state = 765;
				this.ws();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unused(): UnusedContext {
		let localctx: UnusedContext = new UnusedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, css3Parser.RULE_unused);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 768;
				this.block();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 769;
				this.match(css3Parser.AtKeyword);
				this.state = 770;
				this.ws();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 771;
				this.match(css3Parser.SemiColon);
				this.state = 772;
				this.ws();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 773;
				this.match(css3Parser.Cdo);
				this.state = 774;
				this.ws();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 775;
				this.match(css3Parser.Cdc);
				this.state = 776;
				this.ws();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, css3Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 779;
			this.match(css3Parser.OpenBrace);
			this.state = 780;
			this.ws();
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3815861930) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3686734975) !== 0)) {
				{
				this.state = 789;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 781;
					this.declarationList();
					}
					break;
				case 2:
					{
					this.state = 782;
					this.nestedStatement();
					}
					break;
				case 3:
					{
					this.state = 783;
					this.any_();
					}
					break;
				case 4:
					{
					this.state = 784;
					this.block();
					}
					break;
				case 5:
					{
					this.state = 785;
					this.match(css3Parser.AtKeyword);
					this.state = 786;
					this.ws();
					}
					break;
				case 6:
					{
					this.state = 787;
					this.match(css3Parser.SemiColon);
					this.state = 788;
					this.ws();
					}
					break;
				}
				}
				this.state = 793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 794;
			this.match(css3Parser.CloseBrace);
			this.state = 795;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nestedStatement(): NestedStatementContext {
		let localctx: NestedStatementContext = new NestedStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, css3Parser.RULE_nestedStatement);
		try {
			this.state = 807;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 5:
			case 9:
			case 10:
			case 11:
			case 13:
			case 16:
			case 20:
			case 21:
			case 22:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 42:
			case 43:
			case 44:
			case 50:
			case 52:
			case 53:
			case 62:
			case 63:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 797;
				this.ruleset();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 798;
				this.media();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 799;
				this.page();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 800;
				this.fontFaceRule();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 801;
				this.keyframesRule();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 802;
				this.supportsRule();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 803;
				this.viewport();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 804;
				this.counterStyle();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 805;
				this.fontFeatureValuesRule();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 806;
				this.atRule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupRuleBody(): GroupRuleBodyContext {
		let localctx: GroupRuleBodyContext = new GroupRuleBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, css3Parser.RULE_groupRuleBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 809;
			this.match(css3Parser.OpenBrace);
			this.state = 810;
			this.ws();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3815845418) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3418299519) !== 0)) {
				{
				{
				this.state = 811;
				this.nestedStatement();
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
			this.match(css3Parser.CloseBrace);
			this.state = 818;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsRule(): SupportsRuleContext {
		let localctx: SupportsRuleContext = new SupportsRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, css3Parser.RULE_supportsRule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 820;
			this.match(css3Parser.Supports);
			this.state = 821;
			this.ws();
			this.state = 822;
			this.supportsCondition();
			this.state = 823;
			this.ws();
			this.state = 824;
			this.groupRuleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsCondition(): SupportsConditionContext {
		let localctx: SupportsConditionContext = new SupportsConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, css3Parser.RULE_supportsCondition);
		try {
			this.state = 830;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 826;
				this.supportsNegation();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 827;
				this.supportsConjunction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 828;
				this.supportsDisjunction();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 829;
				this.supportsConditionInParens();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsConditionInParens(): SupportsConditionInParensContext {
		let localctx: SupportsConditionInParensContext = new SupportsConditionInParensContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, css3Parser.RULE_supportsConditionInParens);
		try {
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 832;
				this.match(css3Parser.OpenParen);
				this.state = 833;
				this.ws();
				this.state = 834;
				this.supportsCondition();
				this.state = 835;
				this.ws();
				this.state = 836;
				this.match(css3Parser.CloseParen);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 838;
				this.supportsDeclarationCondition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 839;
				this.generalEnclosed();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsNegation(): SupportsNegationContext {
		let localctx: SupportsNegationContext = new SupportsNegationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, css3Parser.RULE_supportsNegation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(css3Parser.Not);
			this.state = 843;
			this.ws();
			this.state = 844;
			this.match(css3Parser.Space);
			this.state = 845;
			this.ws();
			this.state = 846;
			this.supportsConditionInParens();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsConjunction(): SupportsConjunctionContext {
		let localctx: SupportsConjunctionContext = new SupportsConjunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, css3Parser.RULE_supportsConjunction);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 848;
			this.supportsConditionInParens();
			this.state = 858;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 849;
					this.ws();
					this.state = 850;
					this.match(css3Parser.Space);
					this.state = 851;
					this.ws();
					this.state = 852;
					this.match(css3Parser.And);
					this.state = 853;
					this.ws();
					this.state = 854;
					this.match(css3Parser.Space);
					this.state = 855;
					this.ws();
					this.state = 856;
					this.supportsConditionInParens();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 860;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsDisjunction(): SupportsDisjunctionContext {
		let localctx: SupportsDisjunctionContext = new SupportsDisjunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, css3Parser.RULE_supportsDisjunction);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 862;
			this.supportsConditionInParens();
			this.state = 872;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 863;
					this.ws();
					this.state = 864;
					this.match(css3Parser.Space);
					this.state = 865;
					this.ws();
					this.state = 866;
					this.match(css3Parser.Or);
					this.state = 867;
					this.ws();
					this.state = 868;
					this.match(css3Parser.Space);
					this.state = 869;
					this.ws();
					this.state = 870;
					this.supportsConditionInParens();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 874;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public supportsDeclarationCondition(): SupportsDeclarationConditionContext {
		let localctx: SupportsDeclarationConditionContext = new SupportsDeclarationConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, css3Parser.RULE_supportsDeclarationCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 876;
			this.match(css3Parser.OpenParen);
			this.state = 877;
			this.ws();
			this.state = 878;
			this.declaration();
			this.state = 879;
			this.match(css3Parser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generalEnclosed(): GeneralEnclosedContext {
		let localctx: GeneralEnclosedContext = new GeneralEnclosedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, css3Parser.RULE_generalEnclosed);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 881;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===63)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3766289066) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3358857343) !== 0)) {
				{
				this.state = 884;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 3:
				case 9:
				case 16:
				case 20:
				case 21:
				case 22:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 43:
				case 44:
				case 50:
				case 52:
				case 53:
				case 62:
				case 63:
					{
					this.state = 882;
					this.any_();
					}
					break;
				case 5:
				case 7:
				case 18:
				case 19:
				case 59:
					{
					this.state = 883;
					this.unused();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 889;
			this.match(css3Parser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let localctx: UrlContext = new UrlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, css3Parser.RULE_url);
		try {
			this.state = 898;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 891;
				this.match(css3Parser.Url_);
				this.state = 892;
				this.ws();
				this.state = 893;
				this.match(css3Parser.String_);
				this.state = 894;
				this.ws();
				this.state = 895;
				this.match(css3Parser.CloseParen);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 897;
				this.match(css3Parser.Url);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): Var_Context {
		let localctx: Var_Context = new Var_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 118, css3Parser.RULE_var_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 900;
			this.match(css3Parser.Var);
			this.state = 901;
			this.ws();
			this.state = 902;
			this.match(css3Parser.Variable);
			this.state = 903;
			this.ws();
			this.state = 904;
			this.match(css3Parser.CloseParen);
			this.state = 905;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calc(): CalcContext {
		let localctx: CalcContext = new CalcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, css3Parser.RULE_calc);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 907;
			this.match(css3Parser.Calc);
			this.state = 908;
			this.ws();
			this.state = 909;
			this.calcSum();
			this.state = 910;
			this.match(css3Parser.CloseParen);
			this.state = 911;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calcSum(): CalcSumContext {
		let localctx: CalcSumContext = new CalcSumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, css3Parser.RULE_calcSum);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.calcProduct();
			this.state = 924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 914;
				this.match(css3Parser.Space);
				this.state = 915;
				this.ws();
				this.state = 916;
				_la = this._input.LA(1);
				if(!(_la===37 || _la===38)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 917;
				this.ws();
				this.state = 918;
				this.match(css3Parser.Space);
				this.state = 919;
				this.ws();
				this.state = 920;
				this.calcProduct();
				}
				}
				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calcProduct(): CalcProductContext {
		let localctx: CalcProductContext = new CalcProductContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, css3Parser.RULE_calcProduct);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 927;
			this.calcValue();
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===12) {
				{
				this.state = 937;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 11:
					{
					this.state = 928;
					this.match(css3Parser.Multiply);
					this.state = 929;
					this.ws();
					this.state = 930;
					this.calcValue();
					}
					break;
				case 12:
					{
					this.state = 932;
					this.match(css3Parser.Divide);
					this.state = 933;
					this.ws();
					this.state = 934;
					this.number_();
					this.state = 935;
					this.ws();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calcValue(): CalcValueContext {
		let localctx: CalcValueContext = new CalcValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, css3Parser.RULE_calcValue);
		try {
			this.state = 960;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 942;
				this.number_();
				this.state = 943;
				this.ws();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 945;
				this.dimension();
				this.state = 946;
				this.ws();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 948;
				this.unknownDimension();
				this.state = 949;
				this.ws();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 951;
				this.percentage();
				this.state = 952;
				this.ws();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 954;
				this.match(css3Parser.OpenParen);
				this.state = 955;
				this.ws();
				this.state = 956;
				this.calcSum();
				this.state = 957;
				this.match(css3Parser.CloseParen);
				this.state = 958;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFaceRule(): FontFaceRuleContext {
		let localctx: FontFaceRuleContext = new FontFaceRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, css3Parser.RULE_fontFaceRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 962;
			this.match(css3Parser.FontFace);
			this.state = 963;
			this.ws();
			this.state = 964;
			this.match(css3Parser.OpenBrace);
			this.state = 965;
			this.ws();
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11 || _la===14 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
				{
				this.state = 966;
				this.fontFaceDeclaration();
				}
			}

			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 969;
				this.match(css3Parser.SemiColon);
				this.state = 970;
				this.ws();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11 || _la===14 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
					{
					this.state = 971;
					this.fontFaceDeclaration();
					}
				}

				}
				}
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 979;
			this.match(css3Parser.CloseBrace);
			this.state = 980;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFaceDeclaration(): FontFaceDeclarationContext {
		let localctx: FontFaceDeclarationContext = new FontFaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, css3Parser.RULE_fontFaceDeclaration);
		try {
			this.state = 992;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				localctx = new KnownFontFaceDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 982;
				this.property_();
				this.state = 983;
				this.match(css3Parser.Colon);
				this.state = 984;
				this.ws();
				this.state = 985;
				this.expr();
				}
				break;
			case 2:
				localctx = new UnknownFontFaceDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 987;
				this.property_();
				this.state = 988;
				this.match(css3Parser.Colon);
				this.state = 989;
				this.ws();
				this.state = 990;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyframesRule(): KeyframesRuleContext {
		let localctx: KeyframesRuleContext = new KeyframesRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, css3Parser.RULE_keyframesRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 994;
			this.match(css3Parser.Keyframes);
			this.state = 995;
			this.ws();
			this.state = 996;
			this.match(css3Parser.Space);
			this.state = 997;
			this.ws();
			this.state = 998;
			this.ident();
			this.state = 999;
			this.ws();
			this.state = 1000;
			this.match(css3Parser.OpenBrace);
			this.state = 1001;
			this.ws();
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 25165825) !== 0)) {
				{
				{
				this.state = 1002;
				this.keyframeBlock();
				}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1008;
			this.match(css3Parser.CloseBrace);
			this.state = 1009;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyframeBlock(): KeyframeBlockContext {
		let localctx: KeyframeBlockContext = new KeyframeBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, css3Parser.RULE_keyframeBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1011;
			this.keyframeSelector();
			this.state = 1012;
			this.match(css3Parser.OpenBrace);
			this.state = 1013;
			this.ws();
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 18560) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
				{
				this.state = 1014;
				this.declarationList();
				}
			}

			this.state = 1017;
			this.match(css3Parser.CloseBrace);
			this.state = 1018;
			this.ws();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyframeSelector(): KeyframeSelectorContext {
		let localctx: KeyframeSelectorContext = new KeyframeSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, css3Parser.RULE_keyframeSelector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1020;
			_la = this._input.LA(1);
			if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 25165825) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1021;
			this.ws();
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 1022;
				this.match(css3Parser.Comma);
				this.state = 1023;
				this.ws();
				this.state = 1024;
				_la = this._input.LA(1);
				if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 25165825) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1025;
				this.ws();
				}
				}
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public viewport(): ViewportContext {
		let localctx: ViewportContext = new ViewportContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, css3Parser.RULE_viewport);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1032;
			this.match(css3Parser.Viewport);
			this.state = 1033;
			this.ws();
			this.state = 1034;
			this.match(css3Parser.OpenBrace);
			this.state = 1035;
			this.ws();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 18560) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
				{
				this.state = 1036;
				this.declarationList();
				}
			}

			this.state = 1039;
			this.match(css3Parser.CloseBrace);
			this.state = 1040;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public counterStyle(): CounterStyleContext {
		let localctx: CounterStyleContext = new CounterStyleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, css3Parser.RULE_counterStyle);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1042;
			this.match(css3Parser.CounterStyle);
			this.state = 1043;
			this.ws();
			this.state = 1044;
			this.ident();
			this.state = 1045;
			this.ws();
			this.state = 1046;
			this.match(css3Parser.OpenBrace);
			this.state = 1047;
			this.ws();
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 18560) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1345585159) !== 0)) {
				{
				this.state = 1048;
				this.declarationList();
				}
			}

			this.state = 1051;
			this.match(css3Parser.CloseBrace);
			this.state = 1052;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFeatureValuesRule(): FontFeatureValuesRuleContext {
		let localctx: FontFeatureValuesRuleContext = new FontFeatureValuesRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, css3Parser.RULE_fontFeatureValuesRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1054;
			this.match(css3Parser.FontFeatureValues);
			this.state = 1055;
			this.ws();
			this.state = 1056;
			this.fontFamilyNameList();
			this.state = 1057;
			this.ws();
			this.state = 1058;
			this.match(css3Parser.OpenBrace);
			this.state = 1059;
			this.ws();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 1060;
				this.featureValueBlock();
				}
				}
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1066;
			this.match(css3Parser.CloseBrace);
			this.state = 1067;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFamilyNameList(): FontFamilyNameListContext {
		let localctx: FontFamilyNameListContext = new FontFamilyNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, css3Parser.RULE_fontFamilyNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1069;
			this.fontFamilyName();
			this.state = 1077;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1070;
					this.ws();
					this.state = 1071;
					this.match(css3Parser.Comma);
					this.state = 1072;
					this.ws();
					this.state = 1073;
					this.fontFamilyName();
					}
					}
				}
				this.state = 1079;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFamilyName(): FontFamilyNameContext {
		let localctx: FontFamilyNameContext = new FontFamilyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, css3Parser.RULE_fontFamilyName);
		try {
			let _alt: number;
			this.state = 1090;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1080;
				this.match(css3Parser.String_);
				}
				break;
			case 32:
			case 33:
			case 34:
			case 50:
			case 52:
			case 53:
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1081;
				this.ident();
				this.state = 1087;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1082;
						this.ws();
						this.state = 1083;
						this.ident();
						}
						}
					}
					this.state = 1089;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public featureValueBlock(): FeatureValueBlockContext {
		let localctx: FeatureValueBlockContext = new FeatureValueBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, css3Parser.RULE_featureValueBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1092;
			this.featureType();
			this.state = 1093;
			this.ws();
			this.state = 1094;
			this.match(css3Parser.OpenBrace);
			this.state = 1095;
			this.ws();
			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077149703) !== 0)) {
				{
				this.state = 1096;
				this.featureValueDefinition();
				}
			}

			this.state = 1107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 163968) !== 0)) {
				{
				{
				this.state = 1099;
				this.ws();
				this.state = 1100;
				this.match(css3Parser.SemiColon);
				this.state = 1101;
				this.ws();
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077149703) !== 0)) {
					{
					this.state = 1102;
					this.featureValueDefinition();
					}
				}

				}
				}
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1110;
			this.match(css3Parser.CloseBrace);
			this.state = 1111;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public featureType(): FeatureTypeContext {
		let localctx: FeatureTypeContext = new FeatureTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, css3Parser.RULE_featureType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1113;
			this.match(css3Parser.AtKeyword);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public featureValueDefinition(): FeatureValueDefinitionContext {
		let localctx: FeatureValueDefinitionContext = new FeatureValueDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, css3Parser.RULE_featureValueDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1115;
			this.ident();
			this.state = 1116;
			this.ws();
			this.state = 1117;
			this.match(css3Parser.Colon);
			this.state = 1118;
			this.ws();
			this.state = 1119;
			this.number_();
			this.state = 1125;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1120;
					this.ws();
					this.state = 1121;
					this.number_();
					}
					}
				}
				this.state = 1127;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let localctx: IdentContext = new IdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, css3Parser.RULE_ident);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1128;
			_la = this._input.LA(1);
			if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1077149703) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ws(): WsContext {
		let localctx: WsContext = new WsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, css3Parser.RULE_ws);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1133;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1130;
					_la = this._input.LA(1);
					if(!(_la===15 || _la===17)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1135;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,64,1137,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,1,0,1,0,1,0,5,0,162,8,0,10,0,12,0,
	165,9,0,5,0,167,8,0,10,0,12,0,170,9,0,1,0,1,0,5,0,174,8,0,10,0,12,0,177,
	9,0,5,0,179,8,0,10,0,12,0,182,9,0,1,0,1,0,5,0,186,8,0,10,0,12,0,189,9,0,
	5,0,191,8,0,10,0,12,0,194,9,0,1,0,1,0,5,0,198,8,0,10,0,12,0,201,9,0,5,0,
	203,8,0,10,0,12,0,206,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,3,1,222,8,1,1,2,1,2,1,2,1,2,3,2,228,8,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,3,2,239,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,249,8,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,258,8,2,1,2,1,2,3,2,262,8,2,1,3,1,3,1,3,1,
	3,1,3,3,3,269,8,3,1,3,1,3,3,3,273,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,3,3,284,8,3,1,3,1,3,3,3,288,8,3,1,3,1,3,3,3,292,8,3,1,4,1,4,1,5,1,5,1,
	5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,307,8,6,10,6,12,6,310,9,6,3,6,312,
	8,6,1,6,1,6,1,7,3,7,317,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,326,8,7,10,
	7,12,7,329,9,7,1,7,1,7,1,7,1,7,1,7,5,7,336,8,7,10,7,12,7,339,9,7,3,7,341,
	8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,352,8,9,1,9,1,9,1,9,1,10,1,
	10,1,10,1,11,1,11,1,11,3,11,363,8,11,1,11,1,11,1,11,3,11,368,8,11,1,11,
	1,11,1,11,3,11,373,8,11,5,11,375,8,11,10,11,12,11,378,9,11,1,11,1,11,1,
	11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,392,8,13,10,13,12,
	13,395,9,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,403,8,14,10,14,12,14,406,
	9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,416,8,15,1,16,1,16,3,
	16,420,8,16,1,16,1,16,1,16,1,16,1,16,5,16,427,8,16,10,16,12,16,430,9,16,
	1,16,1,16,1,16,1,16,1,16,4,16,437,8,16,11,16,12,16,438,3,16,441,8,16,1,
	17,3,17,444,8,17,1,17,1,17,1,18,1,18,3,18,450,8,18,1,18,1,18,1,19,1,19,
	1,20,3,20,457,8,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,3,22,467,8,22,
	1,22,1,22,1,22,1,22,1,22,1,22,3,22,475,8,22,1,22,1,22,3,22,479,8,22,1,22,
	1,22,1,23,1,23,3,23,485,8,23,1,23,1,23,3,23,489,8,23,1,24,1,24,1,24,1,24,
	1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,503,8,25,1,25,4,25,506,8,25,
	11,25,12,25,507,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
	1,27,3,27,522,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,532,8,28,
	1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,543,8,29,1,30,1,30,1,
	30,1,30,3,30,549,8,30,1,30,1,30,1,30,1,30,5,30,555,8,30,10,30,12,30,558,
	9,30,1,30,1,30,1,30,3,30,563,8,30,1,30,1,30,1,30,3,30,568,8,30,1,31,1,31,
	5,31,572,8,31,10,31,12,31,575,9,31,1,31,1,31,1,31,1,31,1,31,3,31,582,8,
	31,5,31,584,8,31,10,31,12,31,587,9,31,1,32,1,32,1,32,1,32,1,32,3,32,594,
	8,32,1,32,1,32,1,32,1,32,1,32,3,32,601,8,32,1,33,1,33,1,33,1,34,1,34,1,
	34,1,34,4,34,610,8,34,11,34,12,34,611,1,35,1,35,3,35,616,8,35,1,35,5,35,
	619,8,35,10,35,12,35,622,9,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,
	36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
	1,36,1,36,1,36,1,36,3,36,651,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,
	38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,3,40,669,8,40,1,40,1,40,1,41,
	3,41,674,8,41,1,41,1,41,1,42,3,42,679,8,42,1,42,1,42,1,43,3,43,684,8,43,
	1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,
	44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
	1,44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,722,8,44,10,44,12,44,725,9,44,1,
	44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,734,8,44,10,44,12,44,737,9,44,1,44,
	1,44,1,44,1,44,1,44,1,44,1,44,5,44,746,8,44,10,44,12,44,749,9,44,1,44,1,
	44,1,44,3,44,754,8,44,1,45,1,45,1,45,5,45,759,8,45,10,45,12,45,762,9,45,
	1,45,1,45,1,45,3,45,767,8,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,3,46,778,8,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,5,47,
	790,8,47,10,47,12,47,793,9,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,3,48,808,8,48,1,49,1,49,1,49,5,49,813,8,49,10,49,
	12,49,816,9,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,
	51,1,51,3,51,831,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,841,
	8,52,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,
	54,1,54,1,54,4,54,859,8,54,11,54,12,54,860,1,55,1,55,1,55,1,55,1,55,1,55,
	1,55,1,55,1,55,1,55,4,55,873,8,55,11,55,12,55,874,1,56,1,56,1,56,1,56,1,
	56,1,57,1,57,1,57,5,57,885,8,57,10,57,12,57,888,9,57,1,57,1,57,1,58,1,58,
	1,58,1,58,1,58,1,58,1,58,3,58,899,8,58,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,5,61,923,8,61,10,61,12,61,926,9,61,1,62,1,62,1,62,1,62,1,62,1,62,1,
	62,1,62,1,62,1,62,5,62,938,8,62,10,62,12,62,941,9,62,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,
	63,961,8,63,1,64,1,64,1,64,1,64,1,64,3,64,968,8,64,1,64,1,64,1,64,3,64,
	973,8,64,5,64,975,8,64,10,64,12,64,978,9,64,1,64,1,64,1,64,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,993,8,65,1,66,1,66,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,5,66,1004,8,66,10,66,12,66,1007,9,66,1,66,1,66,
	1,66,1,67,1,67,1,67,1,67,3,67,1016,8,67,1,67,1,67,1,67,1,68,1,68,1,68,1,
	68,1,68,1,68,1,68,5,68,1028,8,68,10,68,12,68,1031,9,68,1,69,1,69,1,69,1,
	69,1,69,3,69,1038,8,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,
	3,70,1050,8,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,5,71,1062,
	8,71,10,71,12,71,1065,9,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,
	5,72,1076,8,72,10,72,12,72,1079,9,72,1,73,1,73,1,73,1,73,1,73,5,73,1086,
	8,73,10,73,12,73,1089,9,73,3,73,1091,8,73,1,74,1,74,1,74,1,74,1,74,3,74,
	1098,8,74,1,74,1,74,1,74,1,74,3,74,1104,8,74,5,74,1106,8,74,10,74,12,74,
	1109,9,74,1,74,1,74,1,74,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,5,76,1124,8,76,10,76,12,76,1127,9,76,1,77,1,77,1,78,5,78,1132,8,78,10,
	78,12,78,1135,9,78,1,78,0,0,79,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
	78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
	120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,
	156,0,8,2,0,15,15,17,19,1,0,32,33,3,0,8,8,20,21,45,47,1,0,37,38,2,0,3,3,
	63,63,2,0,29,29,52,53,4,0,32,34,50,50,52,53,62,62,2,0,15,15,17,17,1240,
	0,158,1,0,0,0,2,221,1,0,0,0,4,261,1,0,0,0,6,291,1,0,0,0,8,293,1,0,0,0,10,
	295,1,0,0,0,12,311,1,0,0,0,14,340,1,0,0,0,16,342,1,0,0,0,18,344,1,0,0,0,
	20,356,1,0,0,0,22,359,1,0,0,0,24,382,1,0,0,0,26,386,1,0,0,0,28,396,1,0,
	0,0,30,415,1,0,0,0,32,440,1,0,0,0,34,443,1,0,0,0,36,449,1,0,0,0,38,453,
	1,0,0,0,40,456,1,0,0,0,42,460,1,0,0,0,44,463,1,0,0,0,46,482,1,0,0,0,48,
	490,1,0,0,0,50,505,1,0,0,0,52,509,1,0,0,0,54,521,1,0,0,0,56,531,1,0,0,0,
	58,542,1,0,0,0,60,567,1,0,0,0,62,573,1,0,0,0,64,600,1,0,0,0,66,602,1,0,
	0,0,68,609,1,0,0,0,70,613,1,0,0,0,72,650,1,0,0,0,74,652,1,0,0,0,76,658,
	1,0,0,0,78,664,1,0,0,0,80,668,1,0,0,0,82,673,1,0,0,0,84,678,1,0,0,0,86,
	683,1,0,0,0,88,753,1,0,0,0,90,755,1,0,0,0,92,777,1,0,0,0,94,779,1,0,0,0,
	96,807,1,0,0,0,98,809,1,0,0,0,100,820,1,0,0,0,102,830,1,0,0,0,104,840,1,
	0,0,0,106,842,1,0,0,0,108,848,1,0,0,0,110,862,1,0,0,0,112,876,1,0,0,0,114,
	881,1,0,0,0,116,898,1,0,0,0,118,900,1,0,0,0,120,907,1,0,0,0,122,913,1,0,
	0,0,124,927,1,0,0,0,126,960,1,0,0,0,128,962,1,0,0,0,130,992,1,0,0,0,132,
	994,1,0,0,0,134,1011,1,0,0,0,136,1020,1,0,0,0,138,1032,1,0,0,0,140,1042,
	1,0,0,0,142,1054,1,0,0,0,144,1069,1,0,0,0,146,1090,1,0,0,0,148,1092,1,0,
	0,0,150,1113,1,0,0,0,152,1115,1,0,0,0,154,1128,1,0,0,0,156,1133,1,0,0,0,
	158,168,3,156,78,0,159,163,3,2,1,0,160,162,7,0,0,0,161,160,1,0,0,0,162,
	165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,167,1,0,0,0,165,163,1,0,
	0,0,166,159,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,
	180,1,0,0,0,170,168,1,0,0,0,171,175,3,4,2,0,172,174,7,0,0,0,173,172,1,0,
	0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,179,1,0,0,0,177,
	175,1,0,0,0,178,171,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,
	0,0,181,192,1,0,0,0,182,180,1,0,0,0,183,187,3,6,3,0,184,186,7,0,0,0,185,
	184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,191,1,0,
	0,0,189,187,1,0,0,0,190,183,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,
	193,1,0,0,0,193,204,1,0,0,0,194,192,1,0,0,0,195,199,3,96,48,0,196,198,7,
	0,0,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,
	203,1,0,0,0,201,199,1,0,0,0,202,195,1,0,0,0,203,206,1,0,0,0,204,202,1,0,
	0,0,204,205,1,0,0,0,205,207,1,0,0,0,206,204,1,0,0,0,207,208,5,0,0,1,208,
	1,1,0,0,0,209,210,5,27,0,0,210,211,3,156,78,0,211,212,5,44,0,0,212,213,
	3,156,78,0,213,214,5,7,0,0,214,215,3,156,78,0,215,222,1,0,0,0,216,217,5,
	27,0,0,217,218,3,156,78,0,218,219,5,44,0,0,219,220,3,156,78,0,220,222,1,
	0,0,0,221,209,1,0,0,0,221,216,1,0,0,0,222,3,1,0,0,0,223,224,5,23,0,0,224,
	227,3,156,78,0,225,228,5,44,0,0,226,228,3,116,58,0,227,225,1,0,0,0,227,
	226,1,0,0,0,228,229,1,0,0,0,229,230,3,156,78,0,230,231,3,12,6,0,231,232,
	5,7,0,0,232,233,3,156,78,0,233,262,1,0,0,0,234,235,5,23,0,0,235,238,3,156,
	78,0,236,239,5,44,0,0,237,239,3,116,58,0,238,236,1,0,0,0,238,237,1,0,0,
	0,239,240,1,0,0,0,240,241,3,156,78,0,241,242,5,7,0,0,242,243,3,156,78,0,
	243,262,1,0,0,0,244,245,5,23,0,0,245,248,3,156,78,0,246,249,5,44,0,0,247,
	249,3,116,58,0,248,246,1,0,0,0,248,247,1,0,0,0,249,250,1,0,0,0,250,251,
	3,156,78,0,251,252,3,12,6,0,252,262,1,0,0,0,253,254,5,23,0,0,254,257,3,
	156,78,0,255,258,5,44,0,0,256,258,3,116,58,0,257,255,1,0,0,0,257,256,1,
	0,0,0,258,259,1,0,0,0,259,260,3,156,78,0,260,262,1,0,0,0,261,223,1,0,0,
	0,261,234,1,0,0,0,261,244,1,0,0,0,261,253,1,0,0,0,262,5,1,0,0,0,263,264,
	5,26,0,0,264,268,3,156,78,0,265,266,3,8,4,0,266,267,3,156,78,0,267,269,
	1,0,0,0,268,265,1,0,0,0,268,269,1,0,0,0,269,272,1,0,0,0,270,273,5,44,0,
	0,271,273,3,116,58,0,272,270,1,0,0,0,272,271,1,0,0,0,273,274,1,0,0,0,274,
	275,3,156,78,0,275,276,5,7,0,0,276,277,3,156,78,0,277,292,1,0,0,0,278,279,
	5,26,0,0,279,283,3,156,78,0,280,281,3,8,4,0,281,282,3,156,78,0,282,284,
	1,0,0,0,283,280,1,0,0,0,283,284,1,0,0,0,284,287,1,0,0,0,285,288,5,44,0,
	0,286,288,3,116,58,0,287,285,1,0,0,0,287,286,1,0,0,0,288,289,1,0,0,0,289,
	290,3,156,78,0,290,292,1,0,0,0,291,263,1,0,0,0,291,278,1,0,0,0,292,7,1,
	0,0,0,293,294,3,154,77,0,294,9,1,0,0,0,295,296,5,25,0,0,296,297,3,156,78,
	0,297,298,3,12,6,0,298,299,3,98,49,0,299,300,3,156,78,0,300,11,1,0,0,0,
	301,308,3,14,7,0,302,303,5,40,0,0,303,304,3,156,78,0,304,305,3,14,7,0,305,
	307,1,0,0,0,306,302,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,0,
	0,0,309,312,1,0,0,0,310,308,1,0,0,0,311,301,1,0,0,0,311,312,1,0,0,0,312,
	313,1,0,0,0,313,314,3,156,78,0,314,13,1,0,0,0,315,317,7,1,0,0,316,315,1,
	0,0,0,316,317,1,0,0,0,317,318,1,0,0,0,318,319,3,156,78,0,319,320,3,16,8,
	0,320,327,3,156,78,0,321,322,5,34,0,0,322,323,3,156,78,0,323,324,3,18,9,
	0,324,326,1,0,0,0,325,321,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,
	1,0,0,0,328,341,1,0,0,0,329,327,1,0,0,0,330,337,3,18,9,0,331,332,5,34,0,
	0,332,333,3,156,78,0,333,334,3,18,9,0,334,336,1,0,0,0,335,331,1,0,0,0,336,
	339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,341,1,0,0,0,339,337,1,0,
	0,0,340,316,1,0,0,0,340,330,1,0,0,0,341,15,1,0,0,0,342,343,3,154,77,0,343,
	17,1,0,0,0,344,345,5,3,0,0,345,346,3,156,78,0,346,351,3,20,10,0,347,348,
	5,9,0,0,348,349,3,156,78,0,349,350,3,70,35,0,350,352,1,0,0,0,351,347,1,
	0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,5,4,0,0,354,355,3,156,78,
	0,355,19,1,0,0,0,356,357,3,154,77,0,357,358,3,156,78,0,358,21,1,0,0,0,359,
	360,5,24,0,0,360,362,3,156,78,0,361,363,3,24,12,0,362,361,1,0,0,0,362,363,
	1,0,0,0,363,364,1,0,0,0,364,365,5,5,0,0,365,367,3,156,78,0,366,368,3,64,
	32,0,367,366,1,0,0,0,367,368,1,0,0,0,368,376,1,0,0,0,369,370,5,7,0,0,370,
	372,3,156,78,0,371,373,3,64,32,0,372,371,1,0,0,0,372,373,1,0,0,0,373,375,
	1,0,0,0,374,369,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,
	377,379,1,0,0,0,378,376,1,0,0,0,379,380,5,6,0,0,380,381,3,156,78,0,381,
	23,1,0,0,0,382,383,5,9,0,0,383,384,3,154,77,0,384,385,3,156,78,0,385,25,
	1,0,0,0,386,393,3,28,14,0,387,388,5,40,0,0,388,389,3,156,78,0,389,390,3,
	28,14,0,390,392,1,0,0,0,391,387,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,
	393,394,1,0,0,0,394,27,1,0,0,0,395,393,1,0,0,0,396,397,3,32,16,0,397,404,
	3,156,78,0,398,399,3,30,15,0,399,400,3,32,16,0,400,401,3,156,78,0,401,403,
	1,0,0,0,402,398,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,
	405,29,1,0,0,0,406,404,1,0,0,0,407,408,5,37,0,0,408,416,3,156,78,0,409,
	410,5,39,0,0,410,416,3,156,78,0,411,412,5,41,0,0,412,416,3,156,78,0,413,
	414,5,17,0,0,414,416,3,156,78,0,415,407,1,0,0,0,415,409,1,0,0,0,415,411,
	1,0,0,0,415,413,1,0,0,0,416,31,1,0,0,0,417,420,3,34,17,0,418,420,3,40,20,
	0,419,417,1,0,0,0,419,418,1,0,0,0,420,428,1,0,0,0,421,427,5,22,0,0,422,
	427,3,42,21,0,423,427,3,44,22,0,424,427,3,46,23,0,425,427,3,52,26,0,426,
	421,1,0,0,0,426,422,1,0,0,0,426,423,1,0,0,0,426,424,1,0,0,0,426,425,1,0,
	0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,441,1,0,0,0,430,
	428,1,0,0,0,431,437,5,22,0,0,432,437,3,42,21,0,433,437,3,44,22,0,434,437,
	3,46,23,0,435,437,3,52,26,0,436,431,1,0,0,0,436,432,1,0,0,0,436,433,1,0,
	0,0,436,434,1,0,0,0,436,435,1,0,0,0,437,438,1,0,0,0,438,436,1,0,0,0,438,
	439,1,0,0,0,439,441,1,0,0,0,440,419,1,0,0,0,440,436,1,0,0,0,441,33,1,0,
	0,0,442,444,3,36,18,0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,
	446,3,38,19,0,446,35,1,0,0,0,447,450,3,154,77,0,448,450,5,11,0,0,449,447,
	1,0,0,0,449,448,1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,452,5,13,0,
	0,452,37,1,0,0,0,453,454,3,154,77,0,454,39,1,0,0,0,455,457,3,36,18,0,456,
	455,1,0,0,0,456,457,1,0,0,0,457,458,1,0,0,0,458,459,5,11,0,0,459,41,1,0,
	0,0,460,461,5,10,0,0,461,462,3,154,77,0,462,43,1,0,0,0,463,464,5,1,0,0,
	464,466,3,156,78,0,465,467,3,36,18,0,466,465,1,0,0,0,466,467,1,0,0,0,467,
	468,1,0,0,0,468,469,3,154,77,0,469,478,3,156,78,0,470,471,7,2,0,0,471,474,
	3,156,78,0,472,475,3,154,77,0,473,475,5,44,0,0,474,472,1,0,0,0,474,473,
	1,0,0,0,475,476,1,0,0,0,476,477,3,156,78,0,477,479,1,0,0,0,478,470,1,0,
	0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,5,2,0,0,481,45,1,0,0,0,482,
	484,5,9,0,0,483,485,5,9,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,488,1,0,
	0,0,486,489,3,154,77,0,487,489,3,48,24,0,488,486,1,0,0,0,488,487,1,0,0,
	0,489,47,1,0,0,0,490,491,5,63,0,0,491,492,3,156,78,0,492,493,3,50,25,0,
	493,494,5,4,0,0,494,49,1,0,0,0,495,503,5,37,0,0,496,503,5,38,0,0,497,503,
	5,35,0,0,498,503,5,36,0,0,499,503,5,43,0,0,500,503,5,44,0,0,501,503,3,154,
	77,0,502,495,1,0,0,0,502,496,1,0,0,0,502,497,1,0,0,0,502,498,1,0,0,0,502,
	499,1,0,0,0,502,500,1,0,0,0,502,501,1,0,0,0,503,504,1,0,0,0,504,506,3,156,
	78,0,505,502,1,0,0,0,506,507,1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,
	51,1,0,0,0,509,510,5,42,0,0,510,511,3,156,78,0,511,512,3,54,27,0,512,513,
	3,156,78,0,513,514,5,4,0,0,514,53,1,0,0,0,515,522,3,34,17,0,516,522,3,40,
	20,0,517,522,5,22,0,0,518,522,3,42,21,0,519,522,3,44,22,0,520,522,3,46,
	23,0,521,515,1,0,0,0,521,516,1,0,0,0,521,517,1,0,0,0,521,518,1,0,0,0,521,
	519,1,0,0,0,521,520,1,0,0,0,522,55,1,0,0,0,523,524,5,12,0,0,524,532,3,156,
	78,0,525,526,5,40,0,0,526,532,3,156,78,0,527,528,5,17,0,0,528,532,3,156,
	78,0,529,530,5,8,0,0,530,532,3,156,78,0,531,523,1,0,0,0,531,525,1,0,0,0,
	531,527,1,0,0,0,531,529,1,0,0,0,532,57,1,0,0,0,533,534,3,154,77,0,534,535,
	3,156,78,0,535,543,1,0,0,0,536,537,5,60,0,0,537,543,3,156,78,0,538,539,
	5,11,0,0,539,543,3,154,77,0,540,541,5,14,0,0,541,543,3,154,77,0,542,533,
	1,0,0,0,542,536,1,0,0,0,542,538,1,0,0,0,542,540,1,0,0,0,543,59,1,0,0,0,
	544,545,3,26,13,0,545,546,5,5,0,0,546,548,3,156,78,0,547,549,3,62,31,0,
	548,547,1,0,0,0,548,549,1,0,0,0,549,550,1,0,0,0,550,551,5,6,0,0,551,552,
	3,156,78,0,552,568,1,0,0,0,553,555,3,88,44,0,554,553,1,0,0,0,555,558,1,
	0,0,0,556,554,1,0,0,0,556,557,1,0,0,0,557,559,1,0,0,0,558,556,1,0,0,0,559,
	560,5,5,0,0,560,562,3,156,78,0,561,563,3,62,31,0,562,561,1,0,0,0,562,563,
	1,0,0,0,563,564,1,0,0,0,564,565,5,6,0,0,565,566,3,156,78,0,566,568,1,0,
	0,0,567,544,1,0,0,0,567,556,1,0,0,0,568,61,1,0,0,0,569,570,5,7,0,0,570,
	572,3,156,78,0,571,569,1,0,0,0,572,575,1,0,0,0,573,571,1,0,0,0,573,574,
	1,0,0,0,574,576,1,0,0,0,575,573,1,0,0,0,576,577,3,64,32,0,577,585,3,156,
	78,0,578,579,5,7,0,0,579,581,3,156,78,0,580,582,3,64,32,0,581,580,1,0,0,
	0,581,582,1,0,0,0,582,584,1,0,0,0,583,578,1,0,0,0,584,587,1,0,0,0,585,583,
	1,0,0,0,585,586,1,0,0,0,586,63,1,0,0,0,587,585,1,0,0,0,588,589,3,58,29,
	0,589,590,5,9,0,0,590,591,3,156,78,0,591,593,3,70,35,0,592,594,3,66,33,
	0,593,592,1,0,0,0,593,594,1,0,0,0,594,601,1,0,0,0,595,596,3,58,29,0,596,
	597,5,9,0,0,597,598,3,156,78,0,598,599,3,68,34,0,599,601,1,0,0,0,600,588,
	1,0,0,0,600,595,1,0,0,0,601,65,1,0,0,0,602,603,5,28,0,0,603,604,3,156,78,
	0,604,67,1,0,0,0,605,610,3,88,44,0,606,610,3,94,47,0,607,608,5,59,0,0,608,
	610,3,156,78,0,609,605,1,0,0,0,609,606,1,0,0,0,609,607,1,0,0,0,610,611,
	1,0,0,0,611,609,1,0,0,0,611,612,1,0,0,0,612,69,1,0,0,0,613,620,3,72,36,
	0,614,616,3,56,28,0,615,614,1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,
	619,3,72,36,0,618,615,1,0,0,0,619,622,1,0,0,0,620,618,1,0,0,0,620,621,1,
	0,0,0,621,71,1,0,0,0,622,620,1,0,0,0,623,624,3,80,40,0,624,625,3,156,78,
	0,625,651,1,0,0,0,626,627,3,82,41,0,627,628,3,156,78,0,628,651,1,0,0,0,
	629,630,3,84,42,0,630,631,3,156,78,0,631,651,1,0,0,0,632,633,5,44,0,0,633,
	651,3,156,78,0,634,635,5,31,0,0,635,651,3,156,78,0,636,637,3,154,77,0,637,
	638,3,156,78,0,638,651,1,0,0,0,639,651,3,118,59,0,640,641,3,116,58,0,641,
	642,3,156,78,0,642,651,1,0,0,0,643,651,3,78,39,0,644,651,3,120,60,0,645,
	651,3,74,37,0,646,647,3,86,43,0,647,648,3,156,78,0,648,651,1,0,0,0,649,
	651,3,76,38,0,650,623,1,0,0,0,650,626,1,0,0,0,650,629,1,0,0,0,650,632,1,
	0,0,0,650,634,1,0,0,0,650,636,1,0,0,0,650,639,1,0,0,0,650,640,1,0,0,0,650,
	643,1,0,0,0,650,644,1,0,0,0,650,645,1,0,0,0,650,646,1,0,0,0,650,649,1,0,
	0,0,651,73,1,0,0,0,652,653,5,63,0,0,653,654,3,156,78,0,654,655,3,70,35,
	0,655,656,5,4,0,0,656,657,3,156,78,0,657,75,1,0,0,0,658,659,5,58,0,0,659,
	660,3,156,78,0,660,661,3,70,35,0,661,662,5,4,0,0,662,663,3,156,78,0,663,
	77,1,0,0,0,664,665,5,22,0,0,665,666,3,156,78,0,666,79,1,0,0,0,667,669,7,
	3,0,0,668,667,1,0,0,0,668,669,1,0,0,0,669,670,1,0,0,0,670,671,5,43,0,0,
	671,81,1,0,0,0,672,674,7,3,0,0,673,672,1,0,0,0,673,674,1,0,0,0,674,675,
	1,0,0,0,675,676,5,29,0,0,676,83,1,0,0,0,677,679,7,3,0,0,678,677,1,0,0,0,
	678,679,1,0,0,0,679,680,1,0,0,0,680,681,5,35,0,0,681,85,1,0,0,0,682,684,
	7,3,0,0,683,682,1,0,0,0,683,684,1,0,0,0,684,685,1,0,0,0,685,686,5,36,0,
	0,686,87,1,0,0,0,687,688,3,154,77,0,688,689,3,156,78,0,689,754,1,0,0,0,
	690,691,3,80,40,0,691,692,3,156,78,0,692,754,1,0,0,0,693,694,3,82,41,0,
	694,695,3,156,78,0,695,754,1,0,0,0,696,697,3,84,42,0,697,698,3,156,78,0,
	698,754,1,0,0,0,699,700,3,86,43,0,700,701,3,156,78,0,701,754,1,0,0,0,702,
	703,5,44,0,0,703,754,3,156,78,0,704,705,3,116,58,0,705,706,3,156,78,0,706,
	754,1,0,0,0,707,708,5,22,0,0,708,754,3,156,78,0,709,710,5,31,0,0,710,754,
	3,156,78,0,711,712,5,20,0,0,712,754,3,156,78,0,713,714,5,21,0,0,714,754,
	3,156,78,0,715,716,5,9,0,0,716,754,3,156,78,0,717,718,5,63,0,0,718,723,
	3,156,78,0,719,722,3,88,44,0,720,722,3,92,46,0,721,719,1,0,0,0,721,720,
	1,0,0,0,722,725,1,0,0,0,723,721,1,0,0,0,723,724,1,0,0,0,724,726,1,0,0,0,
	725,723,1,0,0,0,726,727,5,4,0,0,727,728,3,156,78,0,728,754,1,0,0,0,729,
	730,5,3,0,0,730,735,3,156,78,0,731,734,3,88,44,0,732,734,3,92,46,0,733,
	731,1,0,0,0,733,732,1,0,0,0,734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,
	0,0,736,738,1,0,0,0,737,735,1,0,0,0,738,739,5,4,0,0,739,740,3,156,78,0,
	740,754,1,0,0,0,741,742,5,1,0,0,742,747,3,156,78,0,743,746,3,88,44,0,744,
	746,3,92,46,0,745,743,1,0,0,0,745,744,1,0,0,0,746,749,1,0,0,0,747,745,1,
	0,0,0,747,748,1,0,0,0,748,750,1,0,0,0,749,747,1,0,0,0,750,751,5,2,0,0,751,
	752,3,156,78,0,752,754,1,0,0,0,753,687,1,0,0,0,753,690,1,0,0,0,753,693,
	1,0,0,0,753,696,1,0,0,0,753,699,1,0,0,0,753,702,1,0,0,0,753,704,1,0,0,0,
	753,707,1,0,0,0,753,709,1,0,0,0,753,711,1,0,0,0,753,713,1,0,0,0,753,715,
	1,0,0,0,753,717,1,0,0,0,753,729,1,0,0,0,753,741,1,0,0,0,754,89,1,0,0,0,
	755,756,5,59,0,0,756,760,3,156,78,0,757,759,3,88,44,0,758,757,1,0,0,0,759,
	762,1,0,0,0,760,758,1,0,0,0,760,761,1,0,0,0,761,766,1,0,0,0,762,760,1,0,
	0,0,763,767,3,94,47,0,764,765,5,7,0,0,765,767,3,156,78,0,766,763,1,0,0,
	0,766,764,1,0,0,0,767,91,1,0,0,0,768,778,3,94,47,0,769,770,5,59,0,0,770,
	778,3,156,78,0,771,772,5,7,0,0,772,778,3,156,78,0,773,774,5,18,0,0,774,
	778,3,156,78,0,775,776,5,19,0,0,776,778,3,156,78,0,777,768,1,0,0,0,777,
	769,1,0,0,0,777,771,1,0,0,0,777,773,1,0,0,0,777,775,1,0,0,0,778,93,1,0,
	0,0,779,780,5,5,0,0,780,791,3,156,78,0,781,790,3,62,31,0,782,790,3,96,48,
	0,783,790,3,88,44,0,784,790,3,94,47,0,785,786,5,59,0,0,786,790,3,156,78,
	0,787,788,5,7,0,0,788,790,3,156,78,0,789,781,1,0,0,0,789,782,1,0,0,0,789,
	783,1,0,0,0,789,784,1,0,0,0,789,785,1,0,0,0,789,787,1,0,0,0,790,793,1,0,
	0,0,791,789,1,0,0,0,791,792,1,0,0,0,792,794,1,0,0,0,793,791,1,0,0,0,794,
	795,5,6,0,0,795,796,3,156,78,0,796,95,1,0,0,0,797,808,3,60,30,0,798,808,
	3,10,5,0,799,808,3,22,11,0,800,808,3,128,64,0,801,808,3,132,66,0,802,808,
	3,100,50,0,803,808,3,138,69,0,804,808,3,140,70,0,805,808,3,142,71,0,806,
	808,3,90,45,0,807,797,1,0,0,0,807,798,1,0,0,0,807,799,1,0,0,0,807,800,1,
	0,0,0,807,801,1,0,0,0,807,802,1,0,0,0,807,803,1,0,0,0,807,804,1,0,0,0,807,
	805,1,0,0,0,807,806,1,0,0,0,808,97,1,0,0,0,809,810,5,5,0,0,810,814,3,156,
	78,0,811,813,3,96,48,0,812,811,1,0,0,0,813,816,1,0,0,0,814,812,1,0,0,0,
	814,815,1,0,0,0,815,817,1,0,0,0,816,814,1,0,0,0,817,818,5,6,0,0,818,819,
	3,156,78,0,819,99,1,0,0,0,820,821,5,49,0,0,821,822,3,156,78,0,822,823,3,
	102,51,0,823,824,3,156,78,0,824,825,3,98,49,0,825,101,1,0,0,0,826,831,3,
	106,53,0,827,831,3,108,54,0,828,831,3,110,55,0,829,831,3,104,52,0,830,826,
	1,0,0,0,830,827,1,0,0,0,830,828,1,0,0,0,830,829,1,0,0,0,831,103,1,0,0,0,
	832,833,5,3,0,0,833,834,3,156,78,0,834,835,3,102,51,0,835,836,3,156,78,
	0,836,837,5,4,0,0,837,841,1,0,0,0,838,841,3,112,56,0,839,841,3,114,57,0,
	840,832,1,0,0,0,840,838,1,0,0,0,840,839,1,0,0,0,841,105,1,0,0,0,842,843,
	5,33,0,0,843,844,3,156,78,0,844,845,5,17,0,0,845,846,3,156,78,0,846,847,
	3,104,52,0,847,107,1,0,0,0,848,858,3,104,52,0,849,850,3,156,78,0,850,851,
	5,17,0,0,851,852,3,156,78,0,852,853,5,34,0,0,853,854,3,156,78,0,854,855,
	5,17,0,0,855,856,3,156,78,0,856,857,3,104,52,0,857,859,1,0,0,0,858,849,
	1,0,0,0,859,860,1,0,0,0,860,858,1,0,0,0,860,861,1,0,0,0,861,109,1,0,0,0,
	862,872,3,104,52,0,863,864,3,156,78,0,864,865,5,17,0,0,865,866,3,156,78,
	0,866,867,5,50,0,0,867,868,3,156,78,0,868,869,5,17,0,0,869,870,3,156,78,
	0,870,871,3,104,52,0,871,873,1,0,0,0,872,863,1,0,0,0,873,874,1,0,0,0,874,
	872,1,0,0,0,874,875,1,0,0,0,875,111,1,0,0,0,876,877,5,3,0,0,877,878,3,156,
	78,0,878,879,3,64,32,0,879,880,5,4,0,0,880,113,1,0,0,0,881,886,7,4,0,0,
	882,885,3,88,44,0,883,885,3,92,46,0,884,882,1,0,0,0,884,883,1,0,0,0,885,
	888,1,0,0,0,886,884,1,0,0,0,886,887,1,0,0,0,887,889,1,0,0,0,888,886,1,0,
	0,0,889,890,5,4,0,0,890,115,1,0,0,0,891,892,5,30,0,0,892,893,3,156,78,0,
	893,894,5,44,0,0,894,895,3,156,78,0,895,896,5,4,0,0,896,899,1,0,0,0,897,
	899,5,16,0,0,898,891,1,0,0,0,898,897,1,0,0,0,899,117,1,0,0,0,900,901,5,
	61,0,0,901,902,3,156,78,0,902,903,5,60,0,0,903,904,3,156,78,0,904,905,5,
	4,0,0,905,906,3,156,78,0,906,119,1,0,0,0,907,908,5,54,0,0,908,909,3,156,
	78,0,909,910,3,122,61,0,910,911,5,4,0,0,911,912,3,156,78,0,912,121,1,0,
	0,0,913,924,3,124,62,0,914,915,5,17,0,0,915,916,3,156,78,0,916,917,7,3,
	0,0,917,918,3,156,78,0,918,919,5,17,0,0,919,920,3,156,78,0,920,921,3,124,
	62,0,921,923,1,0,0,0,922,914,1,0,0,0,923,926,1,0,0,0,924,922,1,0,0,0,924,
	925,1,0,0,0,925,123,1,0,0,0,926,924,1,0,0,0,927,939,3,126,63,0,928,929,
	5,11,0,0,929,930,3,156,78,0,930,931,3,126,63,0,931,938,1,0,0,0,932,933,
	5,12,0,0,933,934,3,156,78,0,934,935,3,80,40,0,935,936,3,156,78,0,936,938,
	1,0,0,0,937,928,1,0,0,0,937,932,1,0,0,0,938,941,1,0,0,0,939,937,1,0,0,0,
	939,940,1,0,0,0,940,125,1,0,0,0,941,939,1,0,0,0,942,943,3,80,40,0,943,944,
	3,156,78,0,944,961,1,0,0,0,945,946,3,84,42,0,946,947,3,156,78,0,947,961,
	1,0,0,0,948,949,3,86,43,0,949,950,3,156,78,0,950,961,1,0,0,0,951,952,3,
	82,41,0,952,953,3,156,78,0,953,961,1,0,0,0,954,955,5,3,0,0,955,956,3,156,
	78,0,956,957,3,122,61,0,957,958,5,4,0,0,958,959,3,156,78,0,959,961,1,0,
	0,0,960,942,1,0,0,0,960,945,1,0,0,0,960,948,1,0,0,0,960,951,1,0,0,0,960,
	954,1,0,0,0,961,127,1,0,0,0,962,963,5,48,0,0,963,964,3,156,78,0,964,965,
	5,5,0,0,965,967,3,156,78,0,966,968,3,130,65,0,967,966,1,0,0,0,967,968,1,
	0,0,0,968,976,1,0,0,0,969,970,5,7,0,0,970,972,3,156,78,0,971,973,3,130,
	65,0,972,971,1,0,0,0,972,973,1,0,0,0,973,975,1,0,0,0,974,969,1,0,0,0,975,
	978,1,0,0,0,976,974,1,0,0,0,976,977,1,0,0,0,977,979,1,0,0,0,978,976,1,0,
	0,0,979,980,5,6,0,0,980,981,3,156,78,0,981,129,1,0,0,0,982,983,3,58,29,
	0,983,984,5,9,0,0,984,985,3,156,78,0,985,986,3,70,35,0,986,993,1,0,0,0,
	987,988,3,58,29,0,988,989,5,9,0,0,989,990,3,156,78,0,990,991,3,68,34,0,
	991,993,1,0,0,0,992,982,1,0,0,0,992,987,1,0,0,0,993,131,1,0,0,0,994,995,
	5,51,0,0,995,996,3,156,78,0,996,997,5,17,0,0,997,998,3,156,78,0,998,999,
	3,154,77,0,999,1000,3,156,78,0,1000,1001,5,5,0,0,1001,1005,3,156,78,0,1002,
	1004,3,134,67,0,1003,1002,1,0,0,0,1004,1007,1,0,0,0,1005,1003,1,0,0,0,1005,
	1006,1,0,0,0,1006,1008,1,0,0,0,1007,1005,1,0,0,0,1008,1009,5,6,0,0,1009,
	1010,3,156,78,0,1010,133,1,0,0,0,1011,1012,3,136,68,0,1012,1013,5,5,0,0,
	1013,1015,3,156,78,0,1014,1016,3,62,31,0,1015,1014,1,0,0,0,1015,1016,1,
	0,0,0,1016,1017,1,0,0,0,1017,1018,5,6,0,0,1018,1019,3,156,78,0,1019,135,
	1,0,0,0,1020,1021,7,5,0,0,1021,1029,3,156,78,0,1022,1023,5,40,0,0,1023,
	1024,3,156,78,0,1024,1025,7,5,0,0,1025,1026,3,156,78,0,1026,1028,1,0,0,
	0,1027,1022,1,0,0,0,1028,1031,1,0,0,0,1029,1027,1,0,0,0,1029,1030,1,0,0,
	0,1030,137,1,0,0,0,1031,1029,1,0,0,0,1032,1033,5,55,0,0,1033,1034,3,156,
	78,0,1034,1035,5,5,0,0,1035,1037,3,156,78,0,1036,1038,3,62,31,0,1037,1036,
	1,0,0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1040,5,6,0,0,1040,1041,
	3,156,78,0,1041,139,1,0,0,0,1042,1043,5,56,0,0,1043,1044,3,156,78,0,1044,
	1045,3,154,77,0,1045,1046,3,156,78,0,1046,1047,5,5,0,0,1047,1049,3,156,
	78,0,1048,1050,3,62,31,0,1049,1048,1,0,0,0,1049,1050,1,0,0,0,1050,1051,
	1,0,0,0,1051,1052,5,6,0,0,1052,1053,3,156,78,0,1053,141,1,0,0,0,1054,1055,
	5,57,0,0,1055,1056,3,156,78,0,1056,1057,3,144,72,0,1057,1058,3,156,78,0,
	1058,1059,5,5,0,0,1059,1063,3,156,78,0,1060,1062,3,148,74,0,1061,1060,1,
	0,0,0,1062,1065,1,0,0,0,1063,1061,1,0,0,0,1063,1064,1,0,0,0,1064,1066,1,
	0,0,0,1065,1063,1,0,0,0,1066,1067,5,6,0,0,1067,1068,3,156,78,0,1068,143,
	1,0,0,0,1069,1077,3,146,73,0,1070,1071,3,156,78,0,1071,1072,5,40,0,0,1072,
	1073,3,156,78,0,1073,1074,3,146,73,0,1074,1076,1,0,0,0,1075,1070,1,0,0,
	0,1076,1079,1,0,0,0,1077,1075,1,0,0,0,1077,1078,1,0,0,0,1078,145,1,0,0,
	0,1079,1077,1,0,0,0,1080,1091,5,44,0,0,1081,1087,3,154,77,0,1082,1083,3,
	156,78,0,1083,1084,3,154,77,0,1084,1086,1,0,0,0,1085,1082,1,0,0,0,1086,
	1089,1,0,0,0,1087,1085,1,0,0,0,1087,1088,1,0,0,0,1088,1091,1,0,0,0,1089,
	1087,1,0,0,0,1090,1080,1,0,0,0,1090,1081,1,0,0,0,1091,147,1,0,0,0,1092,
	1093,3,150,75,0,1093,1094,3,156,78,0,1094,1095,5,5,0,0,1095,1097,3,156,
	78,0,1096,1098,3,152,76,0,1097,1096,1,0,0,0,1097,1098,1,0,0,0,1098,1107,
	1,0,0,0,1099,1100,3,156,78,0,1100,1101,5,7,0,0,1101,1103,3,156,78,0,1102,
	1104,3,152,76,0,1103,1102,1,0,0,0,1103,1104,1,0,0,0,1104,1106,1,0,0,0,1105,
	1099,1,0,0,0,1106,1109,1,0,0,0,1107,1105,1,0,0,0,1107,1108,1,0,0,0,1108,
	1110,1,0,0,0,1109,1107,1,0,0,0,1110,1111,5,6,0,0,1111,1112,3,156,78,0,1112,
	149,1,0,0,0,1113,1114,5,59,0,0,1114,151,1,0,0,0,1115,1116,3,154,77,0,1116,
	1117,3,156,78,0,1117,1118,5,9,0,0,1118,1119,3,156,78,0,1119,1125,3,80,40,
	0,1120,1121,3,156,78,0,1121,1122,3,80,40,0,1122,1124,1,0,0,0,1123,1120,
	1,0,0,0,1124,1127,1,0,0,0,1125,1123,1,0,0,0,1125,1126,1,0,0,0,1126,153,
	1,0,0,0,1127,1125,1,0,0,0,1128,1129,7,6,0,0,1129,155,1,0,0,0,1130,1132,
	7,7,0,0,1131,1130,1,0,0,0,1132,1135,1,0,0,0,1133,1131,1,0,0,0,1133,1134,
	1,0,0,0,1134,157,1,0,0,0,1135,1133,1,0,0,0,113,163,168,175,180,187,192,
	199,204,221,227,238,248,257,261,268,272,283,287,291,308,311,316,327,337,
	340,351,362,367,372,376,393,404,415,419,426,428,436,438,440,443,449,456,
	466,474,478,484,488,502,507,521,531,542,548,556,562,567,573,581,585,593,
	600,609,611,615,620,650,668,673,678,683,721,723,733,735,745,747,753,760,
	766,777,789,791,807,814,830,840,860,874,884,886,898,924,937,939,960,967,
	972,976,992,1005,1015,1029,1037,1049,1063,1077,1087,1090,1097,1103,1107,
	1125,1133];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!css3Parser.__ATN) {
			css3Parser.__ATN = new ATNDeserializer().deserialize(css3Parser._serializedATN);
		}

		return css3Parser.__ATN;
	}


	static DecisionsToDFA = css3Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StylesheetContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(css3Parser.EOF, 0);
	}
	public charset_list(): CharsetContext[] {
		return this.getTypedRuleContexts(CharsetContext) as CharsetContext[];
	}
	public charset(i: number): CharsetContext {
		return this.getTypedRuleContext(CharsetContext, i) as CharsetContext;
	}
	public imports_list(): ImportsContext[] {
		return this.getTypedRuleContexts(ImportsContext) as ImportsContext[];
	}
	public imports(i: number): ImportsContext {
		return this.getTypedRuleContext(ImportsContext, i) as ImportsContext;
	}
	public namespace__list(): Namespace_Context[] {
		return this.getTypedRuleContexts(Namespace_Context) as Namespace_Context[];
	}
	public namespace_(i: number): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, i) as Namespace_Context;
	}
	public nestedStatement_list(): NestedStatementContext[] {
		return this.getTypedRuleContexts(NestedStatementContext) as NestedStatementContext[];
	}
	public nestedStatement(i: number): NestedStatementContext {
		return this.getTypedRuleContext(NestedStatementContext, i) as NestedStatementContext;
	}
	public Comment_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comment);
	}
	public Comment(i: number): TerminalNode {
		return this.getToken(css3Parser.Comment, i);
	}
	public Space_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Space);
	}
	public Space(i: number): TerminalNode {
		return this.getToken(css3Parser.Space, i);
	}
	public Cdo_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Cdo);
	}
	public Cdo(i: number): TerminalNode {
		return this.getToken(css3Parser.Cdo, i);
	}
	public Cdc_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Cdc);
	}
	public Cdc(i: number): TerminalNode {
		return this.getToken(css3Parser.Cdc, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_stylesheet;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterStylesheet) {
	 		listener.enterStylesheet(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitStylesheet) {
	 		listener.exitStylesheet(this);
		}
	}
}


export class CharsetContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_charset;
	}
	public override copyFrom(ctx: CharsetContext): void {
		super.copyFrom(ctx);
	}
}
export class BadCharsetContext extends CharsetContext {
	constructor(parser: css3Parser, ctx: CharsetContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Charset(): TerminalNode {
		return this.getToken(css3Parser.Charset, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadCharset) {
	 		listener.enterBadCharset(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadCharset) {
	 		listener.exitBadCharset(this);
		}
	}
}
export class GoodCharsetContext extends CharsetContext {
	constructor(parser: css3Parser, ctx: CharsetContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Charset(): TerminalNode {
		return this.getToken(css3Parser.Charset, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(css3Parser.SemiColon, 0);
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGoodCharset) {
	 		listener.enterGoodCharset(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGoodCharset) {
	 		listener.exitGoodCharset(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_imports;
	}
	public override copyFrom(ctx: ImportsContext): void {
		super.copyFrom(ctx);
	}
}
export class BadImportContext extends ImportsContext {
	constructor(parser: css3Parser, ctx: ImportsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Import(): TerminalNode {
		return this.getToken(css3Parser.Import, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaQueryList(): MediaQueryListContext {
		return this.getTypedRuleContext(MediaQueryListContext, 0) as MediaQueryListContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadImport) {
	 		listener.enterBadImport(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadImport) {
	 		listener.exitBadImport(this);
		}
	}
}
export class GoodImportContext extends ImportsContext {
	constructor(parser: css3Parser, ctx: ImportsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Import(): TerminalNode {
		return this.getToken(css3Parser.Import, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaQueryList(): MediaQueryListContext {
		return this.getTypedRuleContext(MediaQueryListContext, 0) as MediaQueryListContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(css3Parser.SemiColon, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGoodImport) {
	 		listener.enterGoodImport(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGoodImport) {
	 		listener.exitGoodImport(this);
		}
	}
}


export class Namespace_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_namespace_;
	}
	public override copyFrom(ctx: Namespace_Context): void {
		super.copyFrom(ctx);
	}
}
export class GoodNamespaceContext extends Namespace_Context {
	constructor(parser: css3Parser, ctx: Namespace_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Namespace(): TerminalNode {
		return this.getToken(css3Parser.Namespace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(css3Parser.SemiColon, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public namespacePrefix(): NamespacePrefixContext {
		return this.getTypedRuleContext(NamespacePrefixContext, 0) as NamespacePrefixContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGoodNamespace) {
	 		listener.enterGoodNamespace(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGoodNamespace) {
	 		listener.exitGoodNamespace(this);
		}
	}
}
export class BadNamespaceContext extends Namespace_Context {
	constructor(parser: css3Parser, ctx: Namespace_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Namespace(): TerminalNode {
		return this.getToken(css3Parser.Namespace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public namespacePrefix(): NamespacePrefixContext {
		return this.getTypedRuleContext(NamespacePrefixContext, 0) as NamespacePrefixContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadNamespace) {
	 		listener.enterBadNamespace(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadNamespace) {
	 		listener.exitBadNamespace(this);
		}
	}
}


export class NamespacePrefixContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_namespacePrefix;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterNamespacePrefix) {
	 		listener.enterNamespacePrefix(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitNamespacePrefix) {
	 		listener.exitNamespacePrefix(this);
		}
	}
}


export class MediaContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Media(): TerminalNode {
		return this.getToken(css3Parser.Media, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaQueryList(): MediaQueryListContext {
		return this.getTypedRuleContext(MediaQueryListContext, 0) as MediaQueryListContext;
	}
	public groupRuleBody(): GroupRuleBodyContext {
		return this.getTypedRuleContext(GroupRuleBodyContext, 0) as GroupRuleBodyContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_media;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMedia) {
	 		listener.enterMedia(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMedia) {
	 		listener.exitMedia(this);
		}
	}
}


export class MediaQueryListContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaQuery_list(): MediaQueryContext[] {
		return this.getTypedRuleContexts(MediaQueryContext) as MediaQueryContext[];
	}
	public mediaQuery(i: number): MediaQueryContext {
		return this.getTypedRuleContext(MediaQueryContext, i) as MediaQueryContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(css3Parser.Comma, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_mediaQueryList;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMediaQueryList) {
	 		listener.enterMediaQueryList(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMediaQueryList) {
	 		listener.exitMediaQueryList(this);
		}
	}
}


export class MediaQueryContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaType(): MediaTypeContext {
		return this.getTypedRuleContext(MediaTypeContext, 0) as MediaTypeContext;
	}
	public And_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.And);
	}
	public And(i: number): TerminalNode {
		return this.getToken(css3Parser.And, i);
	}
	public mediaExpression_list(): MediaExpressionContext[] {
		return this.getTypedRuleContexts(MediaExpressionContext) as MediaExpressionContext[];
	}
	public mediaExpression(i: number): MediaExpressionContext {
		return this.getTypedRuleContext(MediaExpressionContext, i) as MediaExpressionContext;
	}
	public MediaOnly(): TerminalNode {
		return this.getToken(css3Parser.MediaOnly, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(css3Parser.Not, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_mediaQuery;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMediaQuery) {
	 		listener.enterMediaQuery(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMediaQuery) {
	 		listener.exitMediaQuery(this);
		}
	}
}


export class MediaTypeContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_mediaType;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMediaType) {
	 		listener.enterMediaType(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMediaType) {
	 		listener.exitMediaType(this);
		}
	}
}


export class MediaExpressionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public mediaFeature(): MediaFeatureContext {
		return this.getTypedRuleContext(MediaFeatureContext, 0) as MediaFeatureContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_mediaExpression;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMediaExpression) {
	 		listener.enterMediaExpression(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMediaExpression) {
	 		listener.exitMediaExpression(this);
		}
	}
}


export class MediaFeatureContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_mediaFeature;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterMediaFeature) {
	 		listener.enterMediaFeature(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitMediaFeature) {
	 		listener.exitMediaFeature(this);
		}
	}
}


export class PageContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Page(): TerminalNode {
		return this.getToken(css3Parser.Page, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public pseudoPage(): PseudoPageContext {
		return this.getTypedRuleContext(PseudoPageContext, 0) as PseudoPageContext;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(css3Parser.SemiColon, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_page;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterPage) {
	 		listener.enterPage(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitPage) {
	 		listener.exitPage(this);
		}
	}
}


export class PseudoPageContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_pseudoPage;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterPseudoPage) {
	 		listener.enterPseudoPage(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitPseudoPage) {
	 		listener.exitPseudoPage(this);
		}
	}
}


export class SelectorGroupContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selector_list(): SelectorContext[] {
		return this.getTypedRuleContexts(SelectorContext) as SelectorContext[];
	}
	public selector(i: number): SelectorContext {
		return this.getTypedRuleContext(SelectorContext, i) as SelectorContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(css3Parser.Comma, i);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_selectorGroup;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSelectorGroup) {
	 		listener.enterSelectorGroup(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSelectorGroup) {
	 		listener.exitSelectorGroup(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleSelectorSequence_list(): SimpleSelectorSequenceContext[] {
		return this.getTypedRuleContexts(SimpleSelectorSequenceContext) as SimpleSelectorSequenceContext[];
	}
	public simpleSelectorSequence(i: number): SimpleSelectorSequenceContext {
		return this.getTypedRuleContext(SimpleSelectorSequenceContext, i) as SimpleSelectorSequenceContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public combinator_list(): CombinatorContext[] {
		return this.getTypedRuleContexts(CombinatorContext) as CombinatorContext[];
	}
	public combinator(i: number): CombinatorContext {
		return this.getTypedRuleContext(CombinatorContext, i) as CombinatorContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_selector;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSelector) {
	 		listener.enterSelector(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSelector) {
	 		listener.exitSelector(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Plus(): TerminalNode {
		return this.getToken(css3Parser.Plus, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public Greater(): TerminalNode {
		return this.getToken(css3Parser.Greater, 0);
	}
	public Tilde(): TerminalNode {
		return this.getToken(css3Parser.Tilde, 0);
	}
	public Space(): TerminalNode {
		return this.getToken(css3Parser.Space, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_combinator;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCombinator) {
	 		listener.enterCombinator(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCombinator) {
	 		listener.exitCombinator(this);
		}
	}
}


export class SimpleSelectorSequenceContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSelector(): TypeSelectorContext {
		return this.getTypedRuleContext(TypeSelectorContext, 0) as TypeSelectorContext;
	}
	public universal(): UniversalContext {
		return this.getTypedRuleContext(UniversalContext, 0) as UniversalContext;
	}
	public Hash_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Hash);
	}
	public Hash(i: number): TerminalNode {
		return this.getToken(css3Parser.Hash, i);
	}
	public className_list(): ClassNameContext[] {
		return this.getTypedRuleContexts(ClassNameContext) as ClassNameContext[];
	}
	public className(i: number): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, i) as ClassNameContext;
	}
	public attrib_list(): AttribContext[] {
		return this.getTypedRuleContexts(AttribContext) as AttribContext[];
	}
	public attrib(i: number): AttribContext {
		return this.getTypedRuleContext(AttribContext, i) as AttribContext;
	}
	public pseudo_list(): PseudoContext[] {
		return this.getTypedRuleContexts(PseudoContext) as PseudoContext[];
	}
	public pseudo(i: number): PseudoContext {
		return this.getTypedRuleContext(PseudoContext, i) as PseudoContext;
	}
	public negation_list(): NegationContext[] {
		return this.getTypedRuleContexts(NegationContext) as NegationContext[];
	}
	public negation(i: number): NegationContext {
		return this.getTypedRuleContext(NegationContext, i) as NegationContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_simpleSelectorSequence;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSimpleSelectorSequence) {
	 		listener.enterSimpleSelectorSequence(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSimpleSelectorSequence) {
	 		listener.exitSimpleSelectorSequence(this);
		}
	}
}


export class TypeSelectorContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementName(): ElementNameContext {
		return this.getTypedRuleContext(ElementNameContext, 0) as ElementNameContext;
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_typeSelector;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterTypeSelector) {
	 		listener.enterTypeSelector(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitTypeSelector) {
	 		listener.exitTypeSelector(this);
		}
	}
}


export class TypeNamespacePrefixContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Pipe(): TerminalNode {
		return this.getToken(css3Parser.Pipe, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public Multiply(): TerminalNode {
		return this.getToken(css3Parser.Multiply, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_typeNamespacePrefix;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterTypeNamespacePrefix) {
	 		listener.enterTypeNamespacePrefix(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitTypeNamespacePrefix) {
	 		listener.exitTypeNamespacePrefix(this);
		}
	}
}


export class ElementNameContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_elementName;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterElementName) {
	 		listener.enterElementName(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitElementName) {
	 		listener.exitElementName(this);
		}
	}
}


export class UniversalContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Multiply(): TerminalNode {
		return this.getToken(css3Parser.Multiply, 0);
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_universal;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUniversal) {
	 		listener.enterUniversal(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUniversal) {
	 		listener.exitUniversal(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot(): TerminalNode {
		return this.getToken(css3Parser.Dot, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_className;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterClassName) {
	 		listener.enterClassName(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitClassName) {
	 		listener.exitClassName(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(css3Parser.OpenBracket, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(css3Parser.CloseBracket, 0);
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
	public PrefixMatch(): TerminalNode {
		return this.getToken(css3Parser.PrefixMatch, 0);
	}
	public SuffixMatch(): TerminalNode {
		return this.getToken(css3Parser.SuffixMatch, 0);
	}
	public SubstringMatch(): TerminalNode {
		return this.getToken(css3Parser.SubstringMatch, 0);
	}
	public Equal(): TerminalNode {
		return this.getToken(css3Parser.Equal, 0);
	}
	public Includes(): TerminalNode {
		return this.getToken(css3Parser.Includes, 0);
	}
	public DashMatch(): TerminalNode {
		return this.getToken(css3Parser.DashMatch, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_attrib;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterAttrib) {
	 		listener.enterAttrib(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitAttrib) {
	 		listener.exitAttrib(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Colon);
	}
	public Colon(i: number): TerminalNode {
		return this.getToken(css3Parser.Colon, i);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public functionalPseudo(): FunctionalPseudoContext {
		return this.getTypedRuleContext(FunctionalPseudoContext, 0) as FunctionalPseudoContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_pseudo;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterPseudo) {
	 		listener.enterPseudo(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitPseudo) {
	 		listener.exitPseudo(this);
		}
	}
}


export class FunctionalPseudoContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function_(): TerminalNode {
		return this.getToken(css3Parser.Function_, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_functionalPseudo;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFunctionalPseudo) {
	 		listener.enterFunctionalPseudo(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFunctionalPseudo) {
	 		listener.exitFunctionalPseudo(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Plus_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Plus);
	}
	public Plus(i: number): TerminalNode {
		return this.getToken(css3Parser.Plus, i);
	}
	public Minus_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Minus);
	}
	public Minus(i: number): TerminalNode {
		return this.getToken(css3Parser.Minus, i);
	}
	public Dimension_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Dimension);
	}
	public Dimension(i: number): TerminalNode {
		return this.getToken(css3Parser.Dimension, i);
	}
	public UnknownDimension_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.UnknownDimension);
	}
	public UnknownDimension(i: number): TerminalNode {
		return this.getToken(css3Parser.UnknownDimension, i);
	}
	public Number_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Number);
	}
	public Number(i: number): TerminalNode {
		return this.getToken(css3Parser.Number, i);
	}
	public String__list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.String_);
	}
	public String_(i: number): TerminalNode {
		return this.getToken(css3Parser.String_, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_expression;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class NegationContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PseudoNot(): TerminalNode {
		return this.getToken(css3Parser.PseudoNot, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public negationArg(): NegationArgContext {
		return this.getTypedRuleContext(NegationArgContext, 0) as NegationArgContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_negation;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterNegation) {
	 		listener.enterNegation(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitNegation) {
	 		listener.exitNegation(this);
		}
	}
}


export class NegationArgContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSelector(): TypeSelectorContext {
		return this.getTypedRuleContext(TypeSelectorContext, 0) as TypeSelectorContext;
	}
	public universal(): UniversalContext {
		return this.getTypedRuleContext(UniversalContext, 0) as UniversalContext;
	}
	public Hash(): TerminalNode {
		return this.getToken(css3Parser.Hash, 0);
	}
	public className(): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, 0) as ClassNameContext;
	}
	public attrib(): AttribContext {
		return this.getTypedRuleContext(AttribContext, 0) as AttribContext;
	}
	public pseudo(): PseudoContext {
		return this.getTypedRuleContext(PseudoContext, 0) as PseudoContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_negationArg;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterNegationArg) {
	 		listener.enterNegationArg(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitNegationArg) {
	 		listener.exitNegationArg(this);
		}
	}
}


export class Operator_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_operator_;
	}
	public override copyFrom(ctx: Operator_Context): void {
		super.copyFrom(ctx);
	}
}
export class BadOperatorContext extends Operator_Context {
	constructor(parser: css3Parser, ctx: Operator_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Equal(): TerminalNode {
		return this.getToken(css3Parser.Equal, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadOperator) {
	 		listener.enterBadOperator(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadOperator) {
	 		listener.exitBadOperator(this);
		}
	}
}
export class GoodOperatorContext extends Operator_Context {
	constructor(parser: css3Parser, ctx: Operator_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Divide(): TerminalNode {
		return this.getToken(css3Parser.Divide, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(css3Parser.Comma, 0);
	}
	public Space(): TerminalNode {
		return this.getToken(css3Parser.Space, 0);
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGoodOperator) {
	 		listener.enterGoodOperator(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGoodOperator) {
	 		listener.exitGoodOperator(this);
		}
	}
}


export class Property_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_property_;
	}
	public override copyFrom(ctx: Property_Context): void {
		super.copyFrom(ctx);
	}
}
export class BadPropertyContext extends Property_Context {
	constructor(parser: css3Parser, ctx: Property_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Multiply(): TerminalNode {
		return this.getToken(css3Parser.Multiply, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public Underscore(): TerminalNode {
		return this.getToken(css3Parser.Underscore, 0);
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadProperty) {
	 		listener.enterBadProperty(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadProperty) {
	 		listener.exitBadProperty(this);
		}
	}
}
export class GoodPropertyContext extends Property_Context {
	constructor(parser: css3Parser, ctx: Property_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public Variable(): TerminalNode {
		return this.getToken(css3Parser.Variable, 0);
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGoodProperty) {
	 		listener.enterGoodProperty(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGoodProperty) {
	 		listener.exitGoodProperty(this);
		}
	}
}


export class RulesetContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_ruleset;
	}
	public override copyFrom(ctx: RulesetContext): void {
		super.copyFrom(ctx);
	}
}
export class UnknownRulesetContext extends RulesetContext {
	constructor(parser: css3Parser, ctx: RulesetContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownRuleset) {
	 		listener.enterUnknownRuleset(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownRuleset) {
	 		listener.exitUnknownRuleset(this);
		}
	}
}
export class KnownRulesetContext extends RulesetContext {
	constructor(parser: css3Parser, ctx: RulesetContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public selectorGroup(): SelectorGroupContext {
		return this.getTypedRuleContext(SelectorGroupContext, 0) as SelectorGroupContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKnownRuleset) {
	 		listener.enterKnownRuleset(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKnownRuleset) {
	 		listener.exitKnownRuleset(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(css3Parser.SemiColon, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_declarationList;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterDeclarationList) {
	 		listener.enterDeclarationList(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitDeclarationList) {
	 		listener.exitDeclarationList(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_declaration;
	}
	public override copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class UnknownDeclarationContext extends DeclarationContext {
	constructor(parser: css3Parser, ctx: DeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public property_(): Property_Context {
		return this.getTypedRuleContext(Property_Context, 0) as Property_Context;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownDeclaration) {
	 		listener.enterUnknownDeclaration(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownDeclaration) {
	 		listener.exitUnknownDeclaration(this);
		}
	}
}
export class KnownDeclarationContext extends DeclarationContext {
	constructor(parser: css3Parser, ctx: DeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public property_(): Property_Context {
		return this.getTypedRuleContext(Property_Context, 0) as Property_Context;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public prio(): PrioContext {
		return this.getTypedRuleContext(PrioContext, 0) as PrioContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKnownDeclaration) {
	 		listener.enterKnownDeclaration(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKnownDeclaration) {
	 		listener.exitKnownDeclaration(this);
		}
	}
}


export class PrioContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Important(): TerminalNode {
		return this.getToken(css3Parser.Important, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_prio;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterPrio) {
	 		listener.enterPrio(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitPrio) {
	 		listener.exitPrio(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public AtKeyword_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.AtKeyword);
	}
	public AtKeyword(i: number): TerminalNode {
		return this.getToken(css3Parser.AtKeyword, i);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_value;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public operator__list(): Operator_Context[] {
		return this.getTypedRuleContexts(Operator_Context) as Operator_Context[];
	}
	public operator_(i: number): Operator_Context {
		return this.getTypedRuleContext(Operator_Context, i) as Operator_Context;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_expr;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_term;
	}
	public override copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class BadTermContext extends TermContext {
	constructor(parser: css3Parser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dxImageTransform(): DxImageTransformContext {
		return this.getTypedRuleContext(DxImageTransformContext, 0) as DxImageTransformContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBadTerm) {
	 		listener.enterBadTerm(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBadTerm) {
	 		listener.exitBadTerm(this);
		}
	}
}
export class KnownTermContext extends TermContext {
	constructor(parser: css3Parser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public percentage(): PercentageContext {
		return this.getTypedRuleContext(PercentageContext, 0) as PercentageContext;
	}
	public dimension(): DimensionContext {
		return this.getTypedRuleContext(DimensionContext, 0) as DimensionContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public UnicodeRange(): TerminalNode {
		return this.getToken(css3Parser.UnicodeRange, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public hexcolor(): HexcolorContext {
		return this.getTypedRuleContext(HexcolorContext, 0) as HexcolorContext;
	}
	public calc(): CalcContext {
		return this.getTypedRuleContext(CalcContext, 0) as CalcContext;
	}
	public function_(): Function_Context {
		return this.getTypedRuleContext(Function_Context, 0) as Function_Context;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKnownTerm) {
	 		listener.enterKnownTerm(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKnownTerm) {
	 		listener.exitKnownTerm(this);
		}
	}
}
export class UnknownTermContext extends TermContext {
	constructor(parser: css3Parser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unknownDimension(): UnknownDimensionContext {
		return this.getTypedRuleContext(UnknownDimensionContext, 0) as UnknownDimensionContext;
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownTerm) {
	 		listener.enterUnknownTerm(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownTerm) {
	 		listener.exitUnknownTerm(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function_(): TerminalNode {
		return this.getToken(css3Parser.Function_, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_function_;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFunction_) {
	 		listener.enterFunction_(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFunction_) {
	 		listener.exitFunction_(this);
		}
	}
}


export class DxImageTransformContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DxImageTransform(): TerminalNode {
		return this.getToken(css3Parser.DxImageTransform, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_dxImageTransform;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterDxImageTransform) {
	 		listener.enterDxImageTransform(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitDxImageTransform) {
	 		listener.exitDxImageTransform(this);
		}
	}
}


export class HexcolorContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hash(): TerminalNode {
		return this.getToken(css3Parser.Hash, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_hexcolor;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterHexcolor) {
	 		listener.enterHexcolor(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitHexcolor) {
	 		listener.exitHexcolor(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(css3Parser.Number, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(css3Parser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(css3Parser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_number;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
}


export class PercentageContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Percentage(): TerminalNode {
		return this.getToken(css3Parser.Percentage, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(css3Parser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(css3Parser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_percentage;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterPercentage) {
	 		listener.enterPercentage(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitPercentage) {
	 		listener.exitPercentage(this);
		}
	}
}


export class DimensionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dimension(): TerminalNode {
		return this.getToken(css3Parser.Dimension, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(css3Parser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(css3Parser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_dimension;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterDimension) {
	 		listener.enterDimension(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitDimension) {
	 		listener.exitDimension(this);
		}
	}
}


export class UnknownDimensionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UnknownDimension(): TerminalNode {
		return this.getToken(css3Parser.UnknownDimension, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(css3Parser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(css3Parser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_unknownDimension;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownDimension) {
	 		listener.enterUnknownDimension(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownDimension) {
	 		listener.exitUnknownDimension(this);
		}
	}
}


export class Any_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public percentage(): PercentageContext {
		return this.getTypedRuleContext(PercentageContext, 0) as PercentageContext;
	}
	public dimension(): DimensionContext {
		return this.getTypedRuleContext(DimensionContext, 0) as DimensionContext;
	}
	public unknownDimension(): UnknownDimensionContext {
		return this.getTypedRuleContext(UnknownDimensionContext, 0) as UnknownDimensionContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public Hash(): TerminalNode {
		return this.getToken(css3Parser.Hash, 0);
	}
	public UnicodeRange(): TerminalNode {
		return this.getToken(css3Parser.UnicodeRange, 0);
	}
	public Includes(): TerminalNode {
		return this.getToken(css3Parser.Includes, 0);
	}
	public DashMatch(): TerminalNode {
		return this.getToken(css3Parser.DashMatch, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public Function_(): TerminalNode {
		return this.getToken(css3Parser.Function_, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public unused_list(): UnusedContext[] {
		return this.getTypedRuleContexts(UnusedContext) as UnusedContext[];
	}
	public unused(i: number): UnusedContext {
		return this.getTypedRuleContext(UnusedContext, i) as UnusedContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(css3Parser.OpenBracket, 0);
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(css3Parser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_any_;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterAny_) {
	 		listener.enterAny_(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitAny_) {
	 		listener.exitAny_(this);
		}
	}
}


export class AtRuleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_atRule;
	}
	public override copyFrom(ctx: AtRuleContext): void {
		super.copyFrom(ctx);
	}
}
export class UnknownAtRuleContext extends AtRuleContext {
	constructor(parser: css3Parser, ctx: AtRuleContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AtKeyword(): TerminalNode {
		return this.getToken(css3Parser.AtKeyword, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(css3Parser.SemiColon, 0);
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownAtRule) {
	 		listener.enterUnknownAtRule(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownAtRule) {
	 		listener.exitUnknownAtRule(this);
		}
	}
}


export class UnusedContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public AtKeyword(): TerminalNode {
		return this.getToken(css3Parser.AtKeyword, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(css3Parser.SemiColon, 0);
	}
	public Cdo(): TerminalNode {
		return this.getToken(css3Parser.Cdo, 0);
	}
	public Cdc(): TerminalNode {
		return this.getToken(css3Parser.Cdc, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_unused;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnused) {
	 		listener.enterUnused(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnused) {
	 		listener.exitUnused(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public declarationList_list(): DeclarationListContext[] {
		return this.getTypedRuleContexts(DeclarationListContext) as DeclarationListContext[];
	}
	public declarationList(i: number): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, i) as DeclarationListContext;
	}
	public nestedStatement_list(): NestedStatementContext[] {
		return this.getTypedRuleContexts(NestedStatementContext) as NestedStatementContext[];
	}
	public nestedStatement(i: number): NestedStatementContext {
		return this.getTypedRuleContext(NestedStatementContext, i) as NestedStatementContext;
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public AtKeyword_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.AtKeyword);
	}
	public AtKeyword(i: number): TerminalNode {
		return this.getToken(css3Parser.AtKeyword, i);
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(css3Parser.SemiColon, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_block;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class NestedStatementContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ruleset(): RulesetContext {
		return this.getTypedRuleContext(RulesetContext, 0) as RulesetContext;
	}
	public media(): MediaContext {
		return this.getTypedRuleContext(MediaContext, 0) as MediaContext;
	}
	public page(): PageContext {
		return this.getTypedRuleContext(PageContext, 0) as PageContext;
	}
	public fontFaceRule(): FontFaceRuleContext {
		return this.getTypedRuleContext(FontFaceRuleContext, 0) as FontFaceRuleContext;
	}
	public keyframesRule(): KeyframesRuleContext {
		return this.getTypedRuleContext(KeyframesRuleContext, 0) as KeyframesRuleContext;
	}
	public supportsRule(): SupportsRuleContext {
		return this.getTypedRuleContext(SupportsRuleContext, 0) as SupportsRuleContext;
	}
	public viewport(): ViewportContext {
		return this.getTypedRuleContext(ViewportContext, 0) as ViewportContext;
	}
	public counterStyle(): CounterStyleContext {
		return this.getTypedRuleContext(CounterStyleContext, 0) as CounterStyleContext;
	}
	public fontFeatureValuesRule(): FontFeatureValuesRuleContext {
		return this.getTypedRuleContext(FontFeatureValuesRuleContext, 0) as FontFeatureValuesRuleContext;
	}
	public atRule(): AtRuleContext {
		return this.getTypedRuleContext(AtRuleContext, 0) as AtRuleContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_nestedStatement;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterNestedStatement) {
	 		listener.enterNestedStatement(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitNestedStatement) {
	 		listener.exitNestedStatement(this);
		}
	}
}


export class GroupRuleBodyContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public nestedStatement_list(): NestedStatementContext[] {
		return this.getTypedRuleContexts(NestedStatementContext) as NestedStatementContext[];
	}
	public nestedStatement(i: number): NestedStatementContext {
		return this.getTypedRuleContext(NestedStatementContext, i) as NestedStatementContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_groupRuleBody;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGroupRuleBody) {
	 		listener.enterGroupRuleBody(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGroupRuleBody) {
	 		listener.exitGroupRuleBody(this);
		}
	}
}


export class SupportsRuleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Supports(): TerminalNode {
		return this.getToken(css3Parser.Supports, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public supportsCondition(): SupportsConditionContext {
		return this.getTypedRuleContext(SupportsConditionContext, 0) as SupportsConditionContext;
	}
	public groupRuleBody(): GroupRuleBodyContext {
		return this.getTypedRuleContext(GroupRuleBodyContext, 0) as GroupRuleBodyContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsRule;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsRule) {
	 		listener.enterSupportsRule(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsRule) {
	 		listener.exitSupportsRule(this);
		}
	}
}


export class SupportsConditionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public supportsNegation(): SupportsNegationContext {
		return this.getTypedRuleContext(SupportsNegationContext, 0) as SupportsNegationContext;
	}
	public supportsConjunction(): SupportsConjunctionContext {
		return this.getTypedRuleContext(SupportsConjunctionContext, 0) as SupportsConjunctionContext;
	}
	public supportsDisjunction(): SupportsDisjunctionContext {
		return this.getTypedRuleContext(SupportsDisjunctionContext, 0) as SupportsDisjunctionContext;
	}
	public supportsConditionInParens(): SupportsConditionInParensContext {
		return this.getTypedRuleContext(SupportsConditionInParensContext, 0) as SupportsConditionInParensContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsCondition;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsCondition) {
	 		listener.enterSupportsCondition(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsCondition) {
	 		listener.exitSupportsCondition(this);
		}
	}
}


export class SupportsConditionInParensContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public supportsCondition(): SupportsConditionContext {
		return this.getTypedRuleContext(SupportsConditionContext, 0) as SupportsConditionContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
	public supportsDeclarationCondition(): SupportsDeclarationConditionContext {
		return this.getTypedRuleContext(SupportsDeclarationConditionContext, 0) as SupportsDeclarationConditionContext;
	}
	public generalEnclosed(): GeneralEnclosedContext {
		return this.getTypedRuleContext(GeneralEnclosedContext, 0) as GeneralEnclosedContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsConditionInParens;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsConditionInParens) {
	 		listener.enterSupportsConditionInParens(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsConditionInParens) {
	 		listener.exitSupportsConditionInParens(this);
		}
	}
}


export class SupportsNegationContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Not(): TerminalNode {
		return this.getToken(css3Parser.Not, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Space(): TerminalNode {
		return this.getToken(css3Parser.Space, 0);
	}
	public supportsConditionInParens(): SupportsConditionInParensContext {
		return this.getTypedRuleContext(SupportsConditionInParensContext, 0) as SupportsConditionInParensContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsNegation;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsNegation) {
	 		listener.enterSupportsNegation(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsNegation) {
	 		listener.exitSupportsNegation(this);
		}
	}
}


export class SupportsConjunctionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public supportsConditionInParens_list(): SupportsConditionInParensContext[] {
		return this.getTypedRuleContexts(SupportsConditionInParensContext) as SupportsConditionInParensContext[];
	}
	public supportsConditionInParens(i: number): SupportsConditionInParensContext {
		return this.getTypedRuleContext(SupportsConditionInParensContext, i) as SupportsConditionInParensContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Space_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Space);
	}
	public Space(i: number): TerminalNode {
		return this.getToken(css3Parser.Space, i);
	}
	public And_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.And);
	}
	public And(i: number): TerminalNode {
		return this.getToken(css3Parser.And, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsConjunction;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsConjunction) {
	 		listener.enterSupportsConjunction(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsConjunction) {
	 		listener.exitSupportsConjunction(this);
		}
	}
}


export class SupportsDisjunctionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public supportsConditionInParens_list(): SupportsConditionInParensContext[] {
		return this.getTypedRuleContexts(SupportsConditionInParensContext) as SupportsConditionInParensContext[];
	}
	public supportsConditionInParens(i: number): SupportsConditionInParensContext {
		return this.getTypedRuleContext(SupportsConditionInParensContext, i) as SupportsConditionInParensContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Space_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Space);
	}
	public Space(i: number): TerminalNode {
		return this.getToken(css3Parser.Space, i);
	}
	public Or_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Or);
	}
	public Or(i: number): TerminalNode {
		return this.getToken(css3Parser.Or, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsDisjunction;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsDisjunction) {
	 		listener.enterSupportsDisjunction(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsDisjunction) {
	 		listener.exitSupportsDisjunction(this);
		}
	}
}


export class SupportsDeclarationConditionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_supportsDeclarationCondition;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterSupportsDeclarationCondition) {
	 		listener.enterSupportsDeclarationCondition(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitSupportsDeclarationCondition) {
	 		listener.exitSupportsDeclarationCondition(this);
		}
	}
}


export class GeneralEnclosedContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
	public Function_(): TerminalNode {
		return this.getToken(css3Parser.Function_, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public any__list(): Any_Context[] {
		return this.getTypedRuleContexts(Any_Context) as Any_Context[];
	}
	public any_(i: number): Any_Context {
		return this.getTypedRuleContext(Any_Context, i) as Any_Context;
	}
	public unused_list(): UnusedContext[] {
		return this.getTypedRuleContexts(UnusedContext) as UnusedContext[];
	}
	public unused(i: number): UnusedContext {
		return this.getTypedRuleContext(UnusedContext, i) as UnusedContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_generalEnclosed;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterGeneralEnclosed) {
	 		listener.enterGeneralEnclosed(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitGeneralEnclosed) {
	 		listener.exitGeneralEnclosed(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Url_(): TerminalNode {
		return this.getToken(css3Parser.Url_, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
	public Url(): TerminalNode {
		return this.getToken(css3Parser.Url, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_url;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUrl) {
	 		listener.enterUrl(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUrl) {
	 		listener.exitUrl(this);
		}
	}
}


export class Var_Context extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(css3Parser.Var, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Variable(): TerminalNode {
		return this.getToken(css3Parser.Variable, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_var_;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterVar_) {
	 		listener.enterVar_(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitVar_) {
	 		listener.exitVar_(this);
		}
	}
}


export class CalcContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Calc(): TerminalNode {
		return this.getToken(css3Parser.Calc, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public calcSum(): CalcSumContext {
		return this.getTypedRuleContext(CalcSumContext, 0) as CalcSumContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_calc;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCalc) {
	 		listener.enterCalc(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCalc) {
	 		listener.exitCalc(this);
		}
	}
}


export class CalcSumContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public calcProduct_list(): CalcProductContext[] {
		return this.getTypedRuleContexts(CalcProductContext) as CalcProductContext[];
	}
	public calcProduct(i: number): CalcProductContext {
		return this.getTypedRuleContext(CalcProductContext, i) as CalcProductContext;
	}
	public Space_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Space);
	}
	public Space(i: number): TerminalNode {
		return this.getToken(css3Parser.Space, i);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Plus_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Plus);
	}
	public Plus(i: number): TerminalNode {
		return this.getToken(css3Parser.Plus, i);
	}
	public Minus_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Minus);
	}
	public Minus(i: number): TerminalNode {
		return this.getToken(css3Parser.Minus, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_calcSum;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCalcSum) {
	 		listener.enterCalcSum(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCalcSum) {
	 		listener.exitCalcSum(this);
		}
	}
}


export class CalcProductContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public calcValue_list(): CalcValueContext[] {
		return this.getTypedRuleContexts(CalcValueContext) as CalcValueContext[];
	}
	public calcValue(i: number): CalcValueContext {
		return this.getTypedRuleContext(CalcValueContext, i) as CalcValueContext;
	}
	public Multiply_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Multiply);
	}
	public Multiply(i: number): TerminalNode {
		return this.getToken(css3Parser.Multiply, i);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Divide_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Divide);
	}
	public Divide(i: number): TerminalNode {
		return this.getToken(css3Parser.Divide, i);
	}
	public number__list(): NumberContext[] {
		return this.getTypedRuleContexts(NumberContext) as NumberContext[];
	}
	public number_(i: number): NumberContext {
		return this.getTypedRuleContext(NumberContext, i) as NumberContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_calcProduct;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCalcProduct) {
	 		listener.enterCalcProduct(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCalcProduct) {
	 		listener.exitCalcProduct(this);
		}
	}
}


export class CalcValueContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public dimension(): DimensionContext {
		return this.getTypedRuleContext(DimensionContext, 0) as DimensionContext;
	}
	public unknownDimension(): UnknownDimensionContext {
		return this.getTypedRuleContext(UnknownDimensionContext, 0) as UnknownDimensionContext;
	}
	public percentage(): PercentageContext {
		return this.getTypedRuleContext(PercentageContext, 0) as PercentageContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(css3Parser.OpenParen, 0);
	}
	public calcSum(): CalcSumContext {
		return this.getTypedRuleContext(CalcSumContext, 0) as CalcSumContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(css3Parser.CloseParen, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_calcValue;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCalcValue) {
	 		listener.enterCalcValue(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCalcValue) {
	 		listener.exitCalcValue(this);
		}
	}
}


export class FontFaceRuleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FontFace(): TerminalNode {
		return this.getToken(css3Parser.FontFace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public fontFaceDeclaration_list(): FontFaceDeclarationContext[] {
		return this.getTypedRuleContexts(FontFaceDeclarationContext) as FontFaceDeclarationContext[];
	}
	public fontFaceDeclaration(i: number): FontFaceDeclarationContext {
		return this.getTypedRuleContext(FontFaceDeclarationContext, i) as FontFaceDeclarationContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(css3Parser.SemiColon, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_fontFaceRule;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFontFaceRule) {
	 		listener.enterFontFaceRule(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFontFaceRule) {
	 		listener.exitFontFaceRule(this);
		}
	}
}


export class FontFaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_fontFaceDeclaration;
	}
	public override copyFrom(ctx: FontFaceDeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class KnownFontFaceDeclarationContext extends FontFaceDeclarationContext {
	constructor(parser: css3Parser, ctx: FontFaceDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public property_(): Property_Context {
		return this.getTypedRuleContext(Property_Context, 0) as Property_Context;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKnownFontFaceDeclaration) {
	 		listener.enterKnownFontFaceDeclaration(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKnownFontFaceDeclaration) {
	 		listener.exitKnownFontFaceDeclaration(this);
		}
	}
}
export class UnknownFontFaceDeclarationContext extends FontFaceDeclarationContext {
	constructor(parser: css3Parser, ctx: FontFaceDeclarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public property_(): Property_Context {
		return this.getTypedRuleContext(Property_Context, 0) as Property_Context;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public ws(): WsContext {
		return this.getTypedRuleContext(WsContext, 0) as WsContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterUnknownFontFaceDeclaration) {
	 		listener.enterUnknownFontFaceDeclaration(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitUnknownFontFaceDeclaration) {
	 		listener.exitUnknownFontFaceDeclaration(this);
		}
	}
}


export class KeyframesRuleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Keyframes(): TerminalNode {
		return this.getToken(css3Parser.Keyframes, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Space(): TerminalNode {
		return this.getToken(css3Parser.Space, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public keyframeBlock_list(): KeyframeBlockContext[] {
		return this.getTypedRuleContexts(KeyframeBlockContext) as KeyframeBlockContext[];
	}
	public keyframeBlock(i: number): KeyframeBlockContext {
		return this.getTypedRuleContext(KeyframeBlockContext, i) as KeyframeBlockContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_keyframesRule;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKeyframesRule) {
	 		listener.enterKeyframesRule(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKeyframesRule) {
	 		listener.exitKeyframesRule(this);
		}
	}
}


export class KeyframeBlockContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyframeSelector(): KeyframeSelectorContext {
		return this.getTypedRuleContext(KeyframeSelectorContext, 0) as KeyframeSelectorContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_keyframeBlock;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKeyframeBlock) {
	 		listener.enterKeyframeBlock(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKeyframeBlock) {
	 		listener.exitKeyframeBlock(this);
		}
	}
}


export class KeyframeSelectorContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public From_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.From);
	}
	public From(i: number): TerminalNode {
		return this.getToken(css3Parser.From, i);
	}
	public To_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.To);
	}
	public To(i: number): TerminalNode {
		return this.getToken(css3Parser.To, i);
	}
	public Percentage_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Percentage);
	}
	public Percentage(i: number): TerminalNode {
		return this.getToken(css3Parser.Percentage, i);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(css3Parser.Comma, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_keyframeSelector;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterKeyframeSelector) {
	 		listener.enterKeyframeSelector(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitKeyframeSelector) {
	 		listener.exitKeyframeSelector(this);
		}
	}
}


export class ViewportContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Viewport(): TerminalNode {
		return this.getToken(css3Parser.Viewport, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_viewport;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterViewport) {
	 		listener.enterViewport(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitViewport) {
	 		listener.exitViewport(this);
		}
	}
}


export class CounterStyleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CounterStyle(): TerminalNode {
		return this.getToken(css3Parser.CounterStyle, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_counterStyle;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterCounterStyle) {
	 		listener.enterCounterStyle(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitCounterStyle) {
	 		listener.exitCounterStyle(this);
		}
	}
}


export class FontFeatureValuesRuleContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FontFeatureValues(): TerminalNode {
		return this.getToken(css3Parser.FontFeatureValues, 0);
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public fontFamilyNameList(): FontFamilyNameListContext {
		return this.getTypedRuleContext(FontFamilyNameListContext, 0) as FontFamilyNameListContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public featureValueBlock_list(): FeatureValueBlockContext[] {
		return this.getTypedRuleContexts(FeatureValueBlockContext) as FeatureValueBlockContext[];
	}
	public featureValueBlock(i: number): FeatureValueBlockContext {
		return this.getTypedRuleContext(FeatureValueBlockContext, i) as FeatureValueBlockContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_fontFeatureValuesRule;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFontFeatureValuesRule) {
	 		listener.enterFontFeatureValuesRule(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFontFeatureValuesRule) {
	 		listener.exitFontFeatureValuesRule(this);
		}
	}
}


export class FontFamilyNameListContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fontFamilyName_list(): FontFamilyNameContext[] {
		return this.getTypedRuleContexts(FontFamilyNameContext) as FontFamilyNameContext[];
	}
	public fontFamilyName(i: number): FontFamilyNameContext {
		return this.getTypedRuleContext(FontFamilyNameContext, i) as FontFamilyNameContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(css3Parser.Comma, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_fontFamilyNameList;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFontFamilyNameList) {
	 		listener.enterFontFamilyNameList(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFontFamilyNameList) {
	 		listener.exitFontFamilyNameList(this);
		}
	}
}


export class FontFamilyNameContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public String_(): TerminalNode {
		return this.getToken(css3Parser.String_, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_fontFamilyName;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFontFamilyName) {
	 		listener.enterFontFamilyName(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFontFamilyName) {
	 		listener.exitFontFamilyName(this);
		}
	}
}


export class FeatureValueBlockContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public featureType(): FeatureTypeContext {
		return this.getTypedRuleContext(FeatureTypeContext, 0) as FeatureTypeContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(css3Parser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(css3Parser.CloseBrace, 0);
	}
	public featureValueDefinition_list(): FeatureValueDefinitionContext[] {
		return this.getTypedRuleContexts(FeatureValueDefinitionContext) as FeatureValueDefinitionContext[];
	}
	public featureValueDefinition(i: number): FeatureValueDefinitionContext {
		return this.getTypedRuleContext(FeatureValueDefinitionContext, i) as FeatureValueDefinitionContext;
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(css3Parser.SemiColon, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_featureValueBlock;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFeatureValueBlock) {
	 		listener.enterFeatureValueBlock(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFeatureValueBlock) {
	 		listener.exitFeatureValueBlock(this);
		}
	}
}


export class FeatureTypeContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtKeyword(): TerminalNode {
		return this.getToken(css3Parser.AtKeyword, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_featureType;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFeatureType) {
	 		listener.enterFeatureType(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFeatureType) {
	 		listener.exitFeatureType(this);
		}
	}
}


export class FeatureValueDefinitionContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public ws_list(): WsContext[] {
		return this.getTypedRuleContexts(WsContext) as WsContext[];
	}
	public ws(i: number): WsContext {
		return this.getTypedRuleContext(WsContext, i) as WsContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(css3Parser.Colon, 0);
	}
	public number__list(): NumberContext[] {
		return this.getTypedRuleContexts(NumberContext) as NumberContext[];
	}
	public number_(i: number): NumberContext {
		return this.getTypedRuleContext(NumberContext, i) as NumberContext;
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_featureValueDefinition;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterFeatureValueDefinition) {
	 		listener.enterFeatureValueDefinition(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitFeatureValueDefinition) {
	 		listener.exitFeatureValueDefinition(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ident(): TerminalNode {
		return this.getToken(css3Parser.Ident, 0);
	}
	public MediaOnly(): TerminalNode {
		return this.getToken(css3Parser.MediaOnly, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(css3Parser.Not, 0);
	}
	public And(): TerminalNode {
		return this.getToken(css3Parser.And, 0);
	}
	public Or(): TerminalNode {
		return this.getToken(css3Parser.Or, 0);
	}
	public From(): TerminalNode {
		return this.getToken(css3Parser.From, 0);
	}
	public To(): TerminalNode {
		return this.getToken(css3Parser.To, 0);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_ident;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterIdent) {
	 		listener.enterIdent(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitIdent) {
	 		listener.exitIdent(this);
		}
	}
}


export class WsContext extends ParserRuleContext {
	constructor(parser?: css3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comment_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Comment);
	}
	public Comment(i: number): TerminalNode {
		return this.getToken(css3Parser.Comment, i);
	}
	public Space_list(): TerminalNode[] {
	    	return this.getTokens(css3Parser.Space);
	}
	public Space(i: number): TerminalNode {
		return this.getToken(css3Parser.Space, i);
	}
    public get ruleIndex(): number {
    	return css3Parser.RULE_ws;
	}
	public enterRule(listener: css3ParserListener): void {
	    if(listener.enterWs) {
	 		listener.enterWs(this);
		}
	}
	public exitRule(listener: css3ParserListener): void {
	    if(listener.exitWs) {
	 		listener.exitWs(this);
		}
	}
}
