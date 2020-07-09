'use strict';

function foo() {
    var x = 1;
    x = x + 1;
    return x; 
}

// x = x + 2; // ReferenceError! 无法在函数体外引用变量x

function bar() {
    var x = 'A';
    x = x + 'B';
    return x; 
}

console.log(foo()); 
console.log(bar()); 

function foo2() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
        console.log(y);
    }
    // var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
}
foo2(); 

function foo3() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}
foo3();

// JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值
function foo4() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}
foo4();

// 为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
function foo5() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    i += 1;
}
// foo5(); 

// ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：
const PI = 3.14;
// PI = 3; // 某些浏览器不报错，但是无效果！
console.log(PI); // 3.14

// 从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。
// 传统的做法，如何把一个数组的元素分别赋值给几个变量：
var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];
// 现在，在ES6中，可以使用解构赋值，直接对多个变量同时赋值：
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

// 如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：
let [x2, [y2, z2]] = ['hello', ['JavaScript', 'ES6']];
console.log('x2 = ' + x2 + ', y2 = ' + y2 + ', z2 = ' + z2);

// 如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性：
var person = {
    name: 'xiaoming',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

var person = {
    name: 'xiaoming',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zip}} = person;
console.log(name); // '小明'
console.log(city); // 'Beijing'
console.log(zip); // undefined, 因为属性名是zipcode而不是zip
// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
// console.log(address); // Uncaught ReferenceError: address is not defined

// 把passport属性赋值给变量id:
let {name2, passport:id} = person;
console.log(name2); // '小明'
console.log(id); // 'G-12345678'
// 注意: passport不是变量，而是为了让变量id获得passport属性:
console.log(passport); // Uncaught ReferenceError: passport is not defined


// 如果person对象没有single属性，默认赋值为true:
var {name3, single=true} = person;
console.log(name3); // '小明'
console.log(single); // true

// 声明变量:
var x, y;
// 解构赋值:
// {x, y} = { name: '小明', x: 100, y: 200};
// 语法错误: Uncaught SyntaxError: Unexpected token =
({x, y} = { name: '小明', x: 100, y: 200});
console.log(x); 
console.log(y); 

var x=1, y=2;
[x, y] = [y, x]
console.log(x); 
console.log(y); 

/*
快速获取当前页面的域名和路径：
var {hostname:domain, pathname:path} = location;

如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。例如，下面的函数可以快速创建一个Date对象：
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
它的方便之处在于传入的对象只需要year、month和day这三个属性：
buildDate({ year: 2017, month: 1, day: 1 });
// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)
也可以传入hour、minute和second属性：
buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)
*/
