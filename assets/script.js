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
    maxRecord();
    minRecord();
    removeTitle();

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

//record//

let maxNumber= 0;

function maxRecord (){
    if(counter>maxNumber){
        maxNumber = counter;
        document.querySelector("h1").innerHTML = "IL TUO RECORD È DI " + maxNumber + " CLICK POSITIVI";
    } else{
        maxNumber = counter;
        document.querySelector("h1").innerHTML = "IL TUO RECORD È DI " + maxNumber + " CLICK NEGATIVI";
    }
}

//rimozione html//

function removeTitle(){
    let title = document.querySelector("h2");
    title.remove();
}