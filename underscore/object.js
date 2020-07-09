'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

log('keys / allKeys');
// keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的：
function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('xiaoming', 20);
log(_.keys(xiaoming)); // ['name', 'age']

// allKeys()除了object自身的key，还包含从原型链继承下来的：
log(_.allKeys(xiaoming)); // ['name', 'age', 'school']

log('values');
// 和keys()类似，values()返回object自身但不包含原型链继承的所有值：
var obj = {
    name: 'xiaoming',
    age: 20
};

log(_.values(obj)); // ['小明', 20]
// 注意，没有allValues()，原因我也不知道。

log('mapObject');
// mapObject()就是针对object的map版本：
var obj = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
log(_.mapObject(obj, (v, k) => 100 + v)); // { a: 101, b: 102, c: 103 }

log('invert');
// invert()把object的每个key-value来个交换，key变成value，value变成key：
var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};
log(_.invert(obj)); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }

log('extend / extendOwn');
// extend()把多个object的key-value合并到第一个object并返回：
var a = {name: 'Bob', age: 20};
log(_.extend(a, {age: 15}, {age: 88, city: 'Beijing'})); // {name: 'Bob', age: 88, city: 'Beijing'}
// 变量a的内容也改变了：
log(a); // {name: 'Bob', age: 88, city: 'Beijing'}

// 注意：如果有相同的key，后面的object的value将覆盖前面的object的value。
// extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性。

log('clone');
// 如果我们要复制一个object对象，就可以用clone()方法，它会把原有对象的所有属性都复制到新的对象中：
var source = {
    name: 'xiaoming',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};
var copied = _.clone(source);
source.age = 21;
source.skills.push('Java');
console.log(JSON.stringify(source, null, '  '));
console.log(JSON.stringify(copied, null, '  '));
// 注意，clone()是“浅复制”。所谓“浅复制”就是说，两个对象相同的key所引用的value其实是同一对象：
log(source.skills === copied.skills); // true
// 也就是说，修改source.skills会影响copied.skills。

log('isEqual'); 
// isEqual()对两个object进行深度比较，如果内容完全相同，则返回true：
var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};
log(o1 === o2); // false
log(_.isEqual(o1, o2)); // true

// isEqual()其实对Array也可以比较：
var o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
var o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];
log(o1 === o2); // false
log(_.isEqual(o1, o2)); // true

// 更多完整的函数请参考underscore的文档：http://underscorejs.org/#objects
