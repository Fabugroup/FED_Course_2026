// function Overloading
// function overload is the concept of having multiple functions
// 1. with same name
// 2. different nuber fo arguments

function prn(msg) {
  console.log(msg);
}

function add(x, y) {
  prn(x + y);
}

function add(x, y, z) {
  prn(x + y + z);
}

function add(x, y, z, a) {
  prn(x + y + z + a);
}

// using Rest parameters
function add(...n) {
  // var args representing an array
  // n[]
  // sum the elements in array

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  prn(sum);
}

prn("--------- Function Overloading ----------");
add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40); // if there are multiple function with the same name, only the last function is active
add(10, 20, 30, 40, 50);
add(10, 20, 30, 40, 50, 60, 70);

//
