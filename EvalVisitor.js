import RebbValParser from './RebbValParser.js';
import RebbValVisitor from './RebbValVisitor.js';


export default class EvalVisitor extends RebbValVisitor
{
    obj = null;
    obj_type = null;
    values = {};

    valid = false;
    error = null;

    constructor(obj) {
        super();
        this.obj = obj;
        this.obj_type = typeof this.obj;
    }

    setValue(ctx, val)
    {
        this.values[ctx] = val;
    }

    getValue(ctx)
    {
        return this.values[ctx];
    }

    isValid()
    {
        return this.valid;
    }

    setObject(obj)
    {
        this.obj = obj;
        this.obj_type = typeof this.obj;
    }

    getError()
    {
        return this.error;
    }

    visitConjunction(ctx) {
        this.visit(ctx.unaryTests());
        this.visit(ctx.unaryTest());
        let unaryTestsValue = this.getValue(ctx.unaryTests());
        let unaryTestValue = this.getValue(ctx.unaryTest());
        if(typeof unaryTestsValue == "boolean" && typeof unaryTestValue == "boolean")
        {
            this.setValue(ctx, unaryTestsValue && unaryTestValue);
            this.valid = unaryTestsValue && unaryTestValue;
        }
        else
        {
            this.setValue(ctx, false);
            this.valid = false;
            this.error = "ExpressionValueTypeNotMatch";
        }

        return super.visitConjunction(ctx);
    }

    visitDisjunction(ctx) {
        this.visit(ctx.unaryTests());
        this.visit(ctx.unaryTest());
        let unaryTestsValue = this.getValue(ctx.unaryTests());
        let unaryTestValue = this.getValue(ctx.unaryTest());
        if(typeof unaryTestsValue == "boolean" && typeof unaryTestValue == "boolean")
        {
            this.setValue(ctx, unaryTestsValue || unaryTestValue);
            this.valid = unaryTestsValue || unaryTestValue;
        }
        else
        {
            this.setValue(ctx, false);
            this.valid = false;
            this.error = "ExpressionValueTypeNotMatch";
        }

        return super.visitDisjunction(ctx);
    }

    visitSingleTest(ctx) {

        this.visit(ctx.unaryTest());

        let unaryTestValue = this.getValue(ctx.unaryTest());
        if(typeof unaryTestValue == "boolean")
        {
            this.setValue(ctx, unaryTestValue);
            this.valid = unaryTestValue;
        }
        else
        {
            this.setValue(ctx, false);
            this.valid = false;
            this.error = "ExpressionValueTypeNotMatch";
        }
        return super.visitSingleTest(ctx);
    }

    visitNormalUnaryTest(ctx) {
        this.visit(ctx.positiveUnaryTest());
        this.setValue(ctx, this.getValue(ctx.positiveUnaryTest()));
        return super.visitNormalUnaryTest(ctx);
    }

    visitNegationUnaryTest(ctx) {
        this.visit(ctx.positiveUnaryTest());
        let unaryTestValue = this.getValue(ctx.positiveUnaryTest());
        if(typeof unaryTestValue == "boolean")
        {
            this.setValue(ctx, !unaryTestValue);
        }
        else
        {
            this.setValue(ctx, false);
            this.error = "ExpressionValueTypeNotMatch";
        }
        return super.visitNegationUnaryTest(ctx);
    }

    visitIgnoreUnaryTest(ctx) {
        this.setValue(ctx, true);
        return super.visitIgnoreUnaryTest(ctx);
    }

    visitPositiveUnaryTest(ctx) {
        this.visit(ctx.expression());
        this.setValue(ctx, this.getValue(ctx.expression()));
        return super.visitPositiveUnaryTest(ctx);
    }

    visitNumber(ctx) {
        try {
            this.setValue(ctx, parseFloat(ctx.NumbericLiteral().getText()));
        } catch(e)
        {
            this.setValue(ctx, null);
            this.error = e.message;
        }
        return super.visitNumber(ctx);
    }

    doCompare(obj, value, type)
    {
        let result = false;
        switch(type)
        {
            case RebbValParser.EQUAL:
                result = obj === value;
                break;
            case RebbValParser.GT:
                result = obj > value;
                break;
            case RebbValParser.GTE:
                result = obj >= value;
                break;
            case RebbValParser.LT:
                result = obj < value;
                break;
            case RebbValParser.LTE:
                result = obj <= value;
                break;
        }
        return result;
    }

    visitCompare(ctx) {
        super.visit(ctx.expression());

        let result = false;
        let exprValue  = this.getValue(ctx.expression())

        if(this.obj_type === "number" && typeof this.getValue(ctx.expression()))
        {
            result = this.doCompare(this.obj, exprValue, ctx.op.type);
            this.setValue(ctx, result);
        }

        return super.visitCompare(ctx);
    }
}
