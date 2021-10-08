import assert from 'assert';
import RebbVal from '../RebbVal.js';
import RebbValError from "../RebbValError.js";
import RebbValConfig from "../RebbValConfig.js";


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

describe('RebbVal Localization', function() {
    let v = new RebbVal();
    describe('#gbcode', function () {
        it('110101 should be a valid gbcode', function () {
            assert.ok(v.val("110101", 'is gbcode'));
        });
        it('100100 should not be a valid gbcode', function () {
            assert.equal(false, v.val("100100", 'is gbcode'));
        });
        it('13113113111 should not be a valid gbcode', function () {
            assert.equal(false, v.val("13113113111", 'is gbcode'));
        });
    });
});

describe('RebbVal Identification', function() {
    let v = new RebbVal();
    describe('#IMEI', function () {
        it('35-209900-176148-1 should be a valid IMEI', function () {
            assert.ok(v.val("35-209900-176148-1", 'is IMEI'));
        });
        it('352099001761481 should be a valid IMEI', function () {
            assert.ok(v.val("352099001761481", 'is IMEI'));
        });
        it('35-209900-176148-2 should not be a valid IMEI', function () {
            assert.equal(false, v.val("35-209900-176148-2", 'is IMEI'));
        });
    });
    describe('#IMEISV', function () {
        it('35-209900-176148-12 should be a valid IMEISV', function () {
            assert.ok(v.val("35-209900-176148-12", 'is IMEISV'));
        });
        it('3520990017614812 should be a valid IMEISV', function () {
            assert.ok(v.val("3520990017614812", 'is IMEISV'));
        });
        it('35-209900-176148-2 should not be a valid IMEISV', function () {
            assert.equal(false, v.val("35-209900-176148-2", 'is IMEISV'));
        });
    });
    describe('#ISBN', function () {
        it('978-0-596-52068-7 should be a valid ISBN', function () {
            assert.ok(v.val("978-0-596-52068-7", 'is ISBN'));
        });
        it('9787510892844 should be a valid ISBN', function () {
            assert.ok(v.val("9787510892844", 'is ISBN'));
        });
        it('35-209900-176148-2 should not be a valid ISBN', function () {
            assert.equal(false, v.val("35-209900-176148-2", 'is ISBN'));
        });
    });

    describe('#UUID', function () {
        it('eb3115e5-bd16-4939-ab12-2b95745a30f3 should be a valid UUID', function () {
            assert.ok(v.val("eb3115e5-bd16-4939-ab12-2b95745a30f3", 'is UUID'));
        });

        it('13113113111 should not be a valid UUID', function () {
            assert.equal(false, v.val("13113113111", 'is UUID'));
        });
    });

    describe('#MAC', function () {
        it('00:11:22:33:44:55 should be a valid MAC', function () {
            assert.ok(v.val("00:11:22:33:44:55", 'is MAC'));
        });

        it('00-11-22-33-44-55 should be a valid MAC', function () {
            assert.ok(v.val("00-11-22-33-44-55", 'is MAC'));
        });

        it('13113113111 should not be a valid MAC', function () {
            assert.equal(false, v.val("13113113111", 'is MAC'));
        });
        it('00:11:22:33:44:GG should not be a valid MAC', function () {
            assert.equal(false, v.val("00:11:22:33:44:GG", 'is MAC'));
        });
    });

    describe('#ID', function () {
        it('140303192005236131 should be a valid ID', function () {
            assert.ok(v.val("140303192005236131", 'is ID'));
        });

        it('110100199909093245 should not be a valid ID', function () {
            assert.equal(false, v.val("110100199909093245", 'is ID'));
        });
        it('110100199902313244 should not be a valid ID', function () {
            assert.equal(false, v.val("110100199902313244", 'is ID'));
        });
    });


});

