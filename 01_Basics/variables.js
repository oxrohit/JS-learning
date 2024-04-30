const userId = 255
let userEmail = "rohit@google.com"
var userPassword = "12345" // also avoid this.
userCity = "Delhi"
let userState;

/*

perfer not to use var
because of issue in block scope and functional scope
*/

// userId = 200 // this is not allowed

userEmail = "Rohit@microsoft.com"
userPassword = "23243"
userCity = "Noida"

// console.log(userId)
console.table([userId, userEmail, userPassword, userCity, userState])