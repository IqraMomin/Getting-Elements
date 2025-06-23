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