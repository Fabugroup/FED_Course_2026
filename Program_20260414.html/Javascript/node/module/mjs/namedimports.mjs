import { add,diff } from "./namedexports.mjs";

console.log(add(10,20));
console.log(diff(10,20));

// importing using alises
import { add as x, diff as d } from "./namedexports.mjs";

console.log(x(10,20));
console.log(d(10,20));