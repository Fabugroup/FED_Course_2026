// 3 types of loops in JS

// while loop
// do while loop
// for loop

// loops variable
// exit condition
// iteration of the loop variable's value

// using all 3 loops types, print numners from 1 to 10

// while loop
console.log(" -------------- While Loop-------------------");
let i = 0,
  res = "";
while (i <= 10) {
  console.log("i = " + i);
  res += i + " ";
  i++;
}
console.log("i: " + res);

// do while loop
console.log(" -------------- Do While Loop ------------------ ");
let j = 0,
  res2 = "";
do {
  console.log("j = " + j);
  res2 += j + " ";
  j++;
} while (j <= 10);
console.log("J: " + res2);

// for loop
console.log(" -------------- For Loop ------------------ ");
let res3 = "";
for (let k = 0; k <= 10; k++) {
  console.log("k = " + k);
  res3 += k + " ";
}
console.log("k: " + res3);
