export default class RebbValError extends Error
{
    constructor(message) {
        super(message);
        this.name = "RebbValError";
    }
}
