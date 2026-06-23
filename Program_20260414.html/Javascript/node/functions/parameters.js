// function without a parameter / argument

// strings
function sayHello() {
  console.log("Hello");
}

sayHello();

// function with a parameter
function greet(name) {
  console.log("Hello " + name);
}

greet("John");
greet("Alex");
greet(10); // this is allow in JS but fundamentally it should not be allow.
// Today "Typescript" is create to control this.

// function with 2 parameters
function add(x, y) {
  console.log(x + y);
}

add(10, 20);
add(10.25, 10.55);
add("hello", " world"); // this becoming concatenation

// vanilla > pure javascript. terms people use in the industry

// print multiplication table
function printMultiplicationTable(num) {
  let isValueNum = typeof num === "number";
  if (isValueNum) {
    console.log("Multiplication table for " + num);
    for (let i = 1; i <= 10; i++) {
      console.log(num + " * " + i + " = " + num * i);
    }
  } else {
    console.log("Invalid value");
  }
}

printMultiplicationTable(5);

//
