'use strict';

console.log('------ stringify'); 
var xiaoming = {
    name: 'xiaoming',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(s);

console.log('------ stringify indent'); 
s = JSON.stringify(xiaoming, null, '  ');
console.log(s);

console.log('------ stringify function'); 
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
s = JSON.stringify(xiaoming, convert, '  ');
console.log(s);

console.log('------ stringify serialization'); 
xiaoming = {
    name: 'xiaoming',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
s = JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
console.log(s);

console.log('------ parse'); 
console.log(JSON.parse('[1,2,3,true]')); // [1, 2, 3, true]
console.log(JSON.parse('{"name":"xiaoming","age":14}')); // Object {name: '小明', age: 14}
console.log(JSON.parse('true')); // true
console.log(JSON.parse('123.45')); // 123.45

console.log('------ parse function'); 
var obj = JSON.parse('{"name":"xiaoming","age":14}', function (key, value) {
    if (key === 'name') {
        return 'dear ' + value;
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: 'dear xiaoming', age: 14}
