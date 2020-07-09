'use strict';

console.log('number');
console.log(123); // 整数123
console.log(0.456); // 浮点数0.456
console.log(1.2345e3); // 科学计数法表示1.2345x1000，等同于1234.5
console.log(-99); // 负数
console.log(NaN); // NaN表示Not a Number，当无法计算结果时用NaN表示
console.log(Infinity); // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

console.log(1 + 2);// 3;
console.log((1 + 2) * 5 / 2); // 7.5
console.log(2 / 0); // Infinity
console.log(0 / 0); // NaN
console.log(10 % 3); // 1
console.log(10.5 % 3); // 1.5

console.log('boolean');
console.log(true); // 这是一个true值
console.log(false); // 这是一个false值
console.log(2 > 1); // 这是一个true值
console.log(2 >= 3); // 这是一个false值
console.log(true && true); // 这个&&语句计算结果为true
console.log(true && false); // 这个&&语句计算结果为false
console.log(false && true && false); // 这个&&语句计算结果为false
console.log(false || false); // 这个||语句计算结果为false
console.log(true || false); // 这个||语句计算结果为true
console.log(false || true || false); // 这个||语句计算结果为true
console.log(! true); // 结果为false
console.log(! false); // 结果为true
console.log(! (2 > 5)); // 结果为true

var age = 15;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('teenager');
}


console.log(2 > 5); // false
console.log(5 >= 2); // true
console.log(7 == 7); // true
console.log(false == 0); // true
console.log(false === 0); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(1 / 3 === (1 - 2 / 3)); // false
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001); // true


console.log('array')
console.log([1, 2, 3.14, 'Hello', null, true]);
console.log(new Array(1, 2, 3)); // 创建了数组[1, 2, 3]
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr[0]); // 返回索引为0的元素，即1
console.log(arr[5]); // 返回索引为5的元素，即true
console.log(arr[6]); // 索引超出了范围，返回undefined

console.log('object')
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
console.log(person); 
console.log(person.name); // 'Bob'
console.log(person.zipcode); // null


// var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null
var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串
a = 123;
a = "ABC"; // 错误：不能把字符串赋给整型变量
var x = 10;
x = x + 2;
// y=3; 
