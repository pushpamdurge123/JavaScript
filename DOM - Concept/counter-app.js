
let counterEl = document.getElementById("counter");

let count = 0;



function onDecCounter(){

    count = count - 1;

    counterEl.textContent = count;

    if( count < 0){
        counterEl.style.color = "red";
    }
    else if( count === 0){
        counterEl.style.color = "black";
    }
    else{
        counterEl.style.color = "green";
    }

}

function onIncCounter(){

    count = count + 1;

    counterEl.textContent = count;

    if( count < 0){
        counterEl.style.color = "red";
    }
    else if( count === 0){
        counterEl.style.color = "black";
    }
    else{
        counterEl.style.color = "green";
    }

}