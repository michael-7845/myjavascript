'use strict';
<!-- lang: js -->

var _ = require('underscore');
var log = _.bind(console.log, console);

var m1 = _.map([1, 2, 3], (x) => x * x); // [1, 4, 9]
var m2 = _.map({ a: 1, b: 2, c: 3 }, (v, k) => k + '=' + v); // ['a=1', 'b=2', 'c=3']

log(m1);
log(m2);
