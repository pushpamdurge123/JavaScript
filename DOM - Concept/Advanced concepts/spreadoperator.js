
let arr1 = [1,2,3,4,5];

let arr2 = [6,7,8,9];

let result = [...arr1, ...arr2];

console.log(...result);


//SPREAD operator with OBJECT
let myobj = {name : "Pushpam", age : 27};

let myobj2 = {...myobj, city : "Nagpur"};

console.log(myobj2);

//SPREAD operator with OBJECT concatination
let person = {
    name : "Rajesh",
    age : 34
};
let personDetails = {
    city : "Nagpur",
    bloodGroup : "A+"
}

let personData = {...person,...personDetails};

console.log(personData);

