function abs(x) {
	if (typeof x !== 'number') {
        throw 'Not a number';
    }

    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs(-10.2)); 

var abs2 = function (x) {
	if (typeof x !== 'number') {
        throw 'Not a number';
    }

    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

console.log(abs2(-10.2)); 

//JavaScript允许传入任意个参数而不影响调用
console.log(abs(10, 'blablabla')); // 返回10
console.log(abs(-9, 'haha', 'hehe', null)); // 返回9

//关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

function abs3() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

console.log(abs3()); // 0
console.log(abs3(10)); // 10
console.log(abs3(-9)); // 9

// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
    console.log(a,b,c);
}
foo(1,2,3); 
foo(1,2); 

// ES6标准引入了rest参数，上面的函数可以改写为：
// rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
// 如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5);

function foo2(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo2(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]
foo2(1);
// 结果:
// a = 1
// b = undefined
// Array []

function sum(...rest) {
	var result = 0; 
	for(var x of rest) { result += x; }
	return result;
}
// 测试:
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('fail: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('fail: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('fail: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('fail: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('pass!');
}

// 错误的多行写法
function foo3() {
    return
        { name: 'foo' };
}
console.log(foo3()); 
function foo4() {

    return; // 自动添加了分号，相当于return undefined;
        { name: 'foo' }; // 这行语句已经没法执行到了
}
console.log(foo4()); 
// 所以正确的多行写法是：
function foo5() {
    return { // 这里不会自动加分号，因为{表示语句尚未结束
        name: 'foo'
    };
}
console.log(foo5()); 
