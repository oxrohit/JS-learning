//                                   GLOBAL SCOPE and LOCAL SCOPE

let a = 10

if (true) {
    let a = 20
    console.log("Inner a",a);
}

console.log("Outer a", a);