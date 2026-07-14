let str = "HELLO";
let len = str.length;
console.log(len);

let temp = 0;
x = 0;
str = str.toLowerCase();

while (temp < str.length) {
  if (
    str[temp] == "a" ||
    str[temp] == "e" ||
    str[temp] == "i" ||
    str[temp] == "o" ||
    str[temp] == "u"
  ) {
    x++;
  }
  temp++;
}
console.log("There are " + x + " vowels in the string");
