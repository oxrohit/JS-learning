function calculateCartPrice(...num1) {
    return console.log(num1);
}

// calculateCartPrice(100, 200, 399, 567, 899)



//                              Handling Objects

const user = {
    username : "Rohit",
    age : 18
}

function handleObjects(anyObjects) {
    console.log(`Hello my Name is ${anyObjects.username} and my age is ${anyObjects.age}`);
}

// handleObjects(user)  OR
// handleObjects({
//     username : "Mohit",
//     age : 19
// })



//                                Handling Arrays

const newArray = [100, 200, 300, 400, 500]

function getSecondArray(getArray) {
    return getArray[4]
}
console.log(getSecondArray(newArray));