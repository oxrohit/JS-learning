/*
    PRIMITIVE DATATYPES

    Number, String, Boolean, null, undefined, Symbol, BigInt 

    NON-PRIMITIVE DATATYPES

    Array, Objects, Functions

*/



// +++++++++++++++++++++++++++++++++++++++++++ MEMOERY ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack => Primitive 

let myName = "Rohit"
let myLastName = "kumar"
myLastName = " singh"
console.log(myName + myLastName);

// Heap => Non-Primitive

let userOne = {
    id : 100,
    email : "User1@gmail.com",
}

let userTwo = userOne
userOne.email = "UserTwo@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
