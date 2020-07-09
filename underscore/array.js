'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

log('first / last');
// 顾名思义，这两个函数分别取第一个和最后一个元素：
var arr = [2, 4, 6, 8];
log(_.first(arr)); // 2
log(_.last(arr)); // 8

log('flatten'); 
// flatten()接收一个Array，无论这个Array里面嵌套了多少个Array，flatten()最后都把它们变成一个一维数组：
log(_.flatten([1, [2], [3, [[4], [5]]]])); // [1, 2, 3, 4, 5]

log('zip / unzip');
// zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。例如，你有一个Array保存了名字，另一个Array保存了分数，现在，要把名字和分数给对上，用zip()轻松实现：
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
log(_.zip(names, scores));
// [['Adam', 85], ['Lisa', 92], ['Bart', 59]]

log('unzip');
// unzip()则是反过来：
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
log(_.unzip(namesAndScores));
// [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]

log('object');
// 有时候你会想，与其用zip()，为啥不把名字和分数直接对应成Object呢？别急，object()函数就是干这个的：
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
log(_.object(names, scores));
// {Adam: 85, Lisa: 92, Bart: 59}
// 注意_.object()是一个函数，不是JavaScript的Object对象。

log('range');
// range()让你快速生成一个序列，不再需要用for循环实现了：
// 从0开始小于10:
log(_.range(10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 从1开始小于11：
log(_.range(1, 11)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 从0开始小于30，步长5:
log(_.range(0, 30, 5)); // [0, 5, 10, 15, 20, 25]
// 从0开始大于-10，步长-1:
log(_.range(0, -10, -1)); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// 更多完整的函数请参考underscore的文档：http://underscorejs.org/#arrays
