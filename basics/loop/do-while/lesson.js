document.getElementById("btn-diff").addEventListener("click", () => {
  Lesson.log("out-diff", `Difference:\n\nwhile loop (checks FIRST):\nlet i = 10\nwhile (i <= 9) { console.log(i) }\n→ Never runs (10 is not <= 9)\n\ndo-while (checks AFTER):\nlet i = 10\ndo { console.log(i) } while (i <= 9)\n→ Runs once: 10\n(Then checks: 10 <= 9? false, stop)`);
});

document.getElementById("btn-count").addEventListener("click", () => {
  Lesson.log("out-count", `do-while counting:\nlet i = 0\n\ndo {\n  console.log(i)\n  i++\n} while (i <= 9)\n\n→ 0 1 2 3 4 5 6 7 8 9`);
});

document.getElementById("btn-diff").click();