describe('RebbVal String', function() {
    let v = new RebbVal();
    describe('#true', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true","on", "1", "yes","ok"]);
        });
        it('"true" should be true', function () {
            assert.ok(v.val("true", "is true"));
        });
        it('"yes" should be true', function () {
            assert.ok(v.val("yes", "is true"));
        });
        it('"ok" should be true', function () {
            assert.ok(v.val("ok", "is true"));
        });
        it('"1" should be true', function () {
            assert.ok(v.val("1", "is true"));
        });
        it('"on" should be true', function () {
            assert.ok(v.val("on", "is true"));
        });
        it('"some random string" should not be true', function () {
            assert.equal(false, v.val("some random string", "is true"));
        });
        it('"false" should not be true', function () {
            assert.equal(false, v.val("false", "is true"));
        });
    });
    describe('#true configured', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true","on", "1", "yes","ok"]);
        });
        let v1 = new RebbVal();
        v1.addConfig(RebbValConfig.TRUE_STRING,["true"]);
        it('"true" should be true after configuration', function () {
            assert.ok(v1.val("true", "is true"));
        });
        it('"yes" should not be true after configuration', function () {
            assert.equal(false, v1.val("yes", "is true"));
        });
        it('"ok" should not be true after configuration', function () {
            assert.equal(false, v1.val("ok", "is true"));
        });
        it('"1" should not be true after configuration', function () {
            assert.equal(false, v1.val("1", "is true"));
        });
        it('"on" should not be true after configuration', function () {
            assert.equal(false, v1.val("on", "is true"));
        });
        it('"some random string" should not be true after configuration', function () {
            assert.equal(false, v1.val("some random string", "is true"));
        });
        it('"false" should not be true after configuration', function () {
            assert.equal(false, v1.val("false", "is true"));
        });
    });
    describe('#true global configured', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true"]);

        });
        it('"true" should be true after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("true", "is true"));
        });
        it('"yes" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("yes", "is true"));
        });
        it('"ok" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("ok", "is true"));
        });
        it('"1" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("1", "is true"));
        });
        it('"on" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("on", "is true"));
        });
        it('"some random string" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("some random string", "is true"));
        });
        it('"false" should not be true after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false, v2.val("false", "is true"));
        });
    });
    describe('#false', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true","on", "1", "yes","ok"]);
        });
        it('"true" should not be false', function () {
            assert.equal(false, v.val("true", "is false"));
        });
        it('"yes" should not be false', function () {
            assert.equal(false, v.val("yes", "is false"));
        });
        it('"ok" should not be false', function () {
            assert.equal(false, v.val("ok", "is false"));
        });
        it('"1" should not be false', function () {
            assert.equal(false, v.val("1", "is false"));
        });
        it('"on" should not be false', function () {
            assert.equal(false, v.val("on", "is false"));
        });
        it('"false" should be false', function () {
            assert.ok(v.val("false", "is false"));
        });
        it('"some random string" should be false', function () {
            assert.ok(v.val("some random string", "is false"));
        });
    });
    describe('#false configured', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true","on", "1", "yes","ok"]);
        });
        let v1 = new RebbVal();
        v1.addConfig(RebbValConfig.TRUE_STRING, ['true']);
        it('"true" should not be false after configuration', function () {
            assert.equal(false, v1.val("true", "is false"));
        });
        it('"yes" should be false after configuration', function () {
            assert.ok(v1.val("yes", "is false"));
        });
        it('"ok" should be false after configuration', function () {
            assert.ok(v1.val("ok", "is false"));
        });
        it('"1" should be false after configuration', function () {
            assert.ok(v1.val("1", "is false"));
        });
        it('"on" should be false after configuration', function () {
            assert.ok(v1.val("on", "is false"));
        });
        it('"false" should be false after configuration', function () {
            assert.ok(v1.val("false", "is false"));
        });
        it('"some random string" should be false after configuration', function () {
            assert.ok(v1.val("some random string", "is false"));
        });
    });
    describe('#false global configured', function () {
        before(function() {
            RebbVal.addGlobalConfig(RebbValConfig.TRUE_STRING, ["true"]);
        });
        it('"true" should not be false after configuration', function () {
            let v2 = new RebbVal();
            assert.equal(false,v2.val("true", "is false"));
        });
        it('"yes" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("yes", "is false"));
        });
        it('"ok" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("ok", "is false"));
        });
        it('"1" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("1", "is false"));
        });
        it('"on" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("on", "is false"));
        });
        it('"some random string" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("some random string", "is false"));
        });
        it('"false" should be false after configuration', function () {
            let v2 = new RebbVal();
            assert.ok(v2.val("false", "is false"));
        });
    });
    describe('#equal', function () {
        it('"a string" should equal to "a string"', function () {
            assert.ok(v.val("a string", "='a string'"));
        });
        it('"not a string" should not equal to "a string"', function () {
            assert.equal(false, v.val("not a string", "='a string'"));
        });
    });
    describe('#compare', function () {
        it('greater than should not be supported', function () {
            assert.equal(false, v.val("a string", ">'a string'"));
            assert.equal("a string >'a string' failed(Unsupported Operation)", v.getErrors()[0])
        });
        it('less than should not be supported', function () {
            assert.equal(false, v.val("not a string", "<'a string'"));
            assert.equal("not a string <'a string' failed(Unsupported Operation)", v.getErrors()[0])
        });
    });

    describe('#start with', function () {
        it('"This string" should start with "This"', function () {
            assert.ok(v.val("This string", "starts with 'This'"));
        });
        it('"That string" should not start with "This"', function () {
            assert.equal(false, v.val("That string", "starts with 'This'"));
        });
        it('"This string" should not start with "This very long string"', function () {
            assert.equal(false, v.val("This string", "starts with 'This very long string'"));
        });
    });
    describe('#ends with', function () {
        it('"This string" should end with "string"', function () {
            assert.ok(v.val("This string", "ends with 'string'"));
        });
        it('"That string" should not end with "foobar"', function () {
            assert.equal(false, v.val("That string", "ends with 'foobar'"));
        });
        it('"This string" should not end with "a very long string"', function () {
            assert.equal(false, v.val("This string", "ends with 'a very long string'"));
        });
    });

    describe('#in', function () {
        it('"string" should in "a longer string"', function () {
            assert.ok(v.val("string", "in 'a longer string'"));
        });
        it('"foobar" should not in "a longer string"', function () {
            assert.equal(false, v.val("foobar", "in 'a longer string'"));
        });
    });
    describe('#contains', function () {
        it('"a longer string" should contain "string"', function () {
            assert.ok(v.val("a longer string", "contains 'string'"));
        });
        it('"a longer string" should not contain "foobar""', function () {
            assert.equal(false, v.val("a longer string", "contains 'foobar'"));
        });
    });

    describe('#contains', function () {
        it('"a longer string" should contain "string"', function () {
            assert.ok(v.val("a longer string", "contains 'string'"));
        });
        it('"a longer string" should not contain "foobar"', function () {
            assert.equal(false, v.val("a longer string", "contains 'foobar'"));
        });
    });
    describe('#not empty', function () {
        it('"a string" should not be emtpy', function () {
            assert.ok(v.val("a string", "not empty"));
        });
        it('null should be empty', function () {
            assert.equal(false, v.val(null, "not empty"));
        });
        it('"" should be empty', function () {
            assert.equal(false, v.val("", "not empty"));
        });
    });
    describe('#max length', function () {
        it('"a string" should not exceed mat length 15', function () {
            assert.ok(v.val("a string", "max length 15"));
        });
        it('"a very looooooooooooooong string" should exceed max length 15', function () {
            assert.equal(false, v.val("a very looooooooooooooong string", "max length 15"));
        });
    });
    describe('#percentage', function () {
        it('"100%" should be a percentage', function () {
            assert.ok(v.val("100%", "is percentage"));
        });
        it('"99.9%" should be a percentage', function () {
            assert.ok(v.val("99.9%", "is percentage"));
        });
        it('"-10.01%" should be a percentage', function () {
            assert.ok(v.val("-10.01%", "is percentage"));
        });
        it('"1000%" should not be a percentage', function () {
            assert.equal(false, v.val("1000%", "is percentage"));
        });
    });
    describe('#base64', function () {
        it('"YW55IGNhcm5hbCBwbGVhcw==" should be a valid base64 string', function () {
            assert.ok(v.val("YW55IGNhcm5hbCBwbGVhcw==", "is base64"));
        });
        it('"YW55IGNhcm5hbCBwbGVhc3U=" should be a valid base64 string', function () {
            assert.ok(v.val("YW55IGNhcm5hbCBwbGVhc3U=", "is base64"));
        });
        it('"YW55IGNhcm5hbCBwbGVhc3Vy" should be a valid base64 string', function () {
            assert.ok(v.val("YW55IGNhcm5hbCBwbGVhc3Vy", "is base64"));
        });
        it('"YW5@IGNhcm5hbCBwbGVhcw==" should not be a valid base64 string', function () {
            assert.equal(false, v.val("YW5@IGNhcm5hbCBwbGVhcw==", "is base64"));
        });
        it('"YW55IGNhc=5hbCBwbGVhcw==" should not be a valid base64 string', function () {
            assert.equal(false, v.val("YW55IGNhc=5hbCBwbGVhcw==", "is base64"));
        });
        it('"YW55IGNhcm5hbCBwbGVhc3V" should not be a valid base64 string', function () {
            assert.equal(false, v.val("YW55IGNhcm5hbCBwbGVhc3V", "is base64"));
        });
        it('"YW55IGNhcm5hbCBwbGVh=" should not be a valid base64 string', function () {
            assert.equal(false, v.val("YW55IGNhcm5hbCBwbGVh=", "is base64"));
        });
        it('"YW55IGNhcm5hbCBwbGVhc===" should not be a valid base64 string', function () {
            assert.equal(false, v.val("YW55IGNhcm5hbCBwbGVhc===", "is base64"));
        });
    });

    describe('#number', function () {
        it('"100" should be a string in number format', function () {
            assert.ok(v.val("100", "is number"));
        });
        it('"100.12" should be a string in number format', function () {
            assert.ok(v.val("100.12", "is number"));
        });
        it('"-100" should be a string in number format', function () {
            assert.ok(v.val("-100", "is number"));
        });
        it('"123." should be a string in number format', function () {
            assert.ok(v.val("123.", "is number"));
        });
        it('"-110.123" should be a string in number format', function () {
            assert.ok(v.val("-110.123", "is number"));
        });
        it('"3.1415926" should be a string in number format', function () {
            assert.ok(v.val("3.1415926", "is number"));
        });
        it('"3e30" should be a string in number format', function () {
            assert.ok(v.val("3e30", "is number"));
        });
        it('"-1.2e12" should be a string in number format', function () {
            assert.ok(v.val("-1.2e12", "is number"));
        });
        it('"1.0E-12" should be a string in number format', function () {
            assert.ok(v.val("1.0E-12", "is number"));
        });
        it('".01" should be a string in number format', function () {
            assert.ok(v.val(".01", "is number"));
        });
        it('".0.1" should not be a string in number format', function () {
            assert.equal(false, v.val(".0.1", "is number"));
        });
        it('"123abc" should not be a string in number format', function () {
            assert.equal(false, v.val("123abc", "is number"));
        });
    });
    describe('#integer', function () {
        it('"100" should be a string in integer format', function () {
            assert.ok(v.val("100", "is int"));
        });
        it('"-100" should be a string in integer format', function () {
            assert.ok(v.val("-100", "is int"));
        });
        it('"100.12" should not be a string in integer format', function () {
            assert.equal(false, v.val("100.12", "is int"));
        });
        it('"-110.123" should not be a string in integer format', function () {
            assert.equal(false, v.val("-110.123", "is int"));
        });
        it('"3.1415926" should not be a string in integer format', function () {
            assert.equal(false, v.val("3.1415926", "is int"));
        });
        it('"3e30" should not be a string in integer format', function () {
            assert.equal(false, v.val("3e30", "is int"));
        });
        it('".0.1" should not be a string in integer format', function () {
            assert.equal(false, v.val(".0.1", "is int"));
        });
        it('"123abc" should not be a string in integer format', function () {
            assert.equal(false, v.val("123abc", "is int"));
        });
    });
    describe('#float', function () {
        it('"100.12" should be a string in float format', function () {
            assert.ok(v.val("100.12", "is float"));
        });
        it('"-110.123" should be a string in float format', function () {
            assert.ok(v.val("-110.123", "is float"));
        });
        it('"3.1415926" should be a string in float format', function () {
            assert.ok(v.val("3.1415926", "is float"));
        });
        it('"110." should be a string in float format', function () {
            assert.ok(v.val("110.", "is float"));
        });
        it('"100" should not be a string in float format', function () {
            assert.equal(false, v.val("100", "is float"));
        });
        it('"-100" should not be a string in float format', function () {
            assert.equal(false, v.val("-100", "is float"));
        });
        it('"3e30" should not be a string in float format', function () {
            assert.equal(false, v.val("3e30", "is float"));
        });
        it('".0.1" should not be a string in float format', function () {
            assert.equal(false, v.val(".0.1", "is float"));
        });
        it('"123abc" should not be a string in float format', function () {
            assert.equal(false, v.val("123abc", "is float"));
        });
    });
    describe('#hex color', function () {
        it('"#aaa" should be a string in hex color format', function () {
            assert.ok(v.val("#aaa", "is hex color"));
        });
        it('"#aaab" should be a string in hex color format', function () {
            assert.ok(v.val("#aaab", "is hex color"));
        });
        it('"#000000" should be a string in hex color format', function () {
            assert.ok(v.val("#000000", "is hex color"));
        });
        it('"#ffffffff" should be a string in hex color format', function () {
            assert.ok(v.val("#ffffffff", "is hex color"));
        });
        it('"fff" should not be a string in hex color format', function () {
            assert.equal(false, v.val("fff", "is hex color"));
        });
        it('"ffff" should not be a string in hex color format', function () {
            assert.equal(false, v.val("ffff", "is hex color"));
        });
        it('"bcdefg" should not be a string in hex color format', function () {
            assert.equal(false, v.val("bcdefg", "is hex color"));
        });

    });
    describe('#hex number', function () {
        it('"0xaaa" should be a string in hex number format', function () {
            assert.ok(v.val("0xaaa", "is hex number"));
        });
        it('"0xaaab" should be a string in hex number format', function () {
            assert.ok(v.val("0xaaab", "is hex number"));
        });
        it('"0x000000" should be a string in hex number format', function () {
            assert.ok(v.val("0x000000", "is hex number"));
        });
        it('"0xffffffff" should be a string in hex number format', function () {
            assert.ok(v.val("0xffffffff", "is hex number"));
        });
        it('"fff" should not be a string in hex number format', function () {
            assert.ok(v.val("fff", "is hex number"));
        });
        it('"ffff" should not be a string in hex number format', function () {
            assert.ok(v.val("ffff", "is hex number"));
        });
        it('"bcdefg" should not be a string in hex number format', function () {
            assert.equal(false, v.val("bcdefg", "is hex number"));
        });
    });

    describe('#phone', function () {
        it('"021-59595959" should be a string in phone format', function () {
            assert.ok(v.val("021-59595959", "is phone"));
        });
        it('"0577-1234567" should be a string in phone format', function () {
            assert.ok(v.val("0577-1234567", "is phone"));
        });
        it('"01234-123123123" should not be a string in phone format', function () {
            assert.equal(false, v.val("01234-123123123", "is phone"));
        });
        it('"58910293" should not be a string in phone format', function () {
            assert.equal(false, v.val("58910293", "is phone"));
        });
    });

    describe('#mobile', function () {
        it('"13800138000" should be a string in mobile format', function () {
            assert.ok(v.val("13800138000", "is mobile"));
        });
        it('"13113113111" should be a string in mobile format', function () {
            assert.ok(v.val("13113113111", "is mobile"));
        });
        it('"12132132123" should not be a string in mobile format', function () {
            assert.equal(false, v.val("12132132123", "is mobile"));
        });
        it('"021-59595959" should not be a string in mobile format', function () {
            assert.equal(false, v.val("021-59595959", "is mobile"));
        });
    });

    describe('#match', function () {
        it('"123" should match regex /^\d+$/', function () {
            assert.ok(v.val("123", "match /^\\d+$/"));
        });
        it('"abc123" should not match regex /^\d+$/', function () {
            assert.equal(false, v.val("abc123", "match /^\\d+$/"));
        });
    });
});

