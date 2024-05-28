class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    
    set password(pass){
        return this._password = pass
    }
}

const u1 = new User("rohit@abc.com", "rohit@123")

console.log(u1.password);