//                  DESTRUCTURING
const movie = {
    movieName : "RRR",
    movieDirector : "S.S. Rajamauli",
    releaseYear : 2023,
    isMovieGood : "Super",
    isThisMovieWinOscars : true
}

const {movieName: mName} = movie
const {isThisMovieWinOscars: Oscars} = movie

console.log(mName);
console.log(Oscars);