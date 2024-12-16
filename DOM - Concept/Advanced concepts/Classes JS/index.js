
//Classes syntax:-

// class Person{

//     constructor(FirstName,LastName){

//         this.FirstName = FirstName;
//         this.LastName = LastName;

//     }

//     displayFullName(){

//         console.log(this.FirstName + " " + this.LastName);

//     }
    


// }

// let Person1 = new Person("Pushpam","Durge");

// let Person2 = new Person("Shashank","Durge");

// let Person3 = new Person("Sangita","Durge");

// let Person4 = new Person("Suresh","Durge");

// // console.log(Object.getPrototypeOf( Person1));

// // console.log(Person.prototype);

// Person2.displayFullName();


let arr = [1,2,3,4];

//console.log(arr);

let arr1 = new Array(1,2,3,4);

console.log(Object.getPrototypeOf( arr1 ));

console.log(Array.prototype);



//Use of "this" keyword:-

// let myObj = {
//     name : "Pushpam",
//     age : 26,
//     isWorking : function(){

//         console.log(this);

//     }
// }

// myObj.isWorking();