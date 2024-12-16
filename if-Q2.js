//Q.2. Please read the number N from the user and check whether the number is even or not?

//1st Method
// let number=parseInt(prompt("Enter your number:-"));

// let isEven= (number % 2 === 0);

// if(isEven){
//     console.log("Number is even")
// }

// else{
//     console.log("Number is odd")
// }


//2nd Method:-

let number=parseInt(prompt("Enter your number:-"));

let remainder = number % 2;

if(remainder===0){
    console.log("Number is Even");
}
    
else{
        console.log("Number is Odd")
    }


