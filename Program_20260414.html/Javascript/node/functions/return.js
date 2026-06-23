// a function can have a return value
// if return is omitted then the functinois called voild function
// (not returning anything)
// the return statement in a function is the last statement to be executed
// any statement after the retunr statement is not executed.

// add function with a return statement
function add(x, y) {
  return x + y;
  console.log("this is not going to be shown"); // dead code
}

add(10, 20); // the return value is not consumed
console.log(add(10, 20)); // the return value is consumed

let res = add(100, 200); // the retung value is consumed into the variable
console.log(res);

// nesting function
res = add(add(10, 20), add(30, 40));
console.log(res);
