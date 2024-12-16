//For timers we used two methods in Js
//1. setTimeout()
//2. setInterval()
/*
LOGIC OF TIME BOMB APPLICATION

let response = "success";

let count = 0;

let timeOutId = setInterval( ()=>{

    count += 1;

    console.log(count);

},1000);



function checkTheNumber(){

    if( response === "success"){
        
        clearTimeout(timeOutId);

    }
    
}
*/

let diffuserEl = document.getElementById("diffuser");
let timerEl = document.getElementById("timer");
let bombImgEl = document.getElementById("bombImg");
let counter = 10;

let intervalId = setInterval( ()=>{

    counter = counter - 1;

    timerEl.textContent = counter;

    //console.log(counter);

    if( counter === 0){

        clearInterval( intervalId);
        
        bombImgEl.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg/250px-Operation_Upshot-Knothole_-_Badger_001.jpg"

        timerEl.style.display = "none";

        

    }

},1000)



function onDiffuseBomb(){
    
    let userVal = diffuserEl.value;

    if( userVal === "diffuse" && counter > 0){

        clearInterval( intervalId);

        bombImgEl.src = "https://img.freepik.com/premium-photo/group-people-with-happy-faces-dark-background_622540-326.jpg";

        timerEl.style.display = "none";

    }
    else{

        clearInterval( intervalId);
        
        bombImgEl.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg/250px-Operation_Upshot-Knothole_-_Badger_001.jpg";

        timerEl.style.display = "none";

    }

}

