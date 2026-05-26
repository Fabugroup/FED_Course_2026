import x from "./defaultexport.mjs";
console.log(x(10,20));

import add, { diff, prod} from "./defaultexport.mjs";
console.log(add(10,20));
console.log(diff(10,20));
console.log(prod(10,20));

// using aliases
import anything, { diff as something, prod as everything} from "./defaultexport.mjs";
console.log("import but using alises code");
console.log(anything(10,20));
console.log(something(10,20));
console.log(everything(10,20));