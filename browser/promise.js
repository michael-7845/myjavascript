'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

new Promise(function () {});




function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

// log('not use promise');
// function resolve(message) { log(message); }
// function reject(message) { log(message); }
// test(resolve, reject);

// log('use promise');
// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
//     console.log('success: ' + result);
// });
// var p3 = p2.catch(function (reason) {
//     console.log('fail: ' + reason);
// });

// log('use promise in chain');
// new Promise(test).then(result => log('success: ' + result)).catch(reason => log("fail: " + reason))

// log('use promise all in one');
// new Promise(function(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }).then(result => log('success: ' + result)).catch(reason => log("fail: " + reason))

// log('use promise multiple job')
// // 0.5秒后返回input*input的计算结果:
// function multiply(input) {
//     return new Promise(function (resolve, reject) {
//         log('calculating ' + input + ' x ' + input + '...');
//         setTimeout(resolve, 500, input * input);
//     });
// }

// // 0.5秒后返回input+input的计算结果:
// function add(input) {
//     return new Promise(function (resolve, reject) {
//         log('calculating ' + input + ' + ' + input + '...');
//         setTimeout(resolve, 500, input + input);
//     });
// }

// var p = new Promise(function (resolve, reject) {
//     log('start new Promise...');
//     resolve(2);
// });

// p.then(multiply)
//  .then(add)
//  .then(multiply)
//  .then(add)
//  .then(function (result) {
//     log('Got value: ' + result);
// });

log('use promise synchronize run asynchronous job')
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'P3');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2, p3]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
// 多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。
Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 'P1'
});