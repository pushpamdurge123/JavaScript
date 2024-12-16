let rootContainer = document.getElementById("rootContainer");

let childCont = document.createElement("div");

childCont.classList.add("my-child-cont");

//childCont.style.backgroundColor = "red";

//childCont.style.padding = "20px";

rootContainer.appendChild(childCont);


let headingEl = document.createElement("h1");

headingEl.textContent = "Hello World!";

childCont.appendChild(headingEl);



let spanEl = document.createElement("span");

//spanEl.style.border = "1px solid black";

spanEl.style.padding = "10px";

childCont.appendChild(spanEl);

let paraEl = document.createElement("p");

paraEl.textContent = "Flipkart Private Limited is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.";

spanEl.appendChild(paraEl);


function onRemoveStyles(){

    childCont.classList.remove("my-child-cont");

}
