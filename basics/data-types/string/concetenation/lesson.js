document.getElementById("btn-concat").addEventListener("click", () => {
  Lesson.log("out-concat", `String concatenation:\nlet string1 = "Lalit"\nlet string2 = "Jakhar"\n\nfullName = string1 + " " + string2\n→ "Lalit Jakhar"`);
});

document.getElementById("btn-convert").addEventListener("click", () => {
  Lesson.log("out-convert", `Convert strings to numbers:\nlet string1 = "12"\nlet string2 = "18"\n\n"12" + "18" → "1218" (string concat)\n+string1 + +string2 → 30 (number add)`);
});

document.getElementById("btn-concat").click();
