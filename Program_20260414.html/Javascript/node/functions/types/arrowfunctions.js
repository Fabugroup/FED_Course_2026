//. AQrrow functions
// simple arrow function without a argument and no retun
// one line of code in teh function no {} is needed

const greet = () => console.log("Hello");
greet();

// equivalent
// function greet() {console.log("hello")}

// this are use normally where you want to reduce the number of line

const square = (a) => a * a;
console.log(square(5));
square(5);

let res = square(5);
console.log(res);

// simple arrow functions with multiple arguments
const add = (n, m) => n + m;
console.log(add(10, 20));

// equivalent to
// function add(m,m) { return (n+m)}

// multiple statements
const calculate = (...n) => {
  let res = 0;
  for (i = 0; i < n.length; i++) {
    res += n[i];
  }
  return res;
};

// it makes no sense to write a aarow function as you are writing with so manu lines

console.log(calculate(10, 20, 30, 40, 50));

// string use case
const up = (str) => str.toUpperCase();
console.log(up("hello"));

// array functoin with arrays
const salaries = [2000, 3000, 4000, 5000];
const salIncrement = salaries.map((salary) => salary + 1000);
console.log(salIncrement);

const totalSalarySpend = salaries.reduce((total, salary) => total + salary);
console.log(totalSalarySpend);

const filtersalaries = salaries.filter((salary) => salary > 3000);
console.log(filtersalaries);

const cities = ["delhi", "Singapore", "New York"];
cities.forEach((city) => console.log(city));
