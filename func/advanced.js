'use strict';

// map function
console.log('map function'); 
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

console.log(arr.map(String));

// reduce function
console.log('reduce function'); 
arr = [1, 3, 5, 7, 9];
console.log(arr.reduce(function (x, y) {
    return x + y;
})); // 25

console.log(arr.reduce(function (x, y) {
    return x * 10 + y;
})); // 13579

// filter function
console.log('filter function'); 
arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]

arr = ['A', 'B', 'C'];
r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});
console.log(r);

arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r);

// sort function
console.log('sort function'); 
// 看上去正常的结果:
r = ['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];
console.log(r);
// apple排在了最后:
r = ['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']
console.log(r);
// 无法理解的结果:
r = [10, 20, 1, 2].sort(); // [1, 10, 2, 20]
console.log(r);

arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]

arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]
console.log(arr);

arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    let x1 = s1.toUpperCase();
    let x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
console.log(arr);

// sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
console.log(a1); // ['A', 'B', 'C']
console.log(a2); // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象

// every function
console.log('every funtion'); 
arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
})); // true, 因为每个元素都满足s.length>0

console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
})); // false, 因为不是每个元素都全部是小写

console.log('findIndex funtion'); 
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
})); // 1, 因为'pear'的索引是1

console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
})); // -1

console.log('forEach funtion'); 
var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log); // 依次打印每个元素

