const fruits = ["apple", "mango", "grapes", "banana"];

Lesson.showArray("view-fruits", fruits);
Lesson.showArray("view-before", fruits);

document.getElementById("btn-basic").addEventListener("click", () => {
  let output = "";
  for (let i = 0; i < fruits.length; i++) {
    output += `[${i}] = ${fruits[i]}\n`;
  }
  Lesson.log("out-basic", `Looping through array:\n\n${output}`);
});

document.getElementById("btn-transform").addEventListener("click", () => {
  const upperFruits = [];
  for (let i = 0; i < fruits.length; i++) {
    upperFruits.push(fruits[i].toUpperCase());
  }
  Lesson.showArray("view-after", upperFruits);
  Lesson.log(
    "out-transform",
    `Original: ${JSON.stringify(fruits)}\n\nTransformed: ${JSON.stringify(upperFruits)}`
  );
});

document.getElementById("btn-reverse").addEventListener("click", () => {
  let output = "Looping backwards:\n\n";
  for (let i = fruits.length - 1; i >= 0; i--) {
    output += `[${i}] = ${fruits[i]}\n`;
  }
  Lesson.log("out-reverse", output);
});
