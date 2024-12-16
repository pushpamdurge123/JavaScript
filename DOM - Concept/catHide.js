//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png  ==> bulb-go-on image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png  ==> cat shown image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png  ==> bulb-go-off image
//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png  ==> cat-eyes image

let bulbImagEl = document.getElementById("bulbImag");
let catImgEl = document.getElementById("catImg");
let msgEl = document.getElementById("msg");
let offBtnEl = document.getElementById("offBtn");
let onBtnEl = document.getElementById("onBtn");



function onHideCat(){

    bulbImagEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    msgEl.textContent = "Switch Off";
    offBtnEl.style.backgroundColor = "grey";
    onBtnEl.style.backgroundColor = "green";

}

function onShowCat(){
    
    bulbImagEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    msgEl.textContent = "Switch On";
    offBtnEl.style.backgroundColor = "red";
    onBtnEl.style.backgroundColor = "grey";

}