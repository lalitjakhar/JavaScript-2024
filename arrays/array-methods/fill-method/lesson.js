const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let workingArray = [...original];

Lesson.showArray("view-before", original);

document.getElementById("btn-fill-all").addEventListener("click", () => {
  const myArray = new Array(10).fill(-1);
  Lesson.showArray("view-fill-all", myArray);
  Lesson.log(
    "out-fill-all",
    `new Array(10).fill(-1)\n\n${JSON.stringify(myArray)}\n\nAll 10 slots filled with -1!`
  );
});

document.getElementById("btn-fill-range").addEventListener("click", () => {
  workingArray = [...original];
  const value = document.getElementById("fill-value").value.trim() || "0";
  const start = Number(document.getElementById("fill-start").value);
  const end = Number(document.getElementById("fill-end").value);
  
  workingArray.fill(value, start, end);
  Lesson.showArray("view-after", workingArray);
  Lesson.log(
    "out-fill-range",
    `fill("${value}", ${start}, ${end})\n\nBefore: ${JSON.stringify(original)}\nAfter: ${JSON.stringify(workingArray)}`
  );
});

document.getElementById("btn-examples").addEventListener("click", () => {
  const zeros = new Array(5).fill(0);
  const placeholders = new Array(3).fill("empty");
  const mixed = [1, 2, 3, 4, 5];
  mixed.fill(null, 2, 4);
  
  Lesson.log(
    "out-examples",
    `Zeros:\n${JSON.stringify(zeros)}\n\nPlaceholders:\n${JSON.stringify(placeholders)}\n\nPartial fill:\n${JSON.stringify(mixed)}`
  );
});
