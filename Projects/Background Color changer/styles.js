chatconst randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]       
    }
    return color 
}

// console.log(randomColor());
let IntervalID;

const startChaningColor = function () {
    if (!IntervalID) {
        IntervalID = setInterval(changeBgColor, 1000)
    }
        
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    };
}

const stopChaningColor = function () {
    clearInterval(IntervalID);
    IntervalID = null;
}

document.querySelector('#start').
addEventListener('click', startChaningColor)


document.querySelector('#stop').
addEventListener('click', stopChaningColor)

