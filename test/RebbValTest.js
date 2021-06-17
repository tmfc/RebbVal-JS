import assert from 'assert';
import RebbVal from '../RebbVal.js';

describe('RebbVal', function() {
    describe('#compareNumber', function() {
        it('100 should greater than 10', function() {
            let v = new RebbVal();
            assert.ok(v.val(100, '>10'));
        });
    });

    describe('#compareNumber', function() {
        it('100 should less than 1000', function() {
            let v = new RebbVal();
            assert.ok(v.val(100, '<1000'));
        });
    });

});
