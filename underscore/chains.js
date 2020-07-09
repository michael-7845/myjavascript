'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

// 还记得jQuery支持链式调用吗？
// $('a').attr('target', '_blank')
//       .append(' <i class="uk-icon-external-link"></i>')
//       .click(function () {});

// 如果我们有一组操作，用underscore提供的函数，写出来像这样：
log(_.filter(_.map([1, 4, 9, 16, 25], Math.sqrt), x => x % 2 === 1));
// [1, 3, 5]

// 能不能写成链式调用？
// 能！
// underscore提供了把对象包装成能进行链式调用的方法，就是chain()函数：
var r = _.chain([1, 4, 9, 16, 25])
         .map(Math.sqrt)
         .filter(x => x % 2 === 1)
         .value();
console.log(r); // [1, 3, 5]

// 因为每一步返回的都是包装对象，所以最后一步的结果需要调用value()获得最终结果。
