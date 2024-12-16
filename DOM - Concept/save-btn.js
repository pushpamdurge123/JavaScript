
let name = "Rajesh";

let userNameEl = document.getElementById("userName");

userNameEl.textContent = name;




let user = localStorage.getItem("name");
    
userNameEl.textContent = user;


function onSaveData(){
    localStorage.setItem("name", name);
}

function onUpdateData(){
    localStorage.setItem("name", "Dhananjay");
}


function onDeleteData(){
    localStorage.removeItem("name");
}