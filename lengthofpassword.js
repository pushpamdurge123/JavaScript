//Q.Please read the password from user and check the password is weak or not?
//Condition:-If password length smaller than 8 console password is weak or console password is strong.

let password=prompt("Enter the password:-")

let lenOfPass=password.length;

if(lenOfPass < 8){
    console.log("Password is weak.")
}

else{
    console.log("Strong password!!")
}