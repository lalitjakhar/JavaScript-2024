document.getElementById("btn-and").addEventListener("click", () => {
  Lesson.log("out-and", `AND (&&) operator:\nlet firstName = "Jakhar", age = 19\n\nCondition: firstName[0] === "J" && age > 18\n  "J" === "J" → true\n  19 > 18 → true\n  true && true → true\n\n→ "Name starts with J AND above 18"`);
});

document.getElementById("btn-or").addEventListener("click", () => {
  Lesson.log("out-or", `OR (||) operator:\nlet firstName = "Jakhar", age = 19\n\nCondition: firstName[0] === "J" || age > 18\n  "J" === "J" → true\n  (second check not needed, OR already satisfied)\n\n→ "At least one is true"`);
});

document.getElementById("btn-and").click();
