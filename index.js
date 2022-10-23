let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");

let buttonStart = document.getElementById("button-start");
let buttonstop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");

var interval; //store value

//this fuction runs when click start

let startTimer= () =>{
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0"+ tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>60){
        seconds++;

        appendSeconds.innerHTML = "0"+ seconds;
        tens=0;
        appendTens.innerHTML = "0"+0;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
}
buttonStart.onclick = function(){
    interval = setInterval(startTimer);
}
buttonstop.onclick = function(){
    clearInterval(interval);
}
buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}