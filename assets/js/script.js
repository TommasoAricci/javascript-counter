let counter = 0;
let interval;
let maxNumber= 0;
let minNumber= 0;

// audio effects

let audioElement = new Audio("assets/audio/bulp.mp3");
audioElement.type = "audio/mpeg";
let audioError = new Audio("assets/audio/error.mp3");
audioError.type = "audio/mpeg";
let audioWin = new Audio("assets/audio/achievement.mp3");
audioWin.type = "audio/mpeg";

//elements creation

function createElement (type, theClass, id, text, parent) {

    const element = document.createElement(type);

    if(theClass) element.classList.add(theClass);
    if(id) element.id = id;
    if(text) element.innerHTML = text;
    if(parent) parent.appendChild(element);

    return element;
}
    let counterDiv = createElement("div", "counter", null, null, document.body);
    let divZero = createElement("div", "zero", null, null, counterDiv);
    let zeroElement = createElement("p", null, "number", "0", divZero);
    let buttonsDiv = createElement("div", "buttons", null, null, counterDiv);
    let buttonMin = createElement("button", "bottone1", null, "-", buttonsDiv);
    let resetElement = createElement("button", "reset", null, "RESET", buttonsDiv);
    let buttonPlus = createElement("button", "bottone2", null, "+", buttonsDiv);

//events

buttonsDiv.addEventListener("click", function(event){ //events wrapper//
    switch(event.target.classList[0]){
        case "bottone1": minOne(); break;
        case "bottone2": plusOne(); break;
        case "reset": reset(); break;
    }
});

//counter functions

function startCounter (text, audio){
    if(text) zeroElement.innerHTML = text;
    if(audio) audio.play();
}

function plusOne(){ //+ button
    counter++;
    startCounter(counter, audioElement);
}

function minOne(){ //- button
    counter--;
    startCounter(counter, audioElement);
}

function gradual(){ 
    if(counter<0){
        counter++;
        zeroElement.innerHTML = counter;
    } else if (counter>0){
        counter--;
        zeroElement.innerHTML = counter;
    } else clearInterval(interval);
}

function reset(){ //reset button

    if((counter>0 && counter<=19) || (counter<0 && counter>=-19)){
        interval = setInterval(gradual, 40);

    } else if((counter>=20 && counter <=49) || (counter<=-20 && counter >=-49)){
        interval = setInterval(gradual, 20);

    } else if((counter>=50 && counter <80) || (counter<=-50 && counter >=-80)){
        interval = setInterval(gradual, 8);

    } else{
        interval = setInterval(gradual,3);
    }

    resetSound();
    record();
    removeTitle();
    margin();
}    

function resetSound(){
    if(counter>0 || counter <0) audioError.play();
    else audioError.pause();
}

//record//

function recordSet (title, audio, time, text, pause, display){
    if(title) title.style.display = 'inline-block';
    if(audio) audio.play();
    if(time) time.currentTime = 0;
    if(pause) pause.pause();
    if(text === "titleOne") document.getElementById("titleOne").innerHTML = "POSITIVE RECORD IS +" + maxNumber + " CLICKS";
    else if(text === "titleTwo") document.getElementById("titleTwo").innerHTML = "NEGATIVE RECORD IS " + minNumber + " CLICKS";
    else if(text === "title") document.getElementById("title").innerHTML = "YOUR RECORD IS 0 CLICKS";
    if(display) display.style.display = 'none';
}

function record (){

    if(counter > maxNumber){
        maxNumber = counter;
        recordSet(titleOne, audioWin, audioWin, "titleOne", audioError, title);
    } else if(counter < minNumber){    
        minNumber = counter;
        recordSet(titleTwo, audioWin, audioWin, "titleTwo", audioError, title);
    } else if(counter === 0){
        maxNumber = 0;
        minNumber = 0;
        recordSet(title, null, null, "title", null, titleOne);
        titleTwo.style.display = 'none';
    }
}

//rimozione html//

function removeTitle(){
    let rules = document.querySelector(".rules");
    rules.style.display = 'none';
}

//css modifiche//

function margin(){
    let title = document.getElementById("title");
    title.style.marginBottom="-6px";
    titleOne.style.marginBottom="-6px";
    titleTwo.style.marginBottom="-6px";
}