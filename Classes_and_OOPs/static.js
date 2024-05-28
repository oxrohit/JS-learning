class User{
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const name = new User("Rohit")

// console.log(name.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const name2 = new Teacher("Mohit", "Mohit@abc.com")

console.log(name2.createId());