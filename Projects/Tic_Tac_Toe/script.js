let currentPlayer = "X"
let arr = Array(9).fill(null)



function handleClick(el){
    const id = Number(el.id);
    arr[id] = currentPlayer
    el.innerText = currentPlayer
    currentPlayer = currentPlayer == "X" ? "O" : "X"
    console.log(arr);
}