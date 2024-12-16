//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png  ==> bulb-go-on image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png  ==> cat shown image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png  ==> bulb-go-off image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png  ==> cat-eyes image

let bulbImagEl = document.getElementById("bulbImag");
let catImgEl = document.getElementById("catImg");
let msgEl = document.getElementById("msg");
let onBtnEl = document.getElementById("onBtn");

let isClicked = true;



//we are creating a toggler button "single button", in one click it can change its properties and come back to same.

function onShowCat(){

    if (isClicked === true){

        bulbImagEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
        catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
        msgEl.textContent = "Switch Off";
        onBtnEl.style.backgroundColor = "green";
        isClicked = false;

    }
    else{

        bulbImagEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
        catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
        msgEl.textContent = "Switch On";
        onBtnEl.style.backgroundColor = "red";
        isClicked = true;

    }

}


        