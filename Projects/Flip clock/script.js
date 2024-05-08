
function showTime (){
    const curTime = new Date();
    const Time = `${curTime.getHours()}: ${curTime.getMinutes()}: ${curTime.getSeconds()}`

    document.getElementById('time').innerText = Time;
    // console.log(Time)
}

setInterval(showTime, 1000);

