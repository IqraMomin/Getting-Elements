const mainheading = document.getElementById("main-heading");
mainheading.textContent = "Fruit World";
const fruit = document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor = "yellow";
for (let v of fruit){
    v.style.fontWeight = "bold";
}
const listItems = document.getElementsByTagName("li");
listItems[4].style.color = "blue";

for (let li of listItems) {
    li.style.fontStyle = "italic";
}
//querySelector and querySelectorAll
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const evenItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let v of evenItems) {
    v.style.backgroundColor = "brown";
    v.style.color = "white";
}

//creating Elements and DOM Relations

//create Element

const newEle = document.createElement("h3");

//create TextNode
const newText = document.createTextNode("Buy high quality organic fruits online");
newEle.appendChild(newText);

const div = document.querySelector("#header");
div.appendChild(newEle);

newEle.style.fontStyle = "italic";

const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits:4");
para.appendChild(paraText);

const getDiv = document.getElementsByTagName("div");
const secondDiv = getDiv[1];

const getUl = document.querySelector(".fruits");

secondDiv.insertBefore(para, getUl);

para.id = "fruits-total";