let counter = 0;
let interval;
let maxNumber= 0;
let minNumber= 0;

//audio background//

document.addEventListener('DOMContentLoaded', function() {
    let audioback = document.getElementById("audioBack");
    audioback.play();
})

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

function record (){

    let audioVincita = document.getElementById("audioWin");


        if(counter > maxNumber){
        titleOne.style.display = 'inline-block';
        maxNumber = counter;
        audioVincita.play();
        document.getElementById("titleOne").innerHTML = "YOUR MAX RECORD IS +" + maxNumber + " CLICKS";
        let audioLoop = document.getElementById("audioloop");
        audioLoop.pause();
        title.style.display = 'none';
    } else if(counter < minNumber){
        titleTwo.style.display = 'inline-block';
        minNumber = counter;
        audioVincita.play();
        document.getElementById("titleTwo").innerHTML = "YOUR MAX RECORD IS " + minNumber + " CLICKS";
        let audioLoop = document.getElementById("audioloop");
        audioLoop.pause();
        title.style.display = 'none';
    } else if(counter === 0){
        maxNumber = 0;
        minNumber = 0;
        title.style.display = 'inline-block';
        document.getElementById("title").innerHTML = "YOU PRESSED 0 CLICKS";
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

