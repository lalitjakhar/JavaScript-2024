function addNoDefault(a, b) {
  return a + b;
}

function addWithDefault(a, b = 0) {
  return a + b;
}

function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}

document.getElementById("btn-no-default").addEventListener("click", () => {
  const result = addNoDefault(5);
  Lesson.log("out-no-default", `function add(a, b) {\n  return a + b;\n}\n\nadd(5)\n→ ${result}\n\n⚠️ b is undefined, so 5 + undefined = NaN`);
});

document.getElementById("btn-default").addEventListener("click", () => {
  const a = Number(document.getElementById("num-a").value);
  const bInput = document.getElementById("num-b").value.trim();
  const b = bInput === "" ? undefined : Number(bInput);
  const result = addWithDefault(a, b);
  Lesson.log("out-default", `function add(a, b = 0) {\n  return a + b;\n}\n\nadd(${a}${b === undefined ? "" : ", " + b})\n→ ${result}\n\n✅ b defaults to 0 when not provided!`);
});

document.getElementById("btn-greet").addEventListener("click", () => {
  const name = document.getElementById("name-input").value.trim() || undefined;
  const message = document.getElementById("msg-input").value.trim() || undefined;
  const result = greet(name, message);
  Lesson.log("out-greet", `greet(${name ? `"${name}"` : ""}${message ? `, "${message}"` : ""})\n→ "${result}"\n\n✅ Both parameters use defaults if empty!`);
});
