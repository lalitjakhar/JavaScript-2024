document.getElementById("btn-const").addEventListener("click", () => {
  Lesson.log("out-const", `Declaring a constant:\nconst pi = 3.14\n→ 3.14`);
});

document.getElementById("btn-error").addEventListener("click", () => {
  Lesson.log("out-error", `Trying to change const:\nconst pi = 3.14\npi = 3.15  ❌\n→ TypeError: Assignment to constant variable\n\nThis error is helpful — it prevents bugs!`);
});

document.getElementById("btn-const").click();
