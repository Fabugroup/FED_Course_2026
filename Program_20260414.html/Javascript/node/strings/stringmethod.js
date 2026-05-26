// strong methods

console.log("---------- String Methods ----------------");

let str = "singapore";
console.log(str);

// toUpperCase()
console.log(" --- to Upper Case -----");
// method 1
console.log(str.toUpperCase());

// method 2
upperStr = str.toUpperCase();
console.log(upperStr);

console.log(" --- to Lower Case -----");
// toLowerCase()
console.log(upperStr.toLowerCase());

// boolean methods
console.log(str.startsWith("sing"));
console.log(str.includes("sing"));
console.log(str.endsWith("pore"));

console.log(str.indexOf("a")); // give back the position of the character
console.log(str.indexOf("f")); // if character is not present, the result will be -1
console.log(str.indexOf("S")); // the serach is case sensitive

str = "Hello";
console.log(str.indexOf("l")); // where there is 2 same character, it will give you the resut of the first character position
console.log(str.lastIndexOf("l")); // where there is 2 same character, it will give you the resut of the last character position

str = "Hello World";
console.log(str.slice(0, 5));
console.log(str.substring(5, 9));

console.log(str.replace("Hello", "Hi"));

str = "     Hello";
console.log(str.length); // calculate the lenght include the space
console.log(str.trim().length); // trim away the space

// convert string to array
str = "x, y, z";
console.log(str.split(",")); // converting string to array

str = "x y z";
console.log(str.split(" ")); // conveting string to array

//  cmopare string
console.log("hello" > "world");

// get the ascii code of a character
str = "Hello";
console.log(str.charCodeAt(0));
