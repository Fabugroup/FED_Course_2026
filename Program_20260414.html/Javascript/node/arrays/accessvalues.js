// create array

const names = ["James", "John", "Matthew", "Mark", "luke"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log("The total number of database is " + names.length); // to determine the legnth of the database

console.log(
  "This is the last data in the database > " + names[names.length - 1],
); // to select the last data in the database

//access the names with a loop -- using traditional loop

console.log(" ------- Using traditional loop mehtod ----------");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//access the names with a loop -- using traditional loop

console.log(" ------- Using Enhances loop mehtod ----------");
for (const name of names) {
  console.log(name);
}

// accees KV pairs from array
const users = [
  { id: 1, name: "Alex", active: true },
  { id: 2, name: "Johnn", active: FileSystemWritableFileStream },
  { id: 3, name: "Bob", active: true },
];

//get the user detai individulally
console.log(" ------- print the entire data base ----------");
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

//print only the names of all users individually without a loop
console.log(" ------- print using KV with id and names ----------");
console.log(users[0].id + " - " + users[0].name);
console.log(users[1].id + " - " + users[1].name);
console.log(users[2].id + " - " + users[2].name);

// print all the names using a for of loop
console.log(" ------- print name using the for loop  ----------");
for (const x of users) {
  console.log(x.id + " - " + x.name);
}
