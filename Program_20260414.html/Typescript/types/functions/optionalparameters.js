"use strict";
// optional parameter in. a function
function welcome(name, age) {
    if (age) {
        console.log(`Hello ${name}, you are ${age} years old`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
welcome("John");
welcome("John", 23);
