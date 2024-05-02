//                  FUNCTIONS BASCIS

//declare
function myName() {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

//function Calling
// myName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    //let result = num1 + num2
    return num1 + num2 
}
const result = addTwoNumbers(3 , 4)
// console.log(result);




function userlogging(username) {

    return `Welcome ${username}, You just logged in.` 
}

// console.log(userlogging("Rohit"));


function userlogging(username = "John Doe") {
    if (!username) {
        console.log("Please Enter a Valid Username");
        return
    }
    return `Welcome ${username}, You just logged in.` 
}

console.log(userlogging("Rohit"));