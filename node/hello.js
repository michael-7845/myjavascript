'use strict';

// var s = 'Hello';

// function greet(name) {
//     console.log(s + ', ' + name + '!');
// }

// module.exports = greet;

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet
};

// exports.hello = hello;
// exports.greet = greet;
