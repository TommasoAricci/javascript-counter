let counter = 0;
let interval;

//counter//

function piuUno(){
    counter++;
    document.getElementById("number").innerHTML = counter;
    let audio = document.getElementById("audioElement");
    audio.play();
}

function menoUno(){
    counter--;
    document.getElementById("number").innerHTML = counter;
    let audio = document.getElementById("audioElement");
    audio.play();
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

    suonoReset();
    record();
    removeTitle();
    margin();

}

function suonoReset(){
    let audioLoop = document.getElementById("audioloop");
    if(counter>0 || counter <0){
        audioLoop.play();
    } else{
        audioLoop.pause();
    }
}
        

function gradual(){
        if(counter<0){
            counter++;
            document.getElementById("number").innerHTML = counter;
    } else if (counter>0){
            counter--;
            document.getElementById("number").innerHTML = counter;
        } else{
        clearInterval(interval);
    }
}

function margin(){
    let title = document.getElementById("title");
    title.style.marginBottom="-5px";
}

//record//

let maxNumber= 0;
let minNumber= 0;

function record (){
    if(counter > maxNumber){
        maxNumber = counter;
        document.querySelector("h1").innerHTML = "YOUR MAX RECORD IS +" + maxNumber + " CLICKS";
    } else if(counter < minNumber){
        minNumber = counter;
        document.querySelector("h1").innerHTML = "YOUR MAX RECORD IS " + minNumber + " CLICKS";
    } else if(counter === 0){
        maxNumber = 0;
        minNumber = 0;
        document.querySelector("h1").innerHTML = "YOU PRESSED 0 CLICKS";
    }
}

//rimozione html//

function removeTitle(){
    let rules = document.querySelector(".rules");
    rules.remove();
}

//css modifiche//

