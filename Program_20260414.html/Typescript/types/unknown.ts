// unknown type in TS
// using for migrating JS to TS

let data: unknown;

data = 100;
data = "hello";

// console.log(data.toUpperCase()); // error

// type guard - check the type of data
if (typeof data === "string") {
  console.log(data.toUpperCase());
}

// user defined type guard

