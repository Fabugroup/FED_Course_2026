// break and contunue

console.log("------------------- break -------------------");

for (let i = 1; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}

// when break is encoutered, the loop will stop and exit the loop

console.log("------------------- continue -------------------");

for (let i = 1; i < 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// when continue is encoutered, the current iteration will be skipped and the loop will continue to the next iteration
