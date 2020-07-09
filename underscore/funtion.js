'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

// 因为underscore本来就是为了充分发挥JavaScript的函数式编程特性，所以也提供了大量JavaScript本身没有的高阶函数。

log('bind'); 

// bind()有什么用？我们先看一个常见的错误用法：
var s = ' Hello  ';
log(s.trim());
// 输出'Hello'

var fn = s.trim;
try { log(fn()) }
catch(e) { log(e) }; 
// Uncaught TypeError: String.prototype.trim called on null or undefined

// 如果你想用fn()取代s.trim()，按照上面的做法是不行的，因为直接调用fn()传入的this指针是undefined，必须这么用：
var s = ' Hello  ';
var fn = s.trim;
// 调用call并传入s对象作为this:
log(fn.call(s));
// 输出Hello

// 这样搞多麻烦！还不如直接用s.trim()。但是，bind()可以帮我们把s对象直接绑定在fn()的this指针上，以后调用fn()就可以直接正常调用了：
var s = ' Hello  ';
var fn = _.bind(s.trim, s);
log(fn());
// 输出Hello

// 结论：当用一个变量fn指向一个对象的方法时，直接调用fn()是不行的，因为丢失了this对象的引用。用bind可以修复这个问题。

log('partial'); 
// partial()就是为一个函数创建偏函数。偏函数是什么东东？看例子：
// 假设我们要计算xy，这时只需要调用Math.pow(x, y)就可以了。
// 假设我们经常计算2y，每次都写Math.pow(2, y)就比较麻烦，如果创建一个新的函数能直接这样写pow2N(y)就好了，这个新函数pow2N(y)就是根据Math.pow(x, y)创建出来的偏函数，它固定住了原函数的第一个参数（始终为2）：
var pow2N = _.partial(Math.pow, 2);
log(pow2N(3)); // 8
log(pow2N(5)); // 32
log(pow2N(10)); // 1024

// 如果我们不想固定第一个参数，想固定第二个参数怎么办？比如，希望创建一个偏函数cube(x)，计算x3，可以用_作占位符，固定住第二个参数：
var cube = _.partial(Math.pow, _, 3);
log(cube(3)); // 27
log(cube(5)); // 125
log(cube(10)); // 1000

// 可见，创建偏函数的目的是将原函数的某些参数固定住，可以降低新函数调用的难度。

log('memoize'); 
// 如果一个函数调用开销很大，我们就可能希望能把结果缓存下来，以便后续调用时直接获得结果。举个例子，计算阶乘就比较耗时：
function factorial(n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n;
    while (i > 1) {
        s = s * i;
        i --;
    }
    console.log(n + '! = ' + s);
    return s;
}

factorial(10); // 3628800
// 注意控制台输出:
// start calculate 10!...
// 10! = 3628800

// 用memoize()就可以自动缓存函数计算的结果：
var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n;
    while (i > 1) {
        s = s * i;
        i --;
    }
    console.log(n + '! = ' + s);
    return s;
});

// 第一次调用:
factorial(10); // 3628800
// 注意控制台输出:
// start calculate 10!...
// 10! = 3628800

// 第二次调用:
factorial(10); // 3628800
// 控制台没有输出

// 对于相同的调用，比如连续两次调用factorial(10)，第二次调用并没有计算，而是直接返回上次计算后缓存的结果。不过，当你计算factorial(9)的时候，仍然会重新计算。
// 可以对factorial()进行改进，让其递归调用：
var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
});

factorial(10); // 3628800
// 输出结果说明factorial(1)~factorial(10)都已经缓存了:
// start calculate 10!...
// start calculate 9!...
// start calculate 8!...
// start calculate 7!...
// start calculate 6!...
// start calculate 5!...
// start calculate 4!...
// start calculate 3!...
// start calculate 2!...
// start calculate 1!...

factorial(9); // 362880
// console无输出

log('once'); 
// 顾名思义，once()保证某个函数执行且仅执行一次。如果你有一个方法叫register()，用户在页面上点两个按钮的任何一个都可以执行的话，就可以用once()保证函数仅调用一次，无论用户点击多少次：
var register = _.once(function () {
    log('Register ok!');
});

register(); 
register();

log('delay');
// delay()可以让一个函数延迟执行，效果和setTimeout()是一样的，但是代码明显简单了：
// 2秒后调用alert():
_.delay(log, 2000);

// 如果要延迟调用的函数有参数，把参数也传进去：
_.delay(log, 3000, 'Hello,', 'world!');
// 2秒后打印'Hello, world!':

// 更多完整的函数请参考underscore的文档：http://underscorejs.org/#functions
