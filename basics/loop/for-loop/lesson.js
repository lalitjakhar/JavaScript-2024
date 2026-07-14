document.getElementById("btn-loop").addEventListener("click", () => {
  const limit = Math.min(20, Math.max(1, Number(document.getElementById("limit").value) || 5));
  const values = [];
  const lines = [];

  for (let i = 1; i <= limit; i++) {
    values.push(i);
    lines.push(`i = ${i} → print ${i}`);
  }

  Lesson.showArray("view-loop", values, "i");
  Lesson.log("out-loop", lines.join("\n") + `\n\nDone. Looped ${limit} times.`);
});
