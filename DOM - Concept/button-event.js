
let diffuserEl = document.getElementById("diffuser");

let myBtnEl = document.getElementById("myBtn");


function readingInput( e ){

    if(e.key === "Enter"){

        console.log(e.target.value);

    }

}
diffuserEl.addEventListener("keyup",readingInput);



