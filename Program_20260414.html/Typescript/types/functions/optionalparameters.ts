// optional parameter in. a function

function welcome(name: string, age?: number) {. // age is optional (?)
    if (age) {
        console.log(`Hello ${name}, you are ${age} years old`)
    }
    else {
        console.log(`Hello ${name}`)
    }

}

welcome("John")
welcome("John", 23)
    

    