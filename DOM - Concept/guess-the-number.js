
let userNumEl = document.getElementById("userNum");

let errorMsgEl = document.getElementById("errorMsg");

let randomNum;

let count = 0;

function generateRandomNum(){

    randomNum = Math.ceil( Math.random()*100 );

}
generateRandomNum();

console.log( randomNum );




function checkTheNumber(){

        count += 1;

        let userVal = parseInt(userNumEl.value);

        if( userVal > randomNum){

            errorMsgEl.textContent = "Number Is Too High!!! try again";

            errorMsgEl.style.color = "red";

        }
        else if(userVal < randomNum){

            errorMsgEl.textContent = "Number Is Too Low!!! try again";

            errorMsgEl.style.color = "red";

        }
        else{

            errorMsgEl.textContent = `Hurray You Won!!!! you guessed it in ${count} attempts `;

            errorMsgEl.style.color = "green";
        }
        


}

function onResetRandomNum(){
    
    generateRandomNum();

    console.log(randomNum);

}