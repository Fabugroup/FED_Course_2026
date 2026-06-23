import add from "./addition.js";
import sub from "./subtract.js";
import prod, {division as div} from "./multiply.js";

const res_Add = add(5,10);
console.log(`The result of the addition is: ${res_Add}`);

const res_sub = sub(5,10);
console.log(`The result of the subtraction is: ${res_sub}`);

const res_Prod = prod(5,10);
console.log(`The result of the multiplcation is: ${res_Prod}`);

const res_Div = div(5,0);
console.log(`The result of the division is: ${res_Div}`);
