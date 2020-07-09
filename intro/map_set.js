'use strict';
var m = new Map();
var s = new Set();
console.log('support map and set!');

console.log('map');
var names = ['Michael', 'Bob', 'Tracy'];
var scores = [95, 75, 85];

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
console.log(m); 

m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
console.log(m.has('Adam')); // 是否存在key 'Adam': true
console.log(m.get('Adam')); // 67
m.delete('Adam'); // 删除key 'Adam'
console.log(m.get('Adam')); // undefined
console.log(m); 

var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
console.log(m.get('Adam')); // 88
console.log(m); 

console.log('set'); 
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

var s = new Set([1, 2, 3, 3, '3']);
console.log(s); // Set {1, 2, 3, "3"}

s.add(4);
console.log(s); // Set {1, 2, 3, 4}
s.add(4);
console.log(s); // 仍然是 Set {1, 2, 3, 4}

s = new Set([1, 2, 3]);
console.log(s); // Set {1, 2, 3}
s.delete(3);
console.log(s); // Set {1, 2}
