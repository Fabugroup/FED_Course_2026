// logical AND (&&)
// logical OR (||)
// logical NOT (!)

let salary = 10000;
let dept = "Sales";

// for every employee in slaes having current salaty more than 500, increment by 1000

if (salary > 5000 && dept === "Sales") {
  salary += 1000;
}
console.log(salary);

if (salary > 5000 || dept === "Sales") {
  salary += 1000;
}
console.log(salary);

let x = 10;
y = 20;
console.log(x < y);
console.log(!(x < y));
