const fruits = ["apple", "mango", "grapes"];
const vegetables = ["Tomato", "Potato", "Pea"];

Lesson.showArray("view-fruits", fruits);

document.getElementById("btn-of").addEventListener("click", () => {
  let output = "for...of loop:\n\n";
  for (let fruit of fruits) {
    output += `${fruit}\n`;
  }
  Lesson.log("out-of", output);
});

document.getElementById("btn-transform").addEventListener("click", () => {
  const upperFruits = [];
  for (let fruit of fruits) {
    upperFruits.push(fruit.toUpperCase());
  }
  Lesson.showArray("view-transform", upperFruits);
  Lesson.log(
    "out-transform",
    `Original: ${JSON.stringify(fruits)}\n\nTransformed: ${JSON.stringify(upperFruits)}`
  );
});

document.getElementById("btn-in").addEventListener("click", () => {
  let output = "for...in loop:\n\n";
  for (let index in vegetables) {
    output += `index: "${index}" (type: ${typeof index})\n`;
    output += `value: ${vegetables[index]}\n\n`;
  }
  Lesson.log("out-in", output + "⚠️ Indexes are strings, not numbers!");
});
