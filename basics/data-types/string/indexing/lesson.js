document.getElementById("btn-index").addEventListener("click", () => {
  Lesson.log("out-index", `String indexing:\nlet firstName = "Jakhar"\n\n  J a k h a r\n  0 1 2 3 4 5\n\nfirstName[3] → "h"`);
});

document.getElementById("btn-length").addEventListener("click", () => {
  Lesson.log("out-length", `String length:\nlet firstName = "Jakhar"\nfirstName.length → 6`);
});

document.getElementById("btn-last").addEventListener("click", () => {
  Lesson.log("out-last", `Last character:\nlet firstName = "Jakhar"\nlastIndex = firstName.length - 1\nfirstName[lastIndex] → "r"`);
});

document.getElementById("btn-index").click();
