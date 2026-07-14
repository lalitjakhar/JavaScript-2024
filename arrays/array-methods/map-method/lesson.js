const numbers = [3, 4, 2, 7, 9];
const users = [
  { firstName: "jakhar", age: "18" },
  { firstName: "arpit", age: "29" },
  { firstName: "sunny", age: "31" },
];

Lesson.showArray("view-before", numbers);

document.getElementById("btn-map").addEventListener("click", () => {
  const squared = numbers.map((n) => n * n);
  Lesson.showArray("view-after", squared);
  Lesson.log(
    "out-map",
    `before: ${JSON.stringify(numbers)}\nafter:  ${JSON.stringify(squared)}\noriginal unchanged ✓`
  );
});

document.getElementById("btn-names").addEventListener("click", () => {
  const names = users.map((user) => user.firstName);
  Lesson.showArray("view-names", names);
  Lesson.log("out-names", `names = ${JSON.stringify(names)}`);
});
