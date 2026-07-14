function singHappyBirthday() {
  return "Happy Birthday To You...........";
}

function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

document.getElementById("btn-sing").addEventListener("click", () => {
  Lesson.log("out-sing", `singHappyBirthday()\n→ "${singHappyBirthday()}"`);
});

document.getElementById("btn-add").addEventListener("click", () => {
  const a = Number(document.getElementById("num-a").value);
  const b = Number(document.getElementById("num-b").value);
  Lesson.log("out-add", `add(${a}, ${b})\n→ ${add(a, b)}`);
});

document.getElementById("btn-even").addEventListener("click", () => {
  const n = Number(document.getElementById("even-n").value);
  Lesson.log("out-even", `isEven(${n})\n→ ${isEven(n)}`);
});
