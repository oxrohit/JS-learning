const redditUser = new Object()

redditUser.id = "35498"
redditUser.name = "Rohit"
redditUser.isValidUser = true

// console.log(redditUser);


const newUser = {
    id : "74648",
    userName: {
        UserFullName: {
            fristName : "Rohit",
            middleName : "Kumar",
            lastName : "singh"
        }
    }
}

// console.log(newUser.userName.UserFullName);

// Merging Two or more Objects

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id : 9878,
        name : "Rohit",
        email : "Rohit@gmail.com"
    },
    {
        id : 9879,
        name : "Mohit", 
        email : "Mohit@gmail.com"
    }
]

// console.log( users[0].name);



console.log(redditUser);
console.log(Object.keys(redditUser));
console.log(Object.values(redditUser));
console.log(Object.entries(redditUser));
console.log(redditUser.hasOwnProperty('add'));