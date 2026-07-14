"use strict";
// functoins with a return type specified
function sayHello(name) {
    return `hello ${name}`;
}
console.log(sayHello("johnny"));
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("johnny");
// return is not allowed for void function
