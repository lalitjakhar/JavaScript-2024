document.getElementById("btn-trim").addEventListener("click", () => {
  Lesson.log("out-trim", `trim() removes spaces:\nlet firstName = "   Jakhar      "\n\nBefore trim:\nlength = 17\n\nAfter trim:\nfirstName.trim()\nlength = 6\n→ "Jakhar"`);
});

document.getElementById("btn-case").addEventListener("click", () => {
  Lesson.log("out-case", `Change case:\nlet firstName = "Jakhar"\n\ntoUpperCase() → "JAKHAR"\ntoLowerCase() → "jakhar"`);
});

document.getElementById("btn-slice").addEventListener("click", () => {
  Lesson.log("out-slice", `slice() extracts parts:\nlet firstName = "Jakhar"\n\n  J a k h a r\n  0 1 2 3 4 5\n\nslice(0, 3) → "Jak"\nslice(2, 5) → "kha"`);
});

document.getElementById("btn-trim").click();
