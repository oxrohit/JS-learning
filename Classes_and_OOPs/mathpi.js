const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const admin= {
    User: "Admin",
    loginUsername: "admin",
    loginPassword: "Admin@123"
}

// console.log(Object.getOwnPropertyDescriptor(admin, "User"));

Object.defineProperty(admin, 'loginUsername', {
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(admin, 'loginPassword', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(admin, "loginUsername"));
console.log(Object.getOwnPropertyDescriptor(admin, "loginPassword"));