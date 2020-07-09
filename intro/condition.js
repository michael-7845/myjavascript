var age = 20;
if (age >= 18) { // 如果age >= 18为true，则执行if语句块
    console.log('adult');
} else { // 否则执行else语句块
    console.log('teenager');
}

age = 20;
if (age >= 18)
    console.log('adult');
else
    console.log('teenager');

age = 3;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}

//JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。
var a 
if(a) console.log(a);
a = null
if(a) console.log(a);
a = 0
if(a) console.log(a);
a = NaN
if(a) console.log(a);
a = ''
if(a) console.log(a);

