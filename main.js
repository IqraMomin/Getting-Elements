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