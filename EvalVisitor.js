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
        this.setObject(obj);
    }
    setObject(obj)
    {
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

    isDate(d)
    {
        return typeof d === "object" && d.constructor.name === 'Date';
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

    visitDate(ctx) {
        try {
            let date =new Date(ctx.DateLiteral().getText());
            this.setValue(ctx, date);
        } catch (e) {
            this.setValue(ctx, null);
            this.error = e.message;
        }
        return super.visitDate(ctx);
    }

    doCompare(obj, value, type)
    {
        let result = false;

        if(this.isDate(obj) && this.isDate(value))
        {
            obj = obj.getTime();
            value = value.getTime();
        }

        switch(type)
        {
            case RebbValParser.EQUAL:
                result = obj === value;
                break;
            case RebbValParser.NEQUAL:
                result = obj !== value;
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
            let result = this.doCompare(this.obj, exprValue, ctx.op.type);
            this.setValue(ctx, result);
        }
        else if(this.isDate(this.obj) && this.isDate(exprValue))
        {
            let result = this.doCompare(this.obj, exprValue, ctx.op.type);
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
        else if(this.isDate(this.obj) && this.isDate(l_value) && this.isDate(r_value))
        {
            if(this.obj.getTime() >= l_value.getTime() && this.obj.getTime() <= r_value.getTime()) {
                this.setValue(ctx, true);
            }
            else {
                this.setValue(ctx, false);
            }
        }
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
            let result = this.doIntervalCompare(this.obj, l_value, r_value, ctx.start.text, ctx.end.text);
            this.setValue(ctx, result);
        }
        else if(this.isDate(this.obj) && this.isDate(l_value) && this.isDate(r_value))
        {
            let result = this.doIntervalCompare(this.obj, l_value, r_value, ctx.start.text, ctx.end.text);
            this.setValue(ctx, result);
        }
        else{
            this.setValue(ctx, false);
            this.error = "UnsupportedObjectType";
        }
        return super.visitInterval(ctx);
    }

    doIntervalCompare(obj, l, r, start, end)
    {
        if(this.isDate(obj) && this.isDate(l) && this.isDate(r))
        {
            obj = obj.getTime();
            l = l.getTime();
            r = r.getTime();
        }

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

    visitAgeCompare(ctx) {
        this.visit(ctx.expression());
        let exprValue = this.getValue(ctx.expression());
        let result = false;
        if (this.isDate(this.obj) && typeof exprValue === "number")
        {
            let now = new Date();
            let age = now.getFullYear() - this.obj.getFullYear();
            if(now.getMonth() > this.obj.getMonth() ||
                (now.getMonth() === this.obj.getMonth() && now.getDate() > this.obj.getDate()))
                age = age - 1;

            switch(ctx.op.type) {
                case RebbValParser.OLDER:
                    result = age > exprValue;
                    break;
                case RebbValParser.YOUNGER:
                    result = age < exprValue;
                    break;
            }
            if(result){
                this.setValue(ctx, true);
            }
            else {
                this.setValue(ctx, false);
            }
        }
        else
        {
            this.valid = false;
            this.error = "UnsupportedObjectType";
        }
        return super.visitAgeCompare(ctx);
    }

    visitIs(ctx) {
        let b = new BuildInFunctions();
        let result = true;
        switch(ctx.type.type) {
            case RebbValParser.TRUE:
                result = b.checkTrue(this.obj, this.obj_type);
                break;
            case RebbValParser.FALSE:
                result = b.checkFalse(this.obj, this.obj_type);
                break;
            case RebbValParser.LEAPYEAR:
                result = b.checkLeapYear(this.obj, this.obj_type);
                break;
            case RebbValParser.LEAPDAY:
                result = b.checkLeapDay(this.obj, this.obj_type);
                break;
        }
        this.setValue(ctx, result);
        if(result === false)
        {
            this.error = b.error;
        }
        return super.visitIs(ctx);
    }
}

class BuildInFunctions
{
    error = '';
    checkTrue(obj, obj_type)
    {
        if(obj_type === "boolean")
            return obj;
        else if(obj_type === "number")
            return obj != 0;
        else
        {
            this.error = "ObjectTypeNotSupport";
            return false;
        }
    }

    checkFalse(obj, obj_type)
    {
        if(obj_type === "boolean")
            return !obj;
        else if(obj_type === "number")
            return obj == 0;
        else
        {
            this.error = "ObjectTypeNotSupport";
            return false;
        }
    }

    checkLeapYear(obj, obj_type)
    {
        if(obj_type === "number" && Number.isInteger(obj))
            return new Date(obj, 1, 29).getDate() === 29;
        else if(obj_type === "object" && obj.constructor.name === 'Date')
        {
            return new Date(obj.getFullYear(),1,29).getDate() === 29;
        }
        else
        {
            this.error = "ObjectTypeNotSupport";
            return false;
        }
    }

    checkLeapDay(obj, obj_type)
    {
        if(obj_type === "object" && obj.constructor.name === 'Date')
        {
            return obj.getMonth() === 1 && obj.getDate() === 29;
        }
        else
        {
            this.error = "ObjectTypeNotSupport";
            return false;
        }
    }
}
