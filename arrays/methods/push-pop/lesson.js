let fruits = ["apple", "banana"];

function render(message) {
  Lesson.showArray("view-list", fruits);
  Lesson.log("out", `${message}\nfruits = ${JSON.stringify(fruits)}\nlength = ${fruits.length}`);
}

document.getElementById("btn-push").addEventListener("click", () => {
  const item = document.getElementById("item").value.trim() || "item";
  const len = fruits.push(item);
  render(`push("${item}") → new length ${len}`);
});

document.getElementById("btn-pop").addEventListener("click", () => {
  if (!fruits.length) {
    render("Array is already empty.");
    return;
  }
  const removed = fruits.pop();
  render(`pop() removed "${removed}"`);
});

render("Starting array");
