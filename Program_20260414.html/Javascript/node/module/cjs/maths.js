// calculator function with add, subtract, mulitple and divide

function add(x,y){
    return x + y;
}   

function subtract(x,y){
    return x - y;
}   

function multiply(x,y){
    return x * y;
}  

function divide(x,y){
    return x / y;
} 

// export the function to and then imported and used in other js files
module.exports = { add, subtract, multiply, divide};

// const math = require("./maths.js");

// console.log(math.add(10,20));