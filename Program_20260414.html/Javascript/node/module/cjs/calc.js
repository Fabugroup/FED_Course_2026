// import module to be use on another js file
// by import the maths.js module

const {add, subtract, multiply, divide} = require("../cjs/maths");

console.log(add(10,20));
console.log(subtract(10,20));
console.log(multiply(10,20));
console.log(divide(10,20));

// const math = require("./maths.js");

// console.log(math.add(10,20));