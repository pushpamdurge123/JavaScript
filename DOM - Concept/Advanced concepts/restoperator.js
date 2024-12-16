
let arr = [1,2,3,4,5];

let [a,b,c,...rest] = arr;

console.log(rest);



//OBJECT RESTRUCTURE
let myobj = {
    name : "Rahul",
    age : 34,
    city : "Nagpur"
};

let { name, age} = myobj;

console.log(name);