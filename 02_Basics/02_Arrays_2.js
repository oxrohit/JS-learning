const marvel_heros = ["IronMan", "Spidy", "Captain"]
const dc_heros = ["BatMan", "SuperMan", "Flash"]

// marvel_heros.push(dc_heros)
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Spread

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const wtfArray = [1, 2, 3, [1 ,2, 3, [5,6,7], 8, 9, [10, [11, 12]]] , 13]
const new_Array = wtfArray.flat(Infinity)

console.log(new_Array);

console.log(Array.from("ROHIT"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));