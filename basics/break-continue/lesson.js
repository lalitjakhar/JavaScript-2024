document.getElementById("btn-break").addEventListener("click", () => {
  Lesson.log("out-break", `break keyword:\n\nfor (let i = 1; i <= 10; i++) {\n  if (i === 4) break;\n  console.log(i);\n}\n\n→ 1\n→ 2\n→ 3\n(stops at 4, doesn't print 4 or continue)`);
});

document.getElementById("btn-continue").addEventListener("click", () => {
  Lesson.log("out-continue", `continue keyword:\n\nfor (let i = 1; i <= 10; i++) {\n  if (i === 4) continue;\n  console.log(i);\n}\n\n→ 1 2 3 5 6 7 8 9 10\n(skips 4, but keeps looping)`);
});

document.getElementById("btn-break").click();
