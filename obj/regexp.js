'use strict';

console.log('define'); 
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

console.log(re1); // /ABC\-001/
console.log(re2); // /ABC\-001/

console.log('test'); 
var re = /^\d{3}\-\d{3,8}$/;
console.log(re.test('010-12345')); // true
console.log(re.test('010-1234x')); // false
console.log(re.test('010 12345')); // false

console.log('split'); 
console.log('a b   c'.split(' ')); // ['a', 'b', '', '', 'c']
// 嗯，无法识别连续的空格，用正则表达式试试：
console.log('a b   c'.split(/\s+/)); // ['a', 'b', 'c']
// 无论多少个空格都可以正常分割。加入,试试：
console.log('a,b, c  d'.split(/[\s\,]+/)); // ['a', 'b', 'c', 'd']
// 再加入;试试：
console.log('a,b;; c  d'.split(/[\s\,\;]+/)); // ['a', 'b', 'c', 'd']

console.log('group'); 
// 如果正则表达式中定义了组，就可以在RegExp对象上用exec()方法提取出子串来。
// exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。
// exec()方法在匹配失败时返回null。
re = /^(\d{3})-(\d{3,8})$/;
console.log(re.exec('010-12345')); // ['010-12345', '010', '12345']
console.log(re.exec('010 12345')); // null
re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
console.log(re.exec('19:05:30')); // ['19:05:30', '19', '05', '30']

console.log('greedy'); 
// 正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的0：
re = /^(\d+)(0*)$/;
console.log(re.exec('102300')); // ['102300', '102300', '']
// 由于\d+采用贪婪匹配，直接把后面的0全部匹配了，结果0*只能匹配空字符串了。
// 必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配：
re = /^(\d+?)(0*)$/;
console.log(re.exec('102300')); // ['102300', '1023', '00']

console.log('global search');
// avaScript的正则表达式还有几个特殊的标志，最常用的是g，表示全局匹配：
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

// 全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
console.log(re.exec(s)); // ['JavaScript']
console.log(re.lastIndex); // 10
console.log(re.exec(s)); // ['VBScript']
console.log(re.lastIndex); // 20
console.log(re.exec(s)); // ['JScript']
console.log(re.lastIndex); // 29
console.log(re.exec(s)); // ['ECMAScript']
console.log(re.lastIndex); // 44
console.log(re.exec(s)); // null，直到结束仍没有匹配到
// 全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。
// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。
