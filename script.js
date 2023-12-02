let counter = 0;
let interval;

function piuUno (){
    counter++;
    document.getElementById("number").innerHTML = counter;
}

function menoUno(){
    counter--;
    document.getElementById("number").innerHTML = counter;
}

function reset(){
    interval = setInterval(gradual, 60);
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

