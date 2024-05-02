// THIS function

const userDetails = {
    username : "Rohit",
    email : "Rohit@gmail.com",

    welcomeMessage: function name(params) {
        console.log(`Welcome ${this.username}, to our Website.`);
    }
}

// userDetails.welcomeMessage()

// userDetails.username = "Mohit"
// userDetails.welcomeMessage()



// Using Arrow function

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// Implicite Return

const addTwo = (num1 ) =>  num1 ** num1

console.log(addTwo(3));