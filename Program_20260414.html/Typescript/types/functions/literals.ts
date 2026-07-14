// literal type in TS

let direction: "left" | "right" | "up" | "down"
direction = "left" // ok
direction = "right" // ok
direction = "up" // ok
direction = "down" // ok
// direction = "forward" // error - becasue this was not assign 

function move(distance:number, direction: "left" | "right" | "up" | "down") {
console.log(distance, direction);
}

move(10,"left")
