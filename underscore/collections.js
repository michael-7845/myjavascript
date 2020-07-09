'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

var arr = ['abc', 'defg', 'hijkl', 'nopqrs', 'tuvwxyz']

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

log('map');
var upper = _.map(arr, function (value) {
    return value.toUpperCase();
});
console.log(JSON.stringify(upper));

upper = _.map(obj, function (value, key) {
    return `${key.toUpperCase()} : ${value.toUpperCase()}`;
});
console.log(JSON.stringify(upper));

log('mapObject');
upper = _.mapObject(obj, function (value, key) {
    return value.toUpperCase();
});
console.log(JSON.stringify(upper));

log('filter');
var filtered = _.filter(arr, function(value) {
	return value.length > 5; 
});
console.log(JSON.stringify(filtered));

filtered = _.filter(obj, function (value, key) {
    return value.length > 10;
});
console.log(JSON.stringify(filtered));

log('every some');
// 所有元素都大于0？
log(_.every([1, 4, 7, -3, -9], (x) => x > 0)); // false
// 至少一个元素大于0？
log(_.some([1, 4, 7, -3, -9], (x) => x > 0)); // true

var r1 = _.every(obj, function (value, key) {
    return (value.toLowerCase() === value) && (key.toLowerCase() === key);
});
var r2 = _.some(obj, function (value, key) {
    return (value.toLowerCase() === value) && (key.toLowerCase() === key);
});
log(r1, r2);

log('max min')
var arr = [3, 5, 7, 9];
log(_.max(arr)); // 9
log(_.min(arr));; // 3

// 空集合会返回-Infinity和Infinity，所以要先判断集合不为空：
log(_.max([]));
log(_.min([]));
// 如果集合是Object，max()和min()只作用于value，忽略掉key
log(_.max({ a: 1, b: 2, c: 3 })); // 3

log('groupBy');
var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
log(groups);

// 注意每次结果都不一样：
log(_.shuffle([1, 2, 3, 4, 5, 6])); // [3, 5, 4, 6, 2, 1]
// 随机选1个：
log(_.sample([1, 2, 3, 4, 5, 6])); // 2
// 随机选3个：
log(_.sample([1, 2, 3, 4, 5, 6], 3)); // [6, 1, 4]

// 更多完整的函数请参考underscore的文档：http://underscorejs.org/#collections
