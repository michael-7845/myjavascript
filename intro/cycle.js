console.log('for ...');
var x = 0;
var i;
for (i=1; i<=10000; i++) {
    x = x + i;
}
console.log(x);

console.log('for array');
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

console.log('for object');
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}

console.log('for array');
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}

console.log('while ...');
x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x); // 2500
