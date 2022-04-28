// Generated from RebbVal.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import RebbValListener from './RebbValListener.js';
import RebbValVisitor from './RebbValVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003Kb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u0016\n\u0002\f\u0002\u000e\u0002\u0019\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001e\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0003\u0003\u0005\u0003",
    "%\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "U\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "[\n\u0006\f\u0006\u000e\u0006^\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0002\u0003\u0002\u0007\u0002\u0004\u0006\b\n\u0002\t\u0003\u0002",
    "\',\u0004\u0002/ACH\u0004\u0002??BB\u0003\u0002-.\u0003\u0002\u0014",
    "\u0015\u0004\u0002\u0006\u0006\u0017\u0018\u0004\u0002\u0007\u0007\u0017",
    "\u0018\u0002u\u0002\f\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002",
    "\u0002\u0006&\u0003\u0002\u0002\u0002\bT\u0003\u0002\u0002\u0002\nV",
    "\u0003\u0002\u0002\u0002\f\r\b\u0002\u0001\u0002\r\u000e\u0005\u0004",
    "\u0003\u0002\u000e\u0017\u0003\u0002\u0002\u0002\u000f\u0010\f\u0005",
    "\u0002\u0002\u0010\u0011\u0007\u0003\u0002\u0002\u0011\u0016\u0005\u0004",
    "\u0003\u0002\u0012\u0013\f\u0004\u0002\u0002\u0013\u0014\u0007\u0004",
    "\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u000f\u0003\u0002",
    "\u0002\u0002\u0015\u0012\u0003\u0002\u0002\u0002\u0016\u0019\u0003\u0002",
    "\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002",
    "\u0002\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002",
    "\u0002\u0002\u001a%\u0005\u0006\u0004\u0002\u001b\u001d\u0007\u0005",
    "\u0002\u0002\u001c\u001e\u0007\u0006\u0002\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f!\u0005\u0006\u0004\u0002 \"\u0007\u0007\u0002\u0002",
    "! \u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"%\u0003\u0002",
    "\u0002\u0002#%\u0007\b\u0002\u0002$\u001a\u0003\u0002\u0002\u0002$\u001b",
    "\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0005\u0003\u0002",
    "\u0002\u0002&\'\u0005\b\u0005\u0002\'\u0007\u0003\u0002\u0002\u0002",
    "()\t\u0002\u0002\u0002)U\u0005\b\u0005\u0002*+\u0007\t\u0002\u0002+",
    ",\u0005\b\u0005\u0002,-\u0007\u0003\u0002\u0002-.\u0005\b\u0005\u0002",
    ".U\u0003\u0002\u0002\u0002/0\u0007\n\u0002\u00020U\u0005\b\u0005\u0002",
    "12\u0007\u000b\u0002\u00022U\u0005\b\u0005\u000234\u0007\u0005\u0002",
    "\u00024U\u0007\f\u0002\u000256\u0007\r\u0002\u000267\u0007\u000e\u0002",
    "\u00027U\u0007\u001d\u0002\u000289\u0007\u000f\u0002\u00029U\t\u0003",
    "\u0002\u0002:;\u0007\u000f\u0002\u0002;U\u0007\u0010\u0002\u0002<=\u0007",
    "\u000f\u0002\u0002=>\u0007\u0011\u0002\u0002>U\t\u0004\u0002\u0002?",
    "@\u0007\u000f\u0002\u0002@U\u0007I\u0002\u0002AB\u0007\u0012\u0002\u0002",
    "BU\u0007\u001b\u0002\u0002CD\t\u0005\u0002\u0002DE\u0007\u0013\u0002",
    "\u0002EU\u0005\b\u0005\u0002FG\t\u0006\u0002\u0002GH\u0007\u0016\u0002",
    "\u0002HU\u0005\b\u0005\u0002IJ\t\u0007\u0002\u0002JK\u0005\b\u0005\u0002",
    "KL\u0007\u0019\u0002\u0002LM\u0005\b\u0005\u0002MN\t\b\u0002\u0002N",
    "U\u0003\u0002\u0002\u0002OU\u0005\n\u0006\u0002PU\u0007\u001c\u0002",
    "\u0002QU\u0007\u001d\u0002\u0002RU\u0007\u001e\u0002\u0002SU\u0007\u001f",
    "\u0002\u0002T(\u0003\u0002\u0002\u0002T*\u0003\u0002\u0002\u0002T/\u0003",
    "\u0002\u0002\u0002T1\u0003\u0002\u0002\u0002T3\u0003\u0002\u0002\u0002",
    "T5\u0003\u0002\u0002\u0002T8\u0003\u0002\u0002\u0002T:\u0003\u0002\u0002",
    "\u0002T<\u0003\u0002\u0002\u0002T?\u0003\u0002\u0002\u0002TA\u0003\u0002",
    "\u0002\u0002TC\u0003\u0002\u0002\u0002TF\u0003\u0002\u0002\u0002TI\u0003",
    "\u0002\u0002\u0002TO\u0003\u0002\u0002\u0002TP\u0003\u0002\u0002\u0002",
    "TQ\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002",
    "\u0002U\t\u0003\u0002\u0002\u0002VW\u0007\u0018\u0002\u0002W\\\u0007",
    "\u001d\u0002\u0002XY\u0007\u001a\u0002\u0002Y[\u0007\u001d\u0002\u0002",
    "ZX\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002\u0002^\\",
    "\u0003\u0002\u0002\u0002_`\u0007\u0017\u0002\u0002`\u000b\u0003\u0002",
    "\u0002\u0002\t\u0015\u0017\u001d!$T\\"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RebbValParser extends antlr4.Parser {

    static grammarFileName = "RebbVal.g4";
    static literalNames = [ null, "'and'", "'or'", "'not'", "'('", "')'", 
                            "'-'", "'between'", "'in'", "'contains'", "'empty'", 
                            "'max'", "'length'", "'is'", "'unique'", "'hex'", 
                            "'match'", "'than'", "'starts'", "'ends'", "'with'", 
                            "']'", "'['", "'..'", "','", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                            "'older'", "'younger'", "'true'", "'false'", 
                            "'leapyear'", "'leapday'", "'domain'", "'email'", 
                            "'ipv4'", "'ipv6'", "'private_ip'", "'url'", 
                            "'MAC'", "'IMEI'", "'IMEISV'", "'ISBN'", "'percentage'", 
                            "'base64'", "'number'", "'int'", "'float'", 
                            "'color'", "'phone'", "'mobile'", "'UUID'", 
                            "'gbcode'", "'ID'", "'passport'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "RegularExpressionLiteral", "StringLiteral", 
                             "NumbericLiteral", "DateLiteral", "TimeLiteral", 
                             "DIGITS", "YEAR", "MONTH", "DAY", "HOUR", "MINUTE", 
                             "SECOND", "EQUAL", "NEQUAL", "LT", "LTE", "GT", 
                             "GTE", "OLDER", "YOUNGER", "TRUE", "FALSE", 
                             "LEAPYEAR", "LEAPDAY", "DOMAIN", "EMAIL", "IPV4", 
                             "IPV6", "PRIVATEIP", "URL", "MAC", "IMEI", 
                             "IMEISV", "ISBN", "PERCENTAGE", "BASE64", "NUMBER", 
                             "INT", "FLOAT", "COLOR", "PHONE", "MOBILE", 
                             "UUID", "GBCODE", "ID", "PASSPORT", "CustomFunction", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "unaryTests", "unaryTest", "positiveUnaryTest", 
                         "expression", "arrayLiteral" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RebbValParser.ruleNames;
        this.literalNames = RebbValParser.literalNames;
        this.symbolicNames = RebbValParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.unaryTests_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    unaryTests_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	unaryTests(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new UnaryTestsContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, RebbValParser.RULE_unaryTests, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new SingleTestContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 11;
	        this.unaryTest();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 19;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConjunctionContext(this, new UnaryTestsContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RebbValParser.RULE_unaryTests);
	                    this.state = 13;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 14;
	                    this.match(RebbValParser.T__0);
	                    this.state = 15;
	                    this.unaryTest();
	                    break;

	                case 2:
	                    localctx = new DisjunctionContext(this, new UnaryTestsContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RebbValParser.RULE_unaryTests);
	                    this.state = 16;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 17;
	                    this.match(RebbValParser.T__1);
	                    this.state = 18;
	                    this.unaryTest();
	                    break;

	                } 
	            }
	            this.state = 23;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unaryTest() {
	    let localctx = new UnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RebbValParser.RULE_unaryTest);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NormalUnaryTestContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.positiveUnaryTest();
	            break;

	        case 2:
	            localctx = new NegationUnaryTestContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.match(RebbValParser.T__2);
	            this.state = 27;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 26;
	                this.match(RebbValParser.T__3);

	            }
	            this.state = 29;
	            this.positiveUnaryTest();
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 30;
	                this.match(RebbValParser.T__4);

	            }
	            break;

	        case 3:
	            localctx = new IgnoreUnaryTestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.match(RebbValParser.T__5);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	positiveUnaryTest() {
	    let localctx = new PositiveUnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RebbValParser.RULE_positiveUnaryTest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RebbValParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CompareContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (RebbValParser.EQUAL - 37)) | (1 << (RebbValParser.NEQUAL - 37)) | (1 << (RebbValParser.LT - 37)) | (1 << (RebbValParser.LTE - 37)) | (1 << (RebbValParser.GT - 37)) | (1 << (RebbValParser.GTE - 37)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 39;
	            this.expression();
	            break;

	        case 2:
	            localctx = new BetweenContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(RebbValParser.T__6);
	            this.state = 41;
	            this.expression();
	            this.state = 42;
	            this.match(RebbValParser.T__0);
	            this.state = 43;
	            this.expression();
	            break;

	        case 3:
	            localctx = new InContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.match(RebbValParser.T__7);
	            this.state = 46;
	            this.expression();
	            break;

	        case 4:
	            localctx = new ContainsContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.match(RebbValParser.T__8);
	            this.state = 48;
	            this.expression();
	            break;

	        case 5:
	            localctx = new NotEmptyContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.match(RebbValParser.T__2);
	            this.state = 50;
	            this.match(RebbValParser.T__9);
	            break;

	        case 6:
	            localctx = new MaxLengthContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.match(RebbValParser.T__10);
	            this.state = 52;
	            this.match(RebbValParser.T__11);
	            this.state = 53;
	            this.match(RebbValParser.NumbericLiteral);
	            break;

	        case 7:
	            localctx = new IsContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 54;
	            this.match(RebbValParser.T__12);
	            this.state = 55;
	            localctx.type = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (RebbValParser.TRUE - 45)) | (1 << (RebbValParser.FALSE - 45)) | (1 << (RebbValParser.LEAPYEAR - 45)) | (1 << (RebbValParser.LEAPDAY - 45)) | (1 << (RebbValParser.DOMAIN - 45)) | (1 << (RebbValParser.EMAIL - 45)) | (1 << (RebbValParser.IPV4 - 45)) | (1 << (RebbValParser.IPV6 - 45)) | (1 << (RebbValParser.PRIVATEIP - 45)) | (1 << (RebbValParser.URL - 45)) | (1 << (RebbValParser.MAC - 45)) | (1 << (RebbValParser.IMEI - 45)) | (1 << (RebbValParser.IMEISV - 45)) | (1 << (RebbValParser.ISBN - 45)) | (1 << (RebbValParser.PERCENTAGE - 45)) | (1 << (RebbValParser.BASE64 - 45)) | (1 << (RebbValParser.NUMBER - 45)) | (1 << (RebbValParser.INT - 45)) | (1 << (RebbValParser.FLOAT - 45)) | (1 << (RebbValParser.PHONE - 45)) | (1 << (RebbValParser.MOBILE - 45)) | (1 << (RebbValParser.UUID - 45)) | (1 << (RebbValParser.GBCODE - 45)) | (1 << (RebbValParser.ID - 45)) | (1 << (RebbValParser.PASSPORT - 45)))) !== 0))) {
	                localctx.type = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 8:
	            localctx = new ArrayIsUniqueContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 56;
	            this.match(RebbValParser.T__12);
	            this.state = 57;
	            this.match(RebbValParser.T__13);
	            break;

	        case 9:
	            localctx = new IsHexContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 58;
	            this.match(RebbValParser.T__12);
	            this.state = 59;
	            this.match(RebbValParser.T__14);
	            this.state = 60;
	            localctx.type = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===RebbValParser.NUMBER || _la===RebbValParser.COLOR)) {
	                localctx.type = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 10:
	            localctx = new IsCustomContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 61;
	            this.match(RebbValParser.T__12);
	            this.state = 62;
	            localctx.type = this.match(RebbValParser.CustomFunction);
	            break;

	        case 11:
	            localctx = new MatchContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 63;
	            this.match(RebbValParser.T__15);
	            this.state = 64;
	            localctx.regex = this.match(RebbValParser.RegularExpressionLiteral);
	            break;

	        case 12:
	            localctx = new AgeCompareContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 65;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===RebbValParser.OLDER || _la===RebbValParser.YOUNGER)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 66;
	            this.match(RebbValParser.T__16);
	            this.state = 67;
	            this.expression();
	            break;

	        case 13:
	            localctx = new StringPositionContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 68;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===RebbValParser.T__17 || _la===RebbValParser.T__18)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 69;
	            this.match(RebbValParser.T__19);
	            this.state = 70;
	            this.expression();
	            break;

	        case 14:
	            localctx = new IntervalContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 71;
	            localctx.start = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RebbValParser.T__3) | (1 << RebbValParser.T__20) | (1 << RebbValParser.T__21))) !== 0))) {
	                localctx.start = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 72;
	            this.expression();
	            this.state = 73;
	            this.match(RebbValParser.T__22);
	            this.state = 74;
	            this.expression();
	            this.state = 75;
	            localctx.end = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RebbValParser.T__4) | (1 << RebbValParser.T__20) | (1 << RebbValParser.T__21))) !== 0))) {
	                localctx.end = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 15:
	            localctx = new ArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 77;
	            this.arrayLiteral();
	            break;

	        case 16:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 78;
	            this.match(RebbValParser.StringLiteral);
	            break;

	        case 17:
	            localctx = new NumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 79;
	            this.match(RebbValParser.NumbericLiteral);
	            break;

	        case 18:
	            localctx = new DateContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 80;
	            this.match(RebbValParser.DateLiteral);
	            break;

	        case 19:
	            localctx = new TimeContext(this, localctx);
	            this.enterOuterAlt(localctx, 19);
	            this.state = 81;
	            this.match(RebbValParser.TimeLiteral);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RebbValParser.RULE_arrayLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(RebbValParser.T__21);
	        this.state = 85;
	        this.match(RebbValParser.NumbericLiteral);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RebbValParser.T__23) {
	            this.state = 86;
	            this.match(RebbValParser.T__23);
	            this.state = 87;
	            this.match(RebbValParser.NumbericLiteral);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this.match(RebbValParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RebbValParser.EOF = antlr4.Token.EOF;
RebbValParser.T__0 = 1;
RebbValParser.T__1 = 2;
RebbValParser.T__2 = 3;
RebbValParser.T__3 = 4;
RebbValParser.T__4 = 5;
RebbValParser.T__5 = 6;
RebbValParser.T__6 = 7;
RebbValParser.T__7 = 8;
RebbValParser.T__8 = 9;
RebbValParser.T__9 = 10;
RebbValParser.T__10 = 11;
RebbValParser.T__11 = 12;
RebbValParser.T__12 = 13;
RebbValParser.T__13 = 14;
RebbValParser.T__14 = 15;
RebbValParser.T__15 = 16;
RebbValParser.T__16 = 17;
RebbValParser.T__17 = 18;
RebbValParser.T__18 = 19;
RebbValParser.T__19 = 20;
RebbValParser.T__20 = 21;
RebbValParser.T__21 = 22;
RebbValParser.T__22 = 23;
RebbValParser.T__23 = 24;
RebbValParser.RegularExpressionLiteral = 25;
RebbValParser.StringLiteral = 26;
RebbValParser.NumbericLiteral = 27;
RebbValParser.DateLiteral = 28;
RebbValParser.TimeLiteral = 29;
RebbValParser.DIGITS = 30;
RebbValParser.YEAR = 31;
RebbValParser.MONTH = 32;
RebbValParser.DAY = 33;
RebbValParser.HOUR = 34;
RebbValParser.MINUTE = 35;
RebbValParser.SECOND = 36;
RebbValParser.EQUAL = 37;
RebbValParser.NEQUAL = 38;
RebbValParser.LT = 39;
RebbValParser.LTE = 40;
RebbValParser.GT = 41;
RebbValParser.GTE = 42;
RebbValParser.OLDER = 43;
RebbValParser.YOUNGER = 44;
RebbValParser.TRUE = 45;
RebbValParser.FALSE = 46;
RebbValParser.LEAPYEAR = 47;
RebbValParser.LEAPDAY = 48;
RebbValParser.DOMAIN = 49;
RebbValParser.EMAIL = 50;
RebbValParser.IPV4 = 51;
RebbValParser.IPV6 = 52;
RebbValParser.PRIVATEIP = 53;
RebbValParser.URL = 54;
RebbValParser.MAC = 55;
RebbValParser.IMEI = 56;
RebbValParser.IMEISV = 57;
RebbValParser.ISBN = 58;
RebbValParser.PERCENTAGE = 59;
RebbValParser.BASE64 = 60;
RebbValParser.NUMBER = 61;
RebbValParser.INT = 62;
RebbValParser.FLOAT = 63;
RebbValParser.COLOR = 64;
RebbValParser.PHONE = 65;
RebbValParser.MOBILE = 66;
RebbValParser.UUID = 67;
RebbValParser.GBCODE = 68;
RebbValParser.ID = 69;
RebbValParser.PASSPORT = 70;
RebbValParser.CustomFunction = 71;
RebbValParser.NEWLINE = 72;
RebbValParser.WS = 73;

RebbValParser.RULE_unaryTests = 0;
RebbValParser.RULE_unaryTest = 1;
RebbValParser.RULE_positiveUnaryTest = 2;
RebbValParser.RULE_expression = 3;
RebbValParser.RULE_arrayLiteral = 4;

class UnaryTestsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RebbValParser.RULE_unaryTests;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DisjunctionContext extends UnaryTestsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unaryTests() {
	    return this.getTypedRuleContext(UnaryTestsContext,0);
	};

	unaryTest() {
	    return this.getTypedRuleContext(UnaryTestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.DisjunctionContext = DisjunctionContext;

class ConjunctionContext extends UnaryTestsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unaryTests() {
	    return this.getTypedRuleContext(UnaryTestsContext,0);
	};

	unaryTest() {
	    return this.getTypedRuleContext(UnaryTestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.ConjunctionContext = ConjunctionContext;

class SingleTestContext extends UnaryTestsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unaryTest() {
	    return this.getTypedRuleContext(UnaryTestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterSingleTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitSingleTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitSingleTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.SingleTestContext = SingleTestContext;

class UnaryTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RebbValParser.RULE_unaryTest;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IgnoreUnaryTestContext extends UnaryTestContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterIgnoreUnaryTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitIgnoreUnaryTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitIgnoreUnaryTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.IgnoreUnaryTestContext = IgnoreUnaryTestContext;

class NormalUnaryTestContext extends UnaryTestContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	positiveUnaryTest() {
	    return this.getTypedRuleContext(PositiveUnaryTestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterNormalUnaryTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitNormalUnaryTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitNormalUnaryTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.NormalUnaryTestContext = NormalUnaryTestContext;

class NegationUnaryTestContext extends UnaryTestContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	positiveUnaryTest() {
	    return this.getTypedRuleContext(PositiveUnaryTestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterNegationUnaryTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitNegationUnaryTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitNegationUnaryTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.NegationUnaryTestContext = NegationUnaryTestContext;

class PositiveUnaryTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RebbValParser.RULE_positiveUnaryTest;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterPositiveUnaryTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitPositiveUnaryTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitPositiveUnaryTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RebbValParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DateContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DateLiteral() {
	    return this.getToken(RebbValParser.DateLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitDate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitDate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.DateContext = DateContext;

class AgeCompareContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OLDER() {
	    return this.getToken(RebbValParser.OLDER, 0);
	};

	YOUNGER() {
	    return this.getToken(RebbValParser.YOUNGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterAgeCompare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitAgeCompare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitAgeCompare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.AgeCompareContext = AgeCompareContext;

class StringContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	StringLiteral() {
	    return this.getToken(RebbValParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.StringContext = StringContext;

class InContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterIn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitIn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitIn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.InContext = InContext;

class ArrayIsUniqueContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterArrayIsUnique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitArrayIsUnique(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitArrayIsUnique(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.ArrayIsUniqueContext = ArrayIsUniqueContext;

class IsCustomContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.type = null; // Token;
        super.copyFrom(ctx);
    }

	CustomFunction() {
	    return this.getToken(RebbValParser.CustomFunction, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterIsCustom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitIsCustom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitIsCustom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.IsCustomContext = IsCustomContext;

class BetweenContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterBetween(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitBetween(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitBetween(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.BetweenContext = BetweenContext;

class IsContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.type = null; // Token;
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(RebbValParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(RebbValParser.FALSE, 0);
	};

	LEAPYEAR() {
	    return this.getToken(RebbValParser.LEAPYEAR, 0);
	};

	LEAPDAY() {
	    return this.getToken(RebbValParser.LEAPDAY, 0);
	};

	DOMAIN() {
	    return this.getToken(RebbValParser.DOMAIN, 0);
	};

	EMAIL() {
	    return this.getToken(RebbValParser.EMAIL, 0);
	};

	IPV4() {
	    return this.getToken(RebbValParser.IPV4, 0);
	};

	IPV6() {
	    return this.getToken(RebbValParser.IPV6, 0);
	};

	PRIVATEIP() {
	    return this.getToken(RebbValParser.PRIVATEIP, 0);
	};

	URL() {
	    return this.getToken(RebbValParser.URL, 0);
	};

	MAC() {
	    return this.getToken(RebbValParser.MAC, 0);
	};

	IMEI() {
	    return this.getToken(RebbValParser.IMEI, 0);
	};

	IMEISV() {
	    return this.getToken(RebbValParser.IMEISV, 0);
	};

	ISBN() {
	    return this.getToken(RebbValParser.ISBN, 0);
	};

	PERCENTAGE() {
	    return this.getToken(RebbValParser.PERCENTAGE, 0);
	};

	BASE64() {
	    return this.getToken(RebbValParser.BASE64, 0);
	};

	NUMBER() {
	    return this.getToken(RebbValParser.NUMBER, 0);
	};

	INT() {
	    return this.getToken(RebbValParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(RebbValParser.FLOAT, 0);
	};

	PHONE() {
	    return this.getToken(RebbValParser.PHONE, 0);
	};

	MOBILE() {
	    return this.getToken(RebbValParser.MOBILE, 0);
	};

	UUID() {
	    return this.getToken(RebbValParser.UUID, 0);
	};

	GBCODE() {
	    return this.getToken(RebbValParser.GBCODE, 0);
	};

	ID() {
	    return this.getToken(RebbValParser.ID, 0);
	};

	PASSPORT() {
	    return this.getToken(RebbValParser.PASSPORT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterIs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitIs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitIs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.IsContext = IsContext;

class IsHexContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.type = null; // Token;
        super.copyFrom(ctx);
    }

	COLOR() {
	    return this.getToken(RebbValParser.COLOR, 0);
	};

	NUMBER() {
	    return this.getToken(RebbValParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterIsHex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitIsHex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitIsHex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.IsHexContext = IsHexContext;

class MaxLengthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NumbericLiteral() {
	    return this.getToken(RebbValParser.NumbericLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterMaxLength(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitMaxLength(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitMaxLength(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.MaxLengthContext = MaxLengthContext;

class StringPositionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterStringPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitStringPosition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitStringPosition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.StringPositionContext = StringPositionContext;

class MatchContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.regex = null; // Token;
        super.copyFrom(ctx);
    }

	RegularExpressionLiteral() {
	    return this.getToken(RebbValParser.RegularExpressionLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterMatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitMatch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitMatch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.MatchContext = MatchContext;

class ArrayContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.ArrayContext = ArrayContext;

class NumberContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NumbericLiteral() {
	    return this.getToken(RebbValParser.NumbericLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.NumberContext = NumberContext;

class ContainsContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterContains(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitContains(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitContains(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.ContainsContext = ContainsContext;

class CompareContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EQUAL() {
	    return this.getToken(RebbValParser.EQUAL, 0);
	};

	NEQUAL() {
	    return this.getToken(RebbValParser.NEQUAL, 0);
	};

	LT() {
	    return this.getToken(RebbValParser.LT, 0);
	};

	LTE() {
	    return this.getToken(RebbValParser.LTE, 0);
	};

	GT() {
	    return this.getToken(RebbValParser.GT, 0);
	};

	GTE() {
	    return this.getToken(RebbValParser.GTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterCompare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitCompare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitCompare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.CompareContext = CompareContext;

class NotEmptyContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterNotEmpty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitNotEmpty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitNotEmpty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.NotEmptyContext = NotEmptyContext;

class TimeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TimeLiteral() {
	    return this.getToken(RebbValParser.TimeLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitTime(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitTime(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.TimeContext = TimeContext;

class IntervalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.start = null; // Token;
        this.end = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterInterval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitInterval(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitInterval(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RebbValParser.IntervalContext = IntervalContext;

class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RebbValParser.RULE_arrayLiteral;
    }

	NumbericLiteral = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RebbValParser.NumbericLiteral);
	    } else {
	        return this.getToken(RebbValParser.NumbericLiteral, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RebbValListener ) {
	        listener.exitArrayLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RebbValVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RebbValParser.UnaryTestsContext = UnaryTestsContext; 
RebbValParser.UnaryTestContext = UnaryTestContext; 
RebbValParser.PositiveUnaryTestContext = PositiveUnaryTestContext; 
RebbValParser.ExpressionContext = ExpressionContext; 
RebbValParser.ArrayLiteralContext = ArrayLiteralContext; 
