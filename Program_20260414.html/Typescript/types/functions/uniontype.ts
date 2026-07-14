// union type on ts

let userid: string | number
userid = 123
userid = "123"
console.log(userid)
// userid - false  // compile time error

function printUserId(id: string | number) {
    console.log("Your User ID is " + id)
}
printUserId(203942)
printUserId("johnny")

// printUserId(true)  // compile error
