document.getElementById("btn-long").addEventListener("click", () => {
  Lesson.log("out-long", `Long way (if/else):\nlet age = 4\nlet drink\n\nif (age >= 5) {\n  drink = "coffee"\n} else {\n  drink = "milk"\n}\n\n→ "milk" (because 4 < 5)`);
});

document.getElementById("btn-short").addEventListener("click", () => {
  Lesson.log("out-short", `Short way (ternary):\nlet age = 8\nlet drink = age >= 5 ? "coffee" : "milk"\n\nCondition: age >= 5\n  8 >= 5 → true\n  Pick first value → "coffee"\n\n→ "coffee"`);
});

document.getElementById("btn-long").click();
