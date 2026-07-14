let currentName = "Lalit";

document.getElementById("btn-create").addEventListener("click", () => {
  currentName = document.getElementById("name-input").value.trim() || "Friend";
  Lesson.log(
    "out-create",
    `let firstName = "${currentName}";\nconsole.log(firstName);\n\n→ ${currentName}`
  );
});

document.getElementById("btn-change").addEventListener("click", () => {
  const before = currentName;
  currentName = "Jakhar";
  Lesson.log(
    "out-change",
    `Before: "${before}"\nfirstName = "Jakhar";\nAfter:  "${currentName}"`
  );
});

document.getElementById("btn-const").addEventListener("click", () => {
  Lesson.log(
    "out-const",
    `const age = 25;\nage = 26;  // ❌ TypeError: Assignment to constant variable.\n\nUse let if you need to change it:\nlet age = 25;\nage = 26;  // ✓`
  );
});
