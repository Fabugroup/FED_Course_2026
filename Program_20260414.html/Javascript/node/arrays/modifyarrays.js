// create an empty array

const names = [];

// add elements to array
console.log(" ----------- Adding data using index ----------");
names[0] = "John";
names[1] = "James";
names[2] = "Mark";
names[3] = "Matthew";
names[3] = "Matthew";
names[4] = "Luke";
names[1] = "Paul"; // will overwrite the previous data

console.log(names);

console.log(" ----------- Adding data using push method ----------");

names.push("Jimmy");
console.log(names);

console.log(" ----------- Adding data using unshift method ----------");

names.unshift("Andrew"); // will add in the new data to the front o fthe database
console.log(names);

console.log(" ----------- Adding data using splice method ----------");

names.splice(1, 0, "Ian"); // will add in the new data to the front o fthe database
console.log(names);

names.splice(1, 1, "Vincent"); // the second number will replace the number of items from the insert point (first number) prior to inserting teh new data
console.log(names);

console.log(" ----------- Adding data using pop method ----------");
// pop method removes an element from the end
let temp = names.pop();
console.log(temp + " has been removed");
console.log(names);

console.log(" ----------- Adding data using shift method ----------");
// shift method removes an element from the front
let temp1 = names.shift();
console.log(temp1 + " has been removed");
console.log(names);

console.log(" ----------- using sort method ----------");
// sort the elemtns in the array
names.sort();
console.log(names);

console.log(" ----------- using reverse method ----------");
// sort the elemtns in the array
names.reverse();
console.log(names);

console.log(" ----------- using concat method ----------");
// combing 2 arrays
let x = ["a", "b", "c"];
let y = ["d", "e", "f"];
let z = x.concat(y);
console.log(z);

console.log(" ----------- using join method ----------");
// returns a string equipvalent of the array elements
const tempArray = x.join("-");
console.log(tempArray);

console.log(" ----------- using map method ----------");
// performs operations on the array elements
const nums = [1, 2, 3, 4, 5];
const res = nums.map((x) => x + 2);
console.log(res);

console.log(" ----------- using filter method ----------");
// performs operations on the array elements
const res2 = nums.filter((x) => x % 2 == 0);
console.log(res2);
