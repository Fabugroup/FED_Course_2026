// functoins with a return type specified

function sayHello(name: string  ): string{  // compelling the return type to be string
    return `hello ${name}`
}
console.log(sayHello("johnny"))

function add(a:number, b: number): number {
    return a + b
}

console.log(add(1,2))


function greet(name: string): void {
    console.log(`Hello ${name}`)
}
greet("johnny")

// return is not allowed for void function
