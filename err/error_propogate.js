'use strict';

function main(s) {
    console.log('BEGIN main()');
    try {
        foo(s);
    } catch (e) {
        console.log('wrong: ' + e);
    }
    console.log('END main()');
}

function foo(s) {
    console.log('BEGIN foo()');
    bar(s);
    console.log('END foo()');
}

function bar(s) {
    console.log('BEGIN bar()');
    console.log('length = ' + s.length);
    console.log('END bar()');
}

main(null);
