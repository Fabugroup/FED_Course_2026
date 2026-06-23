function add(...n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

function diff(...n) {
  let diff = n[0];
  for (let i = 1; i < n.length; i++) {
    diff -= n[i]; // this is the same formula as diff = diff - n[i]
  }
  return diff;
}

function prod(...n) {
  let prod = 0;
  for (let i = 0; i < n.length; i++) {
    prod -= n[i]; // this is the same formula as diff = diff - n[i]
  }
  return prod;
}

function prod(...n) {
  let prod = 1;
  for (let i = 0; i < n.length; i++) {
    prod *= n[i];
  }
  return prod;
}

function div(...n) {
  let div = n[0];
  for (let i = 1; i < n.length; i++) {
    div /= n[i];
  }
  return div;
}

console.log("--------- Calculate - Addition ----------");
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));

console.log("--------- Calculate - Substraction ----------");
console.log(diff(10, 20));
console.log(diff(10, 20, 30));
console.log(diff(10, 20, 30, 40));
console.log(diff(-10, 20));
console.log(diff(-10, -20));

console.log("--------- Calculate - Multiplication ----------");
console.log(prod(10, 20));
console.log(prod(10, 20, 30));
console.log(prod(10, 20, 30, 40));
console.log(prod(-10, 20));
console.log(prod(-10, -20));

console.log("--------- Calculate - Division ----------");
console.log(div(10, 20));
console.log(div(10, 20, 30));
console.log(div(10, 20, 30, 40));
console.log(div(-10, 20));
console.log(div(-10, -20));