describe('RebbVal Composite', function() {
    let v = new RebbVal();
    describe('#not', function () {
        it('100 should not less than 10', function () {
            assert.ok(v.val(100, 'not(< 10)'));
        });
        it('100 should not less than 10(without brackets）', function () {
            assert.ok(v.val(100, 'not < 10'));
        });
        it('100 should not less than 10 (without not operation)', function () {
            assert.equal(false, v.val(100, '< 10'));
        });
    });
    describe('#disjunction', function () {
        it('70 should greater than 60 or less than 10', function () {
            assert.ok(v.val(70, '>60 or <10'));
        });
        it('5 should greater than 60 or less than 10', function () {
            assert.ok(v.val(5, '>60 or <10'));
        });
        it('30 should not  greater than 60 or less than 10', function () {
            assert.equal(false, v.val(30, '>60 or <10'));
        });
    });
    describe('#conjunction', function () {
        it('100 should greater than 10 and less than 1000', function () {
            assert.ok(v.val(100, '>10 and <1000'));
        });
        it('100 should not greater than 10 and less than 100', function () {
            assert.equal(false, v.val(100, '>10 and <100'));
        });
    });

    describe('#unary tests', function () {
        it('10000 should greater than 10 and less than 1000 or equal to 10000', function () {
            assert.ok(v.val(10000, '>10 and <1000 or =10000'));
        });
        it('1000 should greater than 10 and less than 100000 or equal to 10000', function () {
            assert.ok(v.val(1000, '>10 and <100000 or =10000'));
        });
        it('1000 should greater than 100 or less than 10 or equal to 10000', function () {
            assert.ok(v.val(1000, '>100 or <10 or =10000'));
        });
        it('1000 should not greater than 10 and less than 100 or equal to 10000', function () {
            assert.equal(false, v.val(1000, '>10 and <100 or =10000'));
        });
    });

    describe('#custom validator', function () {
        let DemoValidator = function(obj) {
            if(typeof obj === "string")
            {
                return obj === "Demo";
            }
            else
            {
                throw new RebbValError("Unsupported object type");
            }
        }
        v.registerCustomValidator("Demo", DemoValidator);

        it('"Demo" should pass custom DemoValidator ', function () {
            assert.ok(v.val("Demo", 'is Demo'));
        });
        it('"Foobar" should not pass custom DemoValidator ', function () {
            assert.equal(false, v.val("Foobar", 'is Demo'));
        });
        it('1 should not pass custom DemoValidator ', function () {
            assert.equal(false, v.val(1, 'is Demo'));
            assert.equal("1 is Demo failed(Unsupported object type)", v.getErrors()[0]);
        });
    });
});
