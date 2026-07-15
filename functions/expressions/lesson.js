const singHappyBirthday = function () {
  return "Happy Birthday To You...";
};

const sumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

const isEven = function (number) {
  return number % 2 === 0;
};

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

document.getElementById("btn-sing").addEventListener("click", () => {
  Lesson.log("out-sing", `singHappyBirthday()\n→ "${singHappyBirthday()}"`);
});

document.getElementById("btn-sum").addEventListener("click", () => {
  const a = Number(document.getElementById("num-a").value);
  const b = Number(document.getElementById("num-b").value);
  const result = sumTwoNumbers(a, b);
  Lesson.log("out-sum", `sumTwoNumbers(${a}, ${b})\n→ ${result}`);
});

document.getElementById("btn-even").addEventListener("click", () => {
  const n = Number(document.getElementById("even-n").value);
  const result = isEven(n);
  Lesson.log("out-even", `isEven(${n})\n→ ${result}`);
});

document.getElementById("btn-find").addEventListener("click", () => {
  const arrInput = document.getElementById("arr-input").value;
  const arr = arrInput.split(",").map(s => Number(s.trim()));
  const target = Number(document.getElementById("target").value);
  const result = findTarget(arr, target);
  Lesson.log("out-find", `Array: ${JSON.stringify(arr)}\nTarget: ${target}\n\nfindTarget(arr, ${target})\n→ ${result}${result === -1 ? " (not found)" : " (index)"}`);
});
