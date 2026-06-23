// a object that can hold any number of values
// In Javascript, arryas are Heterogeneous, meaning they can hold values of different data types
// In Javascript, arrays are dynamic, meaning they can grow and shrink in size as needed
// zero based indexing, meaning the first element of the array is at index 0

// various way of declaring arrays

const names = []; // creates an empty array
const cars = ["Toyota", "Honda", "Ford"]; // creates an array with 3 elements

const num = [1, 2, 3, 4, 5];
const bools = [true, false, true, false, true];

// arrays with KV (Key va;ue) property
// Homogenous type array

const users = [
  // THe { } is the KV proprty
  { id: 1, name: "ALex", active: true },
  { id: 2, name: "John", active: false },
  { id: 3, name: "Bob", active: true },
  { id: 4, name: "Simon", active: true },
];

// array with hetrogenous types

const data = [10, "Sara", false, true, null, undefined, { name: "Johnny" }];
