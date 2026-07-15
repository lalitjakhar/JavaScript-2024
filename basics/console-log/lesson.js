document.getElementById("btn-text").addEventListener("click", () => {
  Lesson.log("out-text", `Printing text:\n→ "Hey Jakhar"`);
});

document.getElementById("btn-num").addEventListener("click", () => {
  Lesson.log("out-num", `Printing numbers:\n→ 42\n→ 15 (from 10 + 5)`);
});

document.getElementById("btn-multi").addEventListener("click", () => {
  Lesson.log("out-multi", `Printing multiple values:\n→ Age: 22 Name: Jakhar`);
});

document.getElementById("btn-text").click();
