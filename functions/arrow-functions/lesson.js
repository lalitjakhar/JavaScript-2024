const singHappyBirthday = () => {
  return "Happy Birthday To You...";
};

const sumTwoNumbers = (number1, number2) => {
  return number1 + number2;
};

const isEven = (number) => number % 2 === 0;

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
  Lesson.log("out-even", `isEven(${n})\n→ ${result}\n\n// Implicit return: n => n % 2 === 0`);
});

document.getElementById("btn-map").addEventListener("click", () => {
  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(n => n * 2);
  const evens = nums.filter(n => n % 2 === 0);
  Lesson.log("out-map", `nums = ${JSON.stringify(nums)}\n\nnums.map(n => n * 2)\n→ ${JSON.stringify(doubled)}\n\nnums.filter(n => n % 2 === 0)\n→ ${JSON.stringify(evens)}`);
});
