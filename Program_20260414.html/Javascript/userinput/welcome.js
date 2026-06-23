// Command line user input in JavaScript
const realine = require("readline");

// Create an interface to read data from STD-IN and write to STD-OUT (stdin & stdout)
const rl = realine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// prompt the user for the input
rl.question("What is your name? ", (name) => {
  // print the name
  console.log(`Hello ${name}`);
  rl.close();
});
