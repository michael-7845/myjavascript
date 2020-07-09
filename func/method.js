// 'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

console.log(xiaoming.age); // function xiaoming.age()
console.log(xiaoming.age()); // 今年调用是30,明年调用就变成31了

// this变量
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log('apply to fix this issue'); 
console.log(xiaoming.age()); // 30, 正常结果
console.log(getAge()); // NaN
console.log(getAge.apply(xiaoming, [])); // 30, this指向xiaoming, 参数为空
// apply()把参数打包成Array再传入；
// call()把参数按顺序传入。
console.log(getAge.call(xiaoming, null));
console.log(getAge.call(xiaoming));
var fn = xiaoming.age; // 先拿到xiaoming的age函数
console.log(fn()); // NaN

var xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

console.log(xiaoming2.age()); // 30

// 装饰器
var count = 0;
console.log(Number.parseInt('10'));
var oldParseInt = Number.parseInt; // 保存原函数

var parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3
