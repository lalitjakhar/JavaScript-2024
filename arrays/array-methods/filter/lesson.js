const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

Lesson.showArray("view-all", numbers);

document.getElementById("btn-even").addEventListener("click", () => {
  const evens = numbers.filter((n) => n % 2 === 0);
  Lesson.showArray("view-filtered", evens);
  Lesson.log("out-filter", `evens = ${JSON.stringify(evens)}`);
});

document.getElementById("btn-odd").addEventListener("click", () => {
  const odds = numbers.filter((n) => n % 2 !== 0);
  Lesson.showArray("view-filtered", odds);
  Lesson.log("out-filter", `odds = ${JSON.stringify(odds)}`);
});
