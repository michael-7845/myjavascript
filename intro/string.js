console.log('I\'m \"OK\"!');
console.log('\x41'); // 完全等同于 'A'
console.log('\u4e2d\u6587'); // 完全等同于 '中文'
var s = `这是一个
多行
字符串`;
console.log(s); 

var name = 'michael';
var age = 20;
var message = 'hello, ' + name + ', you are ' + age + ' years old!';
console.log(message);

message = `hello, ${name}, you are ${age} years old!`;
console.log(message);

var s = 'Hello, world!';
console.log(s.length); // 13

var s = 'Hello, world!';
console.log(s[0]); // 'H'
console.log(s[6]); // ' '
console.log(s[7]); // 'w'
console.log(s[12]); // '!'
console.log(s[13]); // undefined 超出范围的索引不会报错，但一律返回undefined

s = 'Test';
s[0] = 'X';
console.log(s); // s仍然为'Test'


s = 'Hello';
console.log(s.toUpperCase()); // 返回'HELLO'
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
console.log(lower); // 'hello'
var s = 'hello, world';
console.log(s.indexOf('world')); // 返回7
console.log(s.indexOf('World')); // 没有找到指定的子串，返回-1
console.log(s.substring(0, 5)); // 从索引0开始到5（不包括5），返回'hello'
console.log(s.substring(7)); // 从索引7开始到结束，返回'world'
