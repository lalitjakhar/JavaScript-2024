document.getElementById("btn-count").addEventListener("click", () => {
  Lesson.log("out-count", `while loop counting:\nlet i = 0\n\nwhile (i <= 9) {\n  console.log(i)\n  i++\n}\n\n→ 0 1 2 3 4 5 6 7 8 9`);
});

document.getElementById("btn-sum").addEventListener("click", () => {
  Lesson.log("out-sum", `Sum of first 10 numbers:\nlet total = 0, i = 0\n\nwhile (i <= 10) {\n  total = total + i\n  i++\n}\n\n→ 55\n\n(1+2+3+4+5+6+7+8+9+10 = 55)`);
});

document.getElementById("btn-count").click();
