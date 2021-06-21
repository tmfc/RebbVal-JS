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
        it('59 should younger than 60', function () {
            assert.ok(v.val(new Date(new Date().getFullYear() - 59,0,1), 'younger than 60'));
        });
        it('61 should not younger than 60', function () {
            assert.equal(false, v.val(new Date(new Date().getFullYear() - 61,0,1), 'younger than 60'));
        });
    });
    describe('#younger', function () {
        it('60 should older than 18', function () {
            assert.ok(v.val(new Date(new Date().getFullYear() - 60,0,1), 'older than 18'));
        });
        it('19 should older than 18', function () {
            assert.ok(v.val(new Date(new Date().getFullYear() - 19,0,1), 'older than 18'));
        });
        it('18 and few days should older than 18', function () {
            assert.ok(v.val(new Date(new Date().getFullYear() - 18,0,1), 'older than 18'));
        });
        it('18\'s birthday should older than 18', function () {
            let now = new Date();
            assert.ok(v.val(new Date(now.getFullYear() - 18,now.getMonth(),now.getDate()), 'older than 18'));
        });
        it('17 should not younger than 18', function () {
            assert.equal(false, v.val(new Date(new Date().getFullYear() - 17,0,1), 'older than 18'));
        });
    });

});

describe('RebbVal Internet', function() {
    let v = new RebbVal();
    describe('#domain', function () {
        it('google.com should be a valid domain', function () {
            assert.ok(v.val("google.com", 'is domain'));
        });
        it('www.baidu.com should be a valid domain', function () {
            assert.ok(v.val("www.baidu.com", 'is domain'));
        });
        it('a random string should not be a valid domain', function () {
            assert.equal(false, v.val("fdsads", 'is domain'));
        });
    });

    describe('#email', function () {
        it('abc@gmail.com should be a valid email', function () {
            assert.ok(v.val("abc@gmail.com", 'is email'));
        });
        it('13800138000@139.com should be a valid email', function () {
            assert.ok(v.val("13800138000@139.com", 'is email'));
        });
        it('a random string should not be a valid email', function () {
            assert.equal(false, v.val("fdsads", 'is email'));
        });
    });

    describe('#ipv4', function () {
        it('8.8.8.8 should be a valid ipv4 address', function () {
            assert.ok(v.val("8.8.8.8", 'is ipv4'));
        });
        it('192.168.1.1 should be a valid ipv4 address', function () {
            assert.ok(v.val("192.168.1.1", 'is ipv4'));
        });
        it('266.1.3.4 should not be a valid ipv4 address', function () {
            assert.equal(false, v.val("266.1.3.4", 'is ipv4'));
        });
    });

    describe('#ipv6', function () {
        it(':: should be a valid ipv6 address', function () {
            assert.ok(v.val("::", 'is ipv6'));
        });
        it('::123 should be a valid ipv6 address', function () {
            assert.ok(v.val("::123", 'is ipv6'));
        });
        it('::123:456 should be a valid ipv6 address', function () {
            assert.ok(v.val("::123:456", 'is ipv6'));
        });
        it('::123:456:789 should be a valid ipv6 address', function () {
            assert.ok(v.val("::123:456:789", 'is ipv6'));
        });
        it('::123:456:789:abc:def:6666 should be a valid ipv6 address', function () {
            assert.ok(v.val("::123:456:789:abc:def:6666", 'is ipv6'));
        });
        it('::123:456:789:abc:def:6666:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("::123:456:789:abc:def:6666:7", 'is ipv6'));
        });

        it('123::456 should be a valid ipv6 address', function () {
            assert.ok(v.val("123::456", 'is ipv6'));
        });
        it('123::456:789:abc should be a valid ipv6 address', function () {
            assert.ok(v.val("123::456:789:abc", 'is ipv6'));
        });
        it('123::456:789:abc:def:6 should be a valid ipv6 address', function () {
            assert.ok(v.val("123::456:789:abc:def:6", 'is ipv6'));
        });
        it('123::456:789:abc:def:6:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123::456:789:abc:def:6:7", 'is ipv6'));
        });

        it('123:456::789 should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456::789", 'is ipv6'));
        });
        it('123:456::789:abc:def should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456::789:abc:def", 'is ipv6'));
        });
        it('123:456::789:abc:def:6666 should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456::789:abc:def:6666", 'is ipv6'));
        });
        it('123:456::789:abc:def:6666:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123:456::789:abc:def:6666:7", 'is ipv6'));
        });

        it('123:456:789::abc should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789::abc", 'is ipv6'));
        });
        it('123:456:789::abc:def should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789::abc:def", 'is ipv6'));
        });
        it('123:456:789::abc:def:6666 should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789::abc:def:6666", 'is ipv6'));
        });
        it('123:456:789::abc:def:6666:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123:456:789::abc:def:6666:7", 'is ipv6'));
        });

        it('123:456:789:abc::def should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc::def", 'is ipv6'));
        });
        it('123:456:789:abc::def:6666 should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc::def:6666", 'is ipv6'));
        });
        it('123:456:789:abc::def:6666:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123:456:789:abc::def:6666:7", 'is ipv6'));
        });

        it('123:456:789:abc:def::6666 should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc:def::6666", 'is ipv6'));
        });
        it('123:456:789:abc:def::6666:7 should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123:456:789:abc:def::6666:7", 'is ipv6'));
        });

        it('123:456:789:abc:def:6666:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc:def:6666::", 'is ipv6'));
        });
        it('123:456:789:abc:def:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc:def::", 'is ipv6'));
        });
        it('123:456:789:abc:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789:abc::", 'is ipv6'));
        });
        it('123:456:789:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456:789::", 'is ipv6'));
        });
        it('123:456:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123:456::", 'is ipv6'));
        });
        it('123:: should be a valid ipv6 address', function () {
            assert.ok(v.val("123::", 'is ipv6'));
        });

        it('123::456::abc should not be a valid ipv6 address', function () {
            assert.equal(false, v.val("123::456::abc", 'is ipv6'));
        });

        it('2001:0db8:85a3:08d3:1319:8a2e:0370:7334 should be a valid ipv6 address', function () {
            assert.ok(v.val("2001:0db8:85a3:08d3:1319:8a2e:0370:7334", 'is ipv6'));
        });
    });

    describe('#privateip', function () {
        it('127.0.0.1 should be a private ip address', function () {
            assert.ok(v.val("127.0.0.1", 'is private_ip'));
        });
        it('10.1.1.1 should be a private ip address', function () {
            assert.ok(v.val("10.1.1.1", 'is private_ip'));
        });
        it('172.18.100.1 should be a private ip address', function () {
            assert.ok(v.val("172.18.100.1", 'is private_ip'));
        });
        it('192.168.2.100 should be a private ip address', function () {
            assert.ok(v.val("192.168.2.100", 'is private_ip'));
        });
        it('8.8.8.8 should not be a private ip address', function () {
            assert.equal(false, v.val("8.8.8.8", 'is private_ip'));
        });
        it('FEC0:0001:: should be a private ip address', function () {
            assert.ok(v.val("FEC0:0001::", 'is private_ip'));
        });
        it('123:456:789:abc:def:6666:: should not be a private ip address', function () {
            assert.equal(false, v.val("123:456:789:abc:def:6666::", 'is private_ip'));
        });
    });

    describe('#url', function () {
        it('https://www.google.com should be a valid url', function () {
            assert.ok(v.val("https://www.google.com", 'is url'));
        });
        it('http://www.example.com/to/path?param1=foo&param2=bar should be a valid url', function () {
            assert.ok(v.val("http://www.example.com/to/path?param1=foo&param2=bar", 'is url'));
        });
        it('somebody@somedomain.com should not be a valid url', function () {
            assert.equal(false, v.val("somebody@somedomain.com", 'is url'));
        });
    });

});

describe('RebbVal Array', function() {
    let v = new RebbVal();
    describe('#number in', function () {
        it('1 should in array [1,2,3]', function () {
            assert.ok(v.val(1, 'in [1,2,3]'));
        });
        it('8 should not in array [1,2,3]', function () {
            assert.equal(false, v.val(8, 'in [1,2,3]'));
        });
        it('8 should not in array [1,2,3](success)', function () {
            assert.ok(v.val(8, 'not in [1,2,3]'));
        });
    });


});
