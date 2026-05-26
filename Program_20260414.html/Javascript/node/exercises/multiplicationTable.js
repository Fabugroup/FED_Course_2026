let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

console.log(" ---- print number from 10 to 1 ----");
let res = "";

for (let y = 10; y >= 1; y--) {
  res += y + " ";
}
console.log(res);

console.log(
  " ---- print fibonacci series till 100 ( 0 1 1 2 3 5 8 13 ...) ----",
);
let g = 1,
  h = 0,
  res1 = "";

for (let f = 0; f <= 100; f = g + h) {
  h = g;
  g = f;
  res1 += f + " ";
}
console.log(res1);

console.log(" ---- print all odd numbers between 1 and 100 ----");
let res2 = "";

for (let d = 1; d <= 100; d = d + 2) {
  res2 += d + " ";
}
console.log(res2);

console.log(" ---- print all even numbers between 1 and 100 ----");
let res3 = "";

for (let e = 0; e <= 100; e = e + 2) {
  res3 += e + " ";
}
console.log(res3);

console.log(" ---- print all prime numbers between 1 and 100 ----");
let res4 = "";

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    res4 += i + " ";
  }
}
console.log(res4);
