// optional parameters to a function
// there has to be a default value set to a parameter
// parameter for that to be optional

function prn(msg) {
  console.log(msg);
}

// function with optional parameters
function add(n1 = 1, n2 = 1) {
  prn(n1 + n2);
}

add(); // not passing any params so it use the default value
add(10);
add(10, 20);
add(10, 20, 30);
add(undefined, 20);
