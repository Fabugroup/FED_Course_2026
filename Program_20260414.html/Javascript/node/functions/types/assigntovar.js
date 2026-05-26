// a functin can be assigned to a variable
// in such event the function becomes annonymous
// the function can be involved with the variable names

let greet = function () {
  console.log("Welcome to annoymous function");
};

// invole the variable as a function
greet();

// annonymous with parameters
let sayHello = function (name) {
  console.log(`Hello ${name}`);
};

sayHello("John");
