// const userEmail = "Rohit@gmail.com"

const userEmail = []

// if (userEmail) {
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User");
// }

/*
    Falsy Values

    false, 0, -0, null , undefined, BigInt 0n, NaN, ""

    
    Truthy values

    "0", 'false', " ", [], {}, function () {}
*/



// Check if Array is empty or not

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



// Check if Object is empty or not

const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

//Nullish coalescing Operator (??): null undefined

let val1;
// let val1 = 5 ?? 10
// let val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);



// Ternery Operator
// condition ? true : false

const movieTicket = 500

movieTicket < 1000 ? console.log("Okay, i'll buy") : console.log("No, i'm not gonna buy");