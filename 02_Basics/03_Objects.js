//          OBJECTS

const mySym = Symbol("Key1")

const newUser = {
    name : "Rohit",
    [mySym] : "mysym1",
    email : "Rohit@google.com",
    isLoogedIn : false,
    Nationality : "Indian"
}

// console.log(user["name"]);
// console.log(user[mySym]);

// user.email = "Rohit@microsoft.com"
// Object.freeze(user)
// user.email = "Rohit@google.com"
// console.log(user);

//          FUNCTION

newUser.greet = function () {
    console.log("Hello New User.");
}
console.log(newUser.greet());



newUser.greetings = function () {
    console.log(`Hello New User, ${this.name}`);
} 

console.log(newUser.greetings());