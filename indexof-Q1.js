//Read the password from user and check below condition.
//Condition 1:-Length of password should be greater than or equal to 8.
//Condition 2:-the last should be "#" console password is very very strong.

let password=prompt("Please enter your password:-");

let lenOfPassword = password.length;

if(lenOfPassword >= 8){

    if( password[lenOfPassword - 1] === "#" ){
        console.log("Password is very very strong!!!");
    }

    else{
        console.log("Password is strong!!");
    }
}

else{
    console.log("Invalid password! Please try again! ");
}