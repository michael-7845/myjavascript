'use strict';
var a = [1, 2, 3];
for (var x of a) {
}
console.log('support for ... of');

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

// for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
// for ... in循环将把name包括在内，但Array的length属性却不包括在内。
// for ... of循环则完全修复了这些问题，它只循环集合本身的元素
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}

// 更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array为例：
console.log('array forEach');
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

console.log('set forEach');
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

console.log('map forEach');
m.forEach(function (value, key, map) {
    console.log(value);
});

console.log('partial arguement');
a.forEach(function (element) {
    console.log(element);
});