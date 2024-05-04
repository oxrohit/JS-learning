const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (item) => {return item + 10})

// const newNums = myNums.forEach(item => {
//     console.log(item + 10)
// });



// Chaining

const newNums = myNums
                    .map( (item) => item * 10)
                    .map( (item) => item + 1)
                    .filter( (item ) => item > 50)


console.log(newNums);