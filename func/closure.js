// 不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数！
function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
}

console.log(sum([1, 2, 3, 4, 5])); // 15

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
console.log(f);
console.log(f());

// 当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：
// f1()和f2()的调用结果互不影响。
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1 === f2); // false
console.log(f1());
console.log(f2());


console.log('reference variable change'); 
// 注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。
// 另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了f()才执行。
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

// 在上面的例子中，每次循环，都创建了一个新的函数，然后，把创建的3个函数都添加到一个Array中返回了。
// 你可能认为调用f1()，f2()和f3()结果应该是1，4，9，但实际结果是：
console.log(f1()); // 16
console.log(f2()); // 16
console.log(f3()); // 16

// 全部都是16！原因就在于返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。


// 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 1
console.log(f2()); // 4
console.log(f3()); // 9


console.log('anonymous function instantly execute');
// 理论上讲，创建一个匿名函数并立刻执行可以这么写：
// function (x) { return x * x } (3);
// 但是由于JavaScript语法解析的问题，会报SyntaxError错误，因此需要用括号把整个函数定义括起来：
(function (x) { return x * x }) (3);
// 通常，一个立即执行的匿名函数可以把函数体拆开，一般这么写：
(function (x) {
    return x * x;
})(3);
// 注意这里用了一个“创建一个匿名函数并立刻执行”的语法：
(function (x) {
    return x * x;
})(3); // 9

console.log('internal state');
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3

var c2 = create_counter(10);
console.log(c2.inc()); // 11
console.log(c2.inc()); // 12
console.log(c2.inc()); // 13

console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3


function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(5)); // 25
console.log(pow3(7)); // 343

