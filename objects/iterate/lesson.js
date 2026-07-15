const person = {
  name: "Jakhar",
  age: 18,
  "person hobbies": ["sleeping", "listening music"],
};

document.getElementById("btn-forin").addEventListener("click", () => {
  let output = "for (let key in person) {\n";
  for (let key in person) {
    output += `  ${key}: ${JSON.stringify(person[key])}\n`;
  }
  output += "}";
  Lesson.log("out-forin", output);
});

document.getElementById("btn-keys").addEventListener("click", () => {
  const keys = Object.keys(person);
  Lesson.log("out-keys", `Object.keys(person)\n→ ${JSON.stringify(keys)}\n\nIs array? ${Array.isArray(keys)}`);
});

document.getElementById("btn-forof").addEventListener("click", () => {
  let output = "for (let key of Object.keys(person)) {\n";
  for (let key of Object.keys(person)) {
    output += `  ${JSON.stringify(person[key])}\n`;
  }
  output += "}";
  Lesson.log("out-forof", output);
});

document.getElementById("btn-entries").addEventListener("click", () => {
  let output = "Object.entries(person):\n\n";
  for (const [key, value] of Object.entries(person)) {
    output += `${key} => ${JSON.stringify(value)}\n`;
  }
  Lesson.log("out-entries", output);
});
