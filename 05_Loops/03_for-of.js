
//                   for-of Loop


const myArray = [1,2,3,4,5,6]

for (const num of myArray) {
    // console.log(num);
}


const greetings = "Rohit kumar"
for (const greet of greetings) {
    // console.log(`char is ${greet}`);
}



// MAP 

// const map = new Map()
// map.set('IN', "India")
// map.set('ENG', "England")
// map.set('FR', "France")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key, " : ", value);
}



// Working on Objects

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    css : "Casacading Style Sheet",
    rd : "ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}


//  for-in for Arrays

const lang = ["JS", "CPP", "CSS", "RUBY"]

for (const key in lang) {
    console.log(lang[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('ENG', "England")
map.set('FR', "France")