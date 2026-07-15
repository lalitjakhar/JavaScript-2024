function myFunc(a, b, ...rest) {
  return { a, b, rest };
}

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

function greet(greeting, ...names) {
  return names.map(n => `${greeting}, ${n}!`);
}

document.getElementById("btn-basic").addEventListener("click", () => {
  const result = myFunc(3, 4, 5, 6, 7, 8);
  Lesson.log("out-basic", `myFunc(3, 4, 5, 6, 7, 8)\n\na: ${result.a}\nb: ${result.b}\nrest: ${JSON.stringify(result.rest)}\n\n✅ Rest collects [5, 6, 7, 8] into an array!`);
});

document.getElementById("btn-sum").addEventListener("click", () => {
  const input = document.getElementById("nums-input").value;
  const nums = input.split(",").map(s => Number(s.trim()));
  const result = addAll(...nums);
  Lesson.log("out-sum", `addAll(${nums.join(", ")})\n→ ${result}\n\n✅ Rest parameter collects all arguments!`);
});

document.getElementById("btn-greet").addEventListener("click", () => {
  const greeting = document.getElementById("greeting").value.trim() || "Hello";
  const namesInput = document.getElementById("names-input").value;
  const names = namesInput.split(",").map(s => s.trim());
  const result = greet(greeting, ...names);
  Lesson.log("out-greet", `greet("${greeting}", ${names.map(n => `"${n}"`).join(", ")})\n\n→ ${JSON.stringify(result, null, 2)}\n\n✅ First arg is greeting, rest are names!`);
});
