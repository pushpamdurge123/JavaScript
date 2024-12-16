//Q.3.Read the marks from students and check the following conditions:
//Condition 1:-If marks smaller than 35 console student is failed.
//Condition 2:-If marks greater than or equal to 35 and less than 60 console student is passed with grade c.
//Condition 3:-If marks greater than 60 and less than 80 console student passed with grade b.
//Condition 4:- If marks greater than 80 student passed with distinction.

let marks = parseInt(prompt("Enter your marks:-"));

if(marks >= 35 && marks <= 60){
    console.log("Student is passed with grade C.")
}
else if(marks > 60 && marks <= 80){
    console.log("Student passed with grade B.")
}
else if(marks > 80){
    console.log("Student passed with  distinction!!!")
}
else{
    console.log("Student is failed!!!")
}
