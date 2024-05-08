
// const btn = document.getElementById('btn1');

// btn.addEventListener('click', alertMessages)

// function alertMessages() {
//     alert("Hii, I'm Rohit kumar");
// };


document.addEventListener('DOMContentLoaded', function() {

    const circle = document.getElementById('dot');
  
    const button = document.getElementById('btn');
    
    function changeColorChange (){

        const randomCircle = '#' +  Math.floor(Math.random()*16777215).toString(16); 
        
        circle.style.backgroundColor = randomCircle;
    }

    button.addEventListener("click", changeColorChange)
  });