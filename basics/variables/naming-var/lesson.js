document.getElementById("btn-number").addEventListener("click", () => {
  Lesson.log("out-number", `Valid name (value1):\nlet value1 = 10\nconsole.log(value1 / 2)\n→ 5`);
});

document.getElementById("btn-chars").addEventListener("click", () => {
  Lesson.log("out-chars", `Valid names with _ and $:\nfirst_name = "Jakhar"\n_firstname = "Jakhar"\nfirst$name = "Jakhar"\n$firstname = "Jakhar"\n→ All valid!`);
});

document.getElementById("btn-number").click();
