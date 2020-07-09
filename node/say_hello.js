'use strict';

// 引入hello模块:
var greet = require('./hello');
// var greet = require('hello');
var s = 'Michael';
// greet(s); // Hello, Michael!
greet.greet(s);

// CommonJS规范
// 这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。
// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。

// 结论
// 要在模块中对外输出变量，用：
// module.exports = variable;
// 输出的变量可以是任意对象、函数、数组等等。
// 要引入其他模块输出的对象，用：
// var foo = require('other_module');
// 引入的对象具体是什么，取决于引入模块输出的对象。

// https://github.com/michaelliao/learn-javascript
