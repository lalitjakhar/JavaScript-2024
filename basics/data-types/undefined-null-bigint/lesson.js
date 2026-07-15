document.getElementById("btn-undefined").addEventListener("click", () => {
  Lesson.log("out-undefined", `Variable not assigned:\nlet firstName;\nconsole.log(firstName)\n→ undefined`);
});

document.getElementById("btn-null").addEventListener("click", () => {
  Lesson.log("out-null", `Intentionally empty:\nlet firstName = null;\nconsole.log(typeof firstName, firstName)\n→ "object" null\n\n(typeof null is a JS quirk!)`);
});

document.getElementById("btn-bigint").addEventListener("click", () => {
  Lesson.log("out-bigint", `Large numbers:\nlet myNumber = BigInt(12)\nlet sameMyNumber = 12n\n\nmyNumber + sameMyNumber → 24n`);
});

document.getElementById("btn-undefined").click();
