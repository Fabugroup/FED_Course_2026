function greet(name: string){
    return `hello ${name}`
}
console.log(greet("Johnny"))
// greet(123) // compile time error

function add(a: number, b: number){
    return a + b
}
console.log(add(1,2));
console.log(add(187,288));
// console.loog(add("1","2")) // compile time error;
