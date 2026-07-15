document.getElementById("btn-let").addEventListener("click", () => {
  Lesson.log("out-let", `Declaring with let:\nlet firstName = "Jakhar"\n→ Jakhar`);
});

document.getElementById("btn-scope").addEventListener("click", () => {
  Lesson.log("out-scope", `Block scope test:\nlet x = 10 (inside block)\nvar y = 20 (inside block)\n→ x is NOT accessible outside\n→ y is accessible outside (var leaks!)`);
});

document.getElementById("btn-let").click();
