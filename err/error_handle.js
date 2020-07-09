'use strict'; 

var r1, r2, s = null;
try {
    r1 = s.length; // 此处应产生错误
    r2 = 100; // 该语句不会执行
} catch (e) {
    console.log('wrong: ' + e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined

// 所以，有错误发生时，执行流程像这样：
//     先执行try { ... }的代码；
//     执行到出错的语句时，后续语句不再继续执行，转而执行catch (e) { ... }代码；
//     最后执行finally { ... }代码。

// 而没有错误发生时，执行流程像这样：
//     先执行try { ... }的代码；
//     因为没有出错，catch (e) { ... }代码不会被执行；
//     最后执行finally { ... }代码。

// 最后请注意，catch和finally可以不必都出现。也就是说，try语句一共有三种形式：

// 完整的try ... catch ... finally：
// try {
//     ...
// } catch (e) {
//     ...
// } finally {
//     ...
// }

// 只有try ... catch，没有finally：
// try {
//     ...
// } catch (e) {
//     ...
// }

// 只有try ... finally，没有catch：
// try {
//     ...
// } finally {
//     ...
// }

// var r, n, s;
// try {
//     s = prompt('input a number');
//     n = parseInt(s);
//     if (isNaN(n)) {
//         throw new Error('wrong input');
//     }
//     // 计算平方:
//     r = n * n;
//     console.log(n + ' * ' + n + ' = ' + r);
// } catch (e) {
//     console.log('wrong: ' + e);
// }
