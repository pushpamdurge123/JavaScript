//Check the greatest number among three numbers

let a = parseInt(prompt("Enter any number:-"));
let b = parseInt(prompt("Enter any number:-"));
let c = parseInt(prompt("Enter any number:-"));

if(a > b  && a > c){
    console.log("Number A is greatest.")
}
else if(b > a && b > c){
    console.log("Number B is greatest.")
}
else if(c > a && c > b){
    console.log("Number C is greatest.")
}
else{
    console.log("Invalid Number!!!")
}