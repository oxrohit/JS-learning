const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(myNums)
//     }
// })

// console.log(myNums);


const myBooks = [
    {title : "Books 1", genre : "Fiction", publish : "1989", edition : "2000"},
    {title : "Books 2", genre : "Science", publish : "1991", edition : "2002"},
    {title : "Books 3", genre : "Novel", publish : "1993", edition : "2004"},
    {title : "Books 4", genre : "History", publish : "1995", edition : "2006"},
    {title : "Books 5", genre : "Novel", publish : "1997", edition : "2006"},
];

let userBooks = myBooks.filter( (bk) => bk.genre === "Novel")

userBooks = myBooks.filter( (bk) => {
    return bk.publish >= 1993 && bk.genre === "History"
})

console.log(userBooks);