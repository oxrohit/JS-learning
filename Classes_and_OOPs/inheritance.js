class User1{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

}

class Teacher extends User1{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const name = new Teacher("Rohit", "Rohit@abc.com", "123")

name.logMe()

const name2 = new User1("Mohit");
name2.logMe()
console.log(name instanceof User1);
