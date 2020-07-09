'use strict';

console.log('declare class');
// 新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。
// 我们先回顾用函数实现Student的方法：
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello = function () {
//     alert('Hello, ' + this.name + '!');
// }

// 如果用新的class关键字来编写Student，可以这样写：
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

// 比较一下就可以发现，class的定义包含了构造函数constructor和定义在原型对象上的函数hello()（注意没有function关键字），这样就避免了Student.prototype.hello = function () {...}这样分散的代码。
// 最后，创建一个Student对象代码和前面章节完全一样：

var xiaoming = new Student('xiaoming');
console.log(xiaoming.name);
xiaoming.hello();

console.log('inherite class');
// class继承
// 用class定义对象的另一个巨大的好处是继承更方便了。想一想我们从Student派生一个PrimaryStudent需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过extends来实现：
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

// 注意PrimaryStudent的定义也是class关键字实现的，而extends则表示原型链对象来自Student。子类的构造函数可能会与父类不太相同，例如，PrimaryStudent需要name和grade两个参数，并且需要通过super(name)来调用父类的构造函数，否则父类的name属性无法正常初始化。
// PrimaryStudent已经自动获得了父类Student的hello方法，我们又在子类中定义了新的myGrade方法。
// ES6引入的class和原有的JavaScript原型继承有什么区别呢？实际上它们没有任何区别，class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。简而言之，用class的好处就是极大地简化了原型链代码。
xiaoming = new PrimaryStudent('xiaoming', 1);
console.log(xiaoming.name);
xiaoming.hello();
xiaoming.myGrade();

console.log('exercise');
class Animal {
	constructor(name) {
		this.name = name; 
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	say(what) {
		console.log(`Hello, ${what}!`);
	}
}

var animal = new Animal('kitty');
console.log(animal.name);
var cat = new Cat('kitty');
console.log(cat.name);
cat.say('guy');
