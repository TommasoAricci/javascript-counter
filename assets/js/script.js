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

function plusOne(){
    counter++;
    document.getElementById("number").innerHTML = counter;
    let audio = document.getElementById("audioElement");
    audio.play();
}

function minOne(){
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

    resetSound();
    record();
    removeTitle();
    margin();
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

function resetSound(){
    let audioLoop = document.getElementById("audioloop");
    if(counter>0 || counter <0){
        audioLoop.play();
    } else{
        audioLoop.pause();
    }
}


//record//

function record (){

    let audioWin = document.getElementById("audioWin");


    if(counter > maxNumber){
        titleOne.style.display = 'inline-block';
        maxNumber = counter;
        audioWin.play();
        audioWin.currentTime = 0;
        document.getElementById("titleOne").innerHTML = "POSITIVE RECORD IS +" + maxNumber + " CLICKS";
        let audioLoop = document.getElementById("audioloop");
        audioLoop.pause();
        title.style.display = 'none';
    } else if(counter < minNumber){
        titleTwo.style.display = 'inline-block';
        minNumber = counter;
        document.getElementById("titleTwo").innerHTML = "NEGATIVE RECORD IS " + minNumber + " CLICKS";
        audioWin.play();
        audioWin.currentTime = 0;
        let audioLoop = document.getElementById("audioloop");
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
