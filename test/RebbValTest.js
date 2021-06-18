import assert from 'assert';
import RebbVal from '../RebbVal.js';

describe('RebbVal', function() {
    describe('#numberCompare', function() {
        let v = new RebbVal();
        it('100 should equals to 100', function() {
            assert.ok(v.val(100.0, '=100'));
        });

        it('100 should not equals to 10', function() {
            assert.ok(v.val(100.0, '!=10'));
        });

        it('100 should greater than 10', function() {
            assert.ok(v.val(100.0, '>10'));
        });
        it('188.8 should not greater than 188.9', function() {
            assert.equal(false, v.val(188.8, '> 188.9'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.8 > 188.9 failed", v.getErrors()[0]);
        });

        it('100 should greater than or equal to 100.0', function() {
            assert.ok(v.val(100, '>=100.0'));
        });
        it('188.8 should not greater than or equal to 188.9', function() {
            assert.equal(false, v.val(188.8, '>= 188.9'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.8 >= 188.9 failed", v.getErrors()[0]);
        });

        it('100 should less than 1000', function() {
            assert.ok(v.val(100, '<1000'));
        });
        it('188.9 should not less than 188.8', function() {
            assert.equal(false, v.val(188.9, '< 188.8'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.9 < 188.8 failed", v.getErrors()[0]);
        });


        it('100 should less than or equal to 100', function() {
            assert.ok(v.val(100, '<=100'));
        });
        it('188.8 should not less than or equal to 188.9', function() {
            assert.equal(false, v.val(188.9, '<= 188.8'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.9 <= 188.8 failed", v.getErrors()[0]);
        });

        it('100 should equals to 100', function() {
            assert.ok(v.val(100, '=100'));
        });
        it('8.8 should equals to 10', function() {
            assert.equal(false, v.val(8.8, '=10'));
            assert.equal(1, v.getErrors().length);
            assert.equal("8.8 =10 failed", v.getErrors()[0]);
        });
    });

    describe('#numberBetween', function() {
        let v = new RebbVal();
        it('23 should between 18 and 60', function () {
            assert.ok(v.val(23, 'between 18 and 60'));
        });
    });

    describe('#numberInterval', function() {
        let v = new RebbVal();
        it('23 should match (18..60)', function () {
            assert.ok(v.val(23, '(18..60)'));
        });
    });

    describe('#dateCompare', function() {
        let v = new RebbVal();
        it('2000-01-01 should equals to 2000-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '= 2000-01-01'));
        });

        it('2000-01-01 should greater than 1999-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '> 1999-01-01'));
        });

        it('2000-01-01 should greater than or equals to 1999-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '>= 1999-01-01'));
        });

        it('2000-01-01 should greater than 2000-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '>= 2000-01-01'));
        });

        it('2000-01-01 should less than 2001-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '< 2001-01-01'));
        });

        it('2000-01-01 should less than or equals to 2001-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '<= 2001-01-01'));
        });

        it('2000-01-01 should less than or equals to 2000-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), '<= 2000-01-01'));
        });
    });

    describe('#dateBetween', function() {
        let v = new RebbVal();
        it('2000-01-01 should between 1999-01-01 and 2001-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), 'between 1999-01-01 and 2001-01-01'));
        });
    });

    describe('#dateInterval', function() {
        let v = new RebbVal();
        it('2000-01-01 should match (1999-01-01..2001-01-01)', function () {
            assert.ok(v.val(v.date('2000-01-01'), '(1999-01-01..2001-01-01)'));
        });
    });
});
