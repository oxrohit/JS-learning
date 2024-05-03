const lang = ["JS", "CPP", "CSS", "RUBY", "Python"]

// lang.forEach(function (item) {
//     console.log(item);
// })


// Using arrow function

// lang.forEach( (item) => {
//     console.log(item);
// })



// function printMe(item) {
//     console.log(item);
// }

// lang.forEach(printMe);


// lang.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const movieDetails = [
    {
        movieName : "RRR",
        movieDirector : "SS Rajamaouli"
    },
    {
        movieName : "3 iditos",
        movieDirector : "Rajkumar Hirani"
    },
    {
        movieName : "Munna bhai MBBS",
        movieDirector : "Rajkumar Hirani"
    }
]

movieDetails.forEach( (item) => {
    console.log(`Movie is ${item.movieName} and Director is ${item.movieDirector}` );
   
})