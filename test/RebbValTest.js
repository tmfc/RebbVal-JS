import assert from 'assert';
import RebbVal from '../RebbVal.js';

describe('RebbVal Boolean', function() {
    let v = new RebbVal();
    describe('#true', function () {
        it('true should be true', function () {
            assert.ok(v.val(true, 'is true'));
        });
        it('false should not be true', function () {
            assert.equal(false, v.val(false, 'is true'));
        });
    });
    describe('#false', function () {
        it('false should be false', function () {
            assert.ok(v.val(false, 'is false'));
        });
        it('true should not be false', function () {
            assert.equal(false, v.val(true, 'is false'));
        });
    });
});

describe('RebbVal Number', function() {
    let v = new RebbVal();
    describe('#true', function () {
        it('100 should be true', function () {
            assert.ok(v.val(100.0, 'is true'));
        });
        it('0 should not be true', function () {
            assert.equal(false, v.val(0.0, 'is true'));
        });
    });
    describe('#false', function () {
        it('0 should be false', function () {
            assert.ok(v.val(0.0, 'is false'));
        });
        it('100 should not be false', function () {
            assert.equal(false, v.val(100.0, 'is false'));
        });
    });
    describe('#compare', function () {
        it('100 should equals to 100', function () {
            assert.ok(v.val(100.0, '=100'));
        });

        it('100 should not equals to 10', function () {
            assert.ok(v.val(100.0, '!=10'));
        });

        it('100 should greater than 10', function () {
            assert.ok(v.val(100.0, '>10'));
        });
        it('188.8 should not greater than 188.9', function () {
            assert.equal(false, v.val(188.8, '> 188.9'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.8 > 188.9 failed", v.getErrors()[0]);
        });

        it('100 should greater than or equal to 100.0', function () {
            assert.ok(v.val(100, '>=100.0'));
        });
        it('188.8 should not greater than or equal to 188.9', function () {
            assert.equal(false, v.val(188.8, '>= 188.9'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.8 >= 188.9 failed", v.getErrors()[0]);
        });

        it('100 should less than 1000', function () {
            assert.ok(v.val(100, '<1000'));
        });
        it('188.9 should not less than 188.8', function () {
            assert.equal(false, v.val(188.9, '< 188.8'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.9 < 188.8 failed", v.getErrors()[0]);
        });


        it('100 should less than or equal to 100', function () {
            assert.ok(v.val(100, '<=100'));
        });
        it('188.8 should not less than or equal to 188.9', function () {
            assert.equal(false, v.val(188.9, '<= 188.8'));
            assert.equal(1, v.getErrors().length);
            assert.equal("188.9 <= 188.8 failed", v.getErrors()[0]);
        });

        it('100 should equals to 100', function () {
            assert.ok(v.val(100, '=100'));
        });
        it('8.8 should equals to 10', function () {
            assert.equal(false, v.val(8.8, '=10'));
            assert.equal(1, v.getErrors().length);
            assert.equal("8.8 =10 failed", v.getErrors()[0]);
        });
    });

    describe('#between', function () {
        it('23 should between 18 and 60', function () {
            assert.ok(v.val(23, 'between 18 and 60'));
        });
    });

    describe('#interval', function () {
        it('23 should match (18..60)', function () {
            assert.ok(v.val(23, '(18..60)'));
        });
    });

});

describe('RebbVal Date', function() {
    let v = new RebbVal();
    describe('#compare', function() {
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

    describe('#between', function() {
        it('2000-01-01 should between 1999-01-01 and 2001-01-01', function () {
            assert.ok(v.val(v.date('2000-01-01'), 'between 1999-01-01 and 2001-01-01'));
        });
    });

    describe('#interval', function() {
        it('2000-01-01 should match (1999-01-01..2001-01-01)', function () {
            assert.ok(v.val(v.date('2000-01-01'), '(1999-01-01..2001-01-01)'));
        });
    });

    describe('#leapyear', function() {
        it('2020 and 2020 should be leap years', function () {
            assert.ok(v.val(v.year('2000'), 'is leapyear'));
            assert.ok(v.val(v.year('2020'), 'is leapyear'));
            assert.ok(v.val(2000, 'is leapyear'));
            assert.ok(v.val(parseInt('2000'), 'is leapyear'));
        });
    });

    describe('#leapyear fails', function() {
        it('1900 should not be a leap year', function () {
            assert.equal(false, v.val(v.year('1900'), 'is leapyear'));
        });
        it('1989 should not be a leap year', function () {
            assert.equal(false, v.val(v.year('1989'), 'is leapyear'));
        });
    });

    describe('#leapday', function() {
        it('2000-02-29 and 2020-02-29 should not be a leap day', function () {
            assert.ok(v.val(v.date('2000-02-29'), 'is leapday'));
            assert.ok(v.val(v.date('2020-02-29'), 'is leapday'));
        });
    });
    describe('#leapday fails', function() {
        it('1989-02-29 and 1900-02-29 should not be a leap day', function () {
            assert.equal(false, v.val(v.date('1989-02-29'), 'is leapday'));
            assert.equal(false, v.val(v.date('1900-02-29'), 'is leapday'));
        });
    });
});

describe('RebbVal Age', function() {
    let v = new RebbVal();
    describe('#younger', function () {
        it('18 should younger than 60', function () {
            assert.ok(v.val(new Date(new Date().getFullYear() - 18,0,1), 'younger than 60'));
        });
        it('61 should not younger than 60', function () {
            assert.equal(false, v.val(new Date(new Date().getFullYear() - 61,0,1), 'younger than 60'));
        });
    });

});
