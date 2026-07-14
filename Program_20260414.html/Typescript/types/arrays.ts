let numbers: number[] = [1, 2, 3, 4, 5];
// numbera = {"10", 20, 30} // compile time eroor
console.log(numbers);

let names: string[] = ["johnny", "alex", "bob"];
console.log(names);
 
let data = [10, "Hi", true, 45.5];  // type infereed as any[]
data = [true, 2, "4"]; // no compil etime error but may lead to runtime errpr
console.log(typeof data);
