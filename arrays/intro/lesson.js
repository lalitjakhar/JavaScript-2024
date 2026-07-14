// Visual Array Intro — interactive lesson
let fruits = ["apple", "banana", "grapes"];
const mixed = [1, "string", null, undefined, 5];
let myList = [];

function refreshFruitsView() {
  Lesson.showArray("view-fruits", fruits);
  Lesson.showArray("view-change", fruits);
}

document.getElementById("btn-show").addEventListener("click", () => {
  refreshFruitsView();
  Lesson.log(
    "out-show",
    `fruits = ${JSON.stringify(fruits)}\nlength = ${fruits.length}\nfruits[0] = "${fruits[0]}"`
  );
});

document.getElementById("btn-read").addEventListener("click", () => {
  const i = Number(document.getElementById("read-index").value);
  if (i < 0 || i >= fruits.length) {
    Lesson.log("out-read", `Index ${i} does not exist.\nValid indexes: 0 to ${fruits.length - 1}`);
    return;
  }
  Lesson.log("out-read", `fruits[${i}] → "${fruits[i]}"`);
});

document.getElementById("btn-change").addEventListener("click", () => {
  const i = Number(document.getElementById("change-index").value);
  const value = document.getElementById("change-value").value.trim() || "?";
  if (i < 0 || i >= fruits.length) {
    Lesson.log("out-change", `Index ${i} is out of range.`);
    return;
  }
  const old = fruits[i];
  fruits[i] = value;
  Lesson.showArray("view-change", fruits);
  Lesson.showArray("view-fruits", fruits);
  Lesson.log("out-change", `Changed index ${i}: "${old}" → "${value}"\nNow: ${JSON.stringify(fruits)}`);
});

document.getElementById("btn-mixed").addEventListener("click", () => {
  const labels = mixed.map((v) => (v === null ? "null" : v === undefined ? "undefined" : v));
  Lesson.showArray("view-mixed", labels);
  Lesson.log("out-mixed", `mixed = ${JSON.stringify(mixed)}\ntypeof each item can be different`);
});

document.getElementById("btn-check").addEventListener("click", () => {
  Lesson.log(
    "out-check",
    `typeof fruits → "${typeof fruits}"\nArray.isArray(fruits) → ${Array.isArray(fruits)}`
  );
});

function renderBuild() {
  Lesson.showArray("view-build", myList);
  Lesson.log(
    "out-build",
    myList.length
      ? `myList = ${JSON.stringify(myList)}\nlength = ${myList.length}`
      : "Your array is empty. Add something!"
  );
}

document.getElementById("btn-add").addEventListener("click", () => {
  const input = document.getElementById("build-item");
  const value = input.value.trim();
  if (!value) return;
  myList.push(value);
  input.value = "";
  input.focus();
  renderBuild();
});

document.getElementById("btn-clear").addEventListener("click", () => {
  myList = [];
  renderBuild();
});

document.getElementById("build-item").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("btn-add").click();
});

// Auto-show first visual so page is never “empty”
refreshFruitsView();
Lesson.log(
  "out-show",
  `fruits = ${JSON.stringify(fruits)}\nlength = ${fruits.length}\nClick buttons below to explore.`
);
renderBuild();
