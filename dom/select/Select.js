// DOM select — find elements on the page

const title = document.getElementById("title");
console.log("By id:", title.textContent);

const intro = document.querySelector(".intro");
intro.textContent = "Text updated with querySelector!";

const hint = document.querySelector("[data-role='hint']");
hint.style.fontWeight = "bold";

const items = document.querySelectorAll("#list li");
items.forEach((item, index) => {
  console.log(`List item ${index + 1}:`, item.textContent);
});

// Create a new element and add it
const newItem = document.createElement("li");
newItem.textContent = "Item three (added by JS)";
document.getElementById("list").appendChild(newItem);
