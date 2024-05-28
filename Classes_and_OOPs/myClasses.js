
// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Rohit", "Rohit@abc.com", "RRR11")

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


// Behind the Scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}` ;
}

const user1 = new User("Mohit", "Mohit@abc.com", "Mohit12")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());