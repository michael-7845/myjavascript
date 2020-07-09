var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length); // 6

arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 6;
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
console.log(arr); // arr变为[1, 2]

arr = ['A', 'B', 'C'];
arr[1] = 99;
console.log(arr); // arr现在变为['A', 99, 'C']

arr = [1, 2, 3];
arr[5] = 'x';
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, 'x']

arr = [10, 20, '30', 'xyz'];
console.log(arr.indexOf(10)); // 元素10的索引为0
console.log(arr.indexOf(20)); // 元素20的索引为1
console.log(arr.indexOf(30)); // 元素30没有找到，返回-1
console.log(arr.indexOf('30')); // 元素'30'的索引为2

arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(aCopy === arr); // false

arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
console.log(arr); // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
console.log(arr); // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
console.log(arr); // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
console.log(arr); // []

arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
console.log(arr); // ['A', 'B', 1, 2]
arr.shift(); // 'A'
console.log(arr); // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
console.log(arr); // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
console.log(arr); // []

arr = ['B', 'C', 'A'];
arr.sort();
console.log(arr); // ['A', 'B', 'C']

arr = ['one', 'two', 'three'];
arr.reverse(); 
console.log(arr); // ['three', 'two', 'one']

arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
console.log(arr); // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added); // ['A', 'B', 'C', 1, 2, 3]
console.log(arr); // ['A', 'B', 'C']

arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-')); // 'A-B-C-1-2-3'

var arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr);