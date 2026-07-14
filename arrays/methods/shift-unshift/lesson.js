let fruits = ["apple", "mango", "grapes"];

function render(message) {
  Lesson.showArray("view-list", fruits);
  Lesson.log(
    "out",
    `${message}\nfruits = ${JSON.stringify(fruits)}\nlength = ${fruits.length}`
  );
}

document.getElementById("btn-unshift").addEventListener("click", () => {
  const item = document.getElementById("item").value.trim() || "item";
  const len = fruits.unshift(item);
  render(`unshift("${item}") → new length ${len}`);
});

document.getElementById("btn-shift").addEventListener("click", () => {
  if (!fruits.length) {
    render("Array is already empty.");
    return;
  }
  const removed = fruits.shift();
  render(`shift() removed "${removed}" from the start`);
});

render("Starting array — watch index 0 carefully");
