const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc : ${acc} and curVal ${curVal}`);
//     return acc + curVal
// }, 0)

// const myTotal = myNums.reduce( (acc, curVal) => acc + curVal, 0)



const shoppingCart = [
    {
        item : "Novel Book",
        price : 399
    },
    {
        item : "History Book",
        price : 599
    },
    {
        item : "Science book",
        price : 799
    },
    {
        item : "Fiction Book",
        price : 999
    },
]

const myTotal = shoppingCart.reduce( (acc, item) => acc + item.price ,0)

console.log(myTotal);