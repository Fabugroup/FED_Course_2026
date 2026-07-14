// default parameter in a ts function

function welcome(name: string = "Johnny", age: number = 25) {
    // if (age) {
    console.log(`Hello ${name}, you are ${age} years old`)
//     }
// else {
    console.log(`Hello ${name}`)
// }
}

welcome()
welcome("John")
welcome("Alex", 23)
