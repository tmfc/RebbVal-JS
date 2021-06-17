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

    visitString(ctx) {
        let str = ctx.StringLiteral.getText()
        if(str != null)
            this.setValue(ctx, str.substring(1,str.length() -1));

        return super.visitString(ctx);
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

        if(this.obj_type === "number" && typeof this.getValue(ctx.expression()) === "number")
        {
            result = this.doCompare(this.obj, exprValue, ctx.op.type);
            this.setValue(ctx, result);
        }

        return super.visitCompare(ctx);
    }

    visitBetween(ctx) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        let l_value = this.getValue(ctx.expression(0));
        let r_value = this.getValue(ctx.expression(1));
        if(this.obj_type === "number" && typeof l_value === "number" && typeof r_value === "number")
        {
            if(this.obj >= l_value && this.obj <= r_value) {
                this.setValue(ctx, true);
            }
            else {
                this.setValue(ctx, false);

            }
        }
        // else if(this.obj instanceof Date && l_value instanceof Date && r_value instanceof Date)
        // {
        //     Date obj = (Date)this.obj;
        //     Date l = (Date)l_value;
        //     Date r = (Date)r_value;
        //
        //     if(obj.compareTo(l) >= 0 && obj.compareTo(r) <= 0) {
        //         setValue(ctx, true);
        //     }
        //     else {
        //         setValue(ctx, false);
        //         this.valid = false;
        //     }
        // }
        else
        {
            this.setValue(ctx, false);
            this.error = "UnsupportedObjectType";
        }

        return super.visitBetween(ctx);
    }

    visitInterval(ctx) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        let l_value = this.getValue(ctx.expression(0));
        let r_value = this.getValue(ctx.expression(1));
        if(this.obj_type === "number" && typeof l_value === "number" && typeof r_value === "number")
        {
            let obj = this.obj;

            let result = this.doIntervalCompare(this.obj, l_value, r_value, ctx.start.text, ctx.end.text);
            this.setValue(ctx, result);
        }
        // else if(l_value instanceof Date && r_value instanceof Date && this.obj instanceof Date)
        // {
        //     Date obj = (Date)this.obj;
        //     Date l = (Date)l_value;
        //     Date r = (Date)r_value;
        //
        //     boolean result = doIntervalCompare(obj, l, r, ctx.start.getText(), ctx.end.getText());
        //     setValue(ctx, result);
        // }
        else{
            this.setValue(ctx, false);
            this.error = "UnsupportedObjectType";
        }
        return super.visitInterval(ctx);
    }

    doIntervalCompare(obj, l, r, start, end)
    {
        let startResult = false;
        let endResult = false;
        if(start === "(" || start === "]")
            startResult = obj > l;
        if(start === "[")
            startResult = obj >= l;

        if(startResult){
            if(end === ")" || end === "[")
                endResult = obj < r;
            if(end === "]")
                endResult = obj <= r;
        }

        return startResult && endResult;
    }
}
