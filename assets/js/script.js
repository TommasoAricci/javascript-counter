let counter = 0;
let interval;
let maxNumber= 0;
let minNumber= 0;

//audio effects

let audioElement = new Audio("assets/audio/bulp.mp3");
audioElement.type = "audio/mpeg";
let audioLoop = new Audio("assets/audio/reset.mp3");
audioLoop.type = "audio/mpeg";
let audioWin = new Audio("assets/audio/achievement.mp3");
audioWin.type = "audio/mpeg";


//elements creation

function createElement (type, theClass, id, text, parent) {

    const element = document.createElement(type);

    if(theClass){
        element.classList.add(theClass);
    }
    if(id){
        element.id = id;
    }
    if(text){
        element.textContent = text;
    }
    if(parent){
        parent.appendChild(element);
    }
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
    if(text){
        zeroElement.innerHTML = text;
    }
    if(audio){
        audio.play();
    }
}

function plusOne(){
    counter++;
    startCounter(counter, audioElement);
}

function minOne(){
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
    } else{
        clearInterval(interval);
    }
}

//reset button

function reset(){

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
    if(counter>0 || counter <0){
        audioLoop.play();
    } else{
        audioLoop.pause();
    }
}


//record//

function record (){

    if(counter > maxNumber){
        titleOne.style.display = 'inline-block';
        maxNumber = counter;
        audioWin.play();
        audioWin.currentTime = 0;
        document.getElementById("titleOne").innerHTML = "POSITIVE RECORD IS +" + maxNumber + " CLICKS";
        audioLoop.pause();
        title.style.display = 'none';
    } else if(counter < minNumber){
        titleTwo.style.display = 'inline-block';
        minNumber = counter;
        document.getElementById("titleTwo").innerHTML = "NEGATIVE RECORD IS " + minNumber + " CLICKS";
        audioWin.play();
        audioWin.currentTime = 0;
        audioLoop.pause();
        title.style.display = 'none';
    } else if(counter === 0){
        maxNumber = 0;
        minNumber = 0;
        title.style.display = 'inline-block';
        document.getElementById("title").innerHTML = "YOUR RECORD IS 0 CLICKS";
        titleOne.style.display = 'none';
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
    title.style.marginBottom="-5px";
}
