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

console.log(newUser.userName.UserFullName);