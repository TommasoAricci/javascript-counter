let counter = 0;
let interval;
let maxNumber= 0;
let minNumber= 0;

//audio effects//
let audioElement = new Audio("assets/audio/bulp.mp3");
let audioLoop = new Audio("assets/audio/reset.mp3");
let audioWin = new Audio("assets/audio/achievement.mp3");


//creazione elementi//

let counterDiv = document.querySelector(".counter"); // div counter

let divZero = document.createElement("div"); // div zero
divZero.classList.add("zero");
counterDiv.appendChild(divZero);

let zeroElement = document.createElement("p"); // zero element
zeroElement.id = "number";
zeroElement.textContent = 0;
divZero.appendChild(zeroElement);

let buttonsDiv = document.createElement("div"); // div buttons
buttonsDiv.classList.add("buttons");
counterDiv.appendChild(buttonsDiv);

let buttonMin = document.createElement("button"); // - button
buttonMin.classList.add("bottone1");
buttonMin.textContent = "-";
buttonsDiv.appendChild(buttonMin);

let resetElement = document.createElement("button"); // reset button
resetElement.classList.add("reset");
resetElement.textContent = "RESET";
buttonsDiv.appendChild(resetElement);

let buttonPlus = document.createElement("button"); // + button
buttonPlus.classList.add("bottone2");
buttonPlus.textContent = "+";
buttonsDiv.appendChild(buttonPlus);

//events//

buttonsDiv.addEventListener("click", function(event){ //events wrapper//
    switch(event.target.classList[0]){
        case "bottone1": minOne(); break;
        case "bottone2": plusOne(); break;
        case "reset": reset(); break;
    }
});


//counter//

function plusOne(){
    counter++;
    zeroElement.innerHTML = counter;
    audioElement.play();
}

function minOne(){
    counter--;
    zeroElement.innerHTML = counter;
    let audio = document.getElementById("audioElement");
    audioElement.play();
}

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
    rules.remove();
}

//css modifiche//

function margin(){
    let title = document.getElementById("title");
    title.style.marginBottom="-5px";
}
