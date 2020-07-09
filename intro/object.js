var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
console.log(xiaoming.name); // '小明'
console.log(xiaoming.birth); // 1990

var xiaohong = {
    name: 'xiaohong',
    'middle-school': 'No.1 Middle School'
};
console.log(xiaohong['middle-school']); // 'No.1 Middle School'
console.log(xiaohong['name']); // '小红'
console.log(xiaohong.name); // '小红'

var xiaoming = {
    name: 'xiaoming'
};
console.log(xiaoming.age); // undefined
xiaoming.age = 18; // 新增一个age属性
console.log(xiaoming.age); // 18
delete xiaoming.age; // 删除age属性
console.log(xiaoming.age); // undefined
delete xiaoming['name']; // 删除name属性
console.log(xiaoming.name); // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
console.log('name' in xiaoming); // true
console.log('grade' in xiaoming); // false
console.log('toString' in xiaoming); // true
console.log(xiaoming.hasOwnProperty('name')); // true
console.log(xiaoming.hasOwnProperty('toString')); // false
