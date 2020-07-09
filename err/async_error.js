'use strict';

function printTime() {
    throw new Error();
}

try {
    setTimeout(printTime, 1000);
    console.log('done');
} catch (e) {
    console.log('error');
}

// 原因就在于调用setTimeout()函数时，传入的printTime函数并未立刻执行！紧接着，JavaScript引擎会继续执行console.log('done');语句，而此时并没有错误发生。直到1秒钟后，执行printTime函数时才发生错误，但此时除了在printTime函数内部捕获错误外，外层代码并无法捕获。
// 所以，涉及到异步代码，无法在调用时捕获，原因就是在捕获的当时，回调函数并未执行。
