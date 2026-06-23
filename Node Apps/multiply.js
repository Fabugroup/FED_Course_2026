export default function product(a , b){
    return a * b;
}

export function division(x , y){
    if ( y === 0)
    {throw new Error("Cannot divide by zero");
    }
    return x / y;
}