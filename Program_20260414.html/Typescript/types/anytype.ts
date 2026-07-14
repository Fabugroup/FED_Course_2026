// any type can accomdate all types
// jusst like the js varianles

// backward compatibility and east migratoin from js to ts are some reasons for using any type

let x: any = 10;
console.log(x);

x = "hello";
console.log(x);

x = true;
console.log(x);

x = [1, 2, 3];
console.log(x);

x = { name: "johnny", age: 25, active: true };
console.log(x);
