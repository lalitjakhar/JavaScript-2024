const fruits = ["apple", "mango", "grapes"];

Lesson.showArray("view-before", fruits);

document.getElementById("btn-while").addEventListener("click", () => {
  const fruits2 = [];
  let i = 0;
  while (i < fruits.length) {
    fruits2.push(fruits[i].toUpperCase());
    i++;
  }
  Lesson.showArray("view-after", fruits2);
  Lesson.log(
    "out-while",
    `Original: ${JSON.stringify(fruits)}\n\nwhile loop result: ${JSON.stringify(fruits2)}`
  );
});

document.getElementById("btn-compare").addEventListener("click", () => {
  const forResult = [];
  for (let i = 0; i < fruits.length; i++) {
    forResult.push(fruits[i].toUpperCase());
  }
  
  const whileResult = [];
  let i = 0;
  while (i < fruits.length) {
    whileResult.push(fruits[i].toUpperCase());
    i++;
  }
  
  Lesson.log(
    "out-compare",
    `for loop: ${JSON.stringify(forResult)}\nwhile loop: ${JSON.stringify(whileResult)}\n\nBoth produce the same result!`
  );
});
