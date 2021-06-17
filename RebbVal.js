import antlr4 from 'antlr4';
import RebbValLexer from './RebbValLexer.js';
import RebbValParser from './RebbValParser.js';
import EvalVisitor from './EvalVisitor.js';

export default class RebbVal
{
    has_error = false;
    errors = [];
    constructor() {
        this.engine = new EvalVisitor("");
        this.errors = [];
    }

    val(object, condition)
    {
        this.errors = [];

        const chars = new antlr4.InputStream(condition);
        const lexer = new RebbValLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new RebbValParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.unaryTests();

        this.engine.setObject(object);

        this.engine.visit(tree);
        if(!this.engine.isValid())
        {
            this.has_error = true;
            let error_message;
            if(object == null)
                error_message = "object is null";
            else
                error_message = object.toString() + " " + condition + " failed";
            if(this.engine.getError() != null && this.engine.getError() !== "")
            error_message += "(" + this.engine.getError() + ")";
            this.errors.push(error_message);
            return false;
        }

        return true;
    }

    hasError() {
        return this.has_error;
    }

    getErrors() {
        return this.errors;
    }
}
