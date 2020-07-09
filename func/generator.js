'use strict';

function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function fib1(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

// 测试:
console.log(fib1(5)); // [0, 1, 1, 2, 3]
console.log(fib1(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
console.log(fib(5)); // fib {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}

var f = fib(5);
console.log(f.next()); // {value: 0, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: 3, done: false}
console.log(f.next()); // {value: undefined, done: true}

for (var x of fib(10)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}

// 用一个对象来保存状态，得这么写：
var fib2 = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n ++;
            return r;
        } else {
            return undefined;
        }
    }
};

