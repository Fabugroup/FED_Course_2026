// calculator function with add, subtract, mulitple and divide

function add(x,y){
    return x + y;
}   

function subtract(x,y){
    return x - y;
}   

function multiply(x,y){
    return x * y;
}  

function divide(x,y){
    return x / y;
} 

// export the function to and then imported and used in other js files
// 
// module.exports = { add }  

module.exports.add = add;

