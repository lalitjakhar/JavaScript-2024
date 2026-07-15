const person = {
  name: "Jakhar",
  age: 18,
  "person hobbies": ["sleeping", "listening music"],
};

function renderPerson() {
  Lesson.showObject("view-obj", person);
}

document.getElementById("btn-dot").addEventListener("click", () => {
  Lesson.log("out-dot", `person.name → "${person.name}"\nperson.age → ${person.age}`);
});

document.getElementById("btn-bracket").addEventListener("click", () => {
  const hobbies = person["person hobbies"];
  Lesson.log("out-bracket", `person["person hobbies"]\n→ ${JSON.stringify(hobbies)}`);
});

document.getElementById("btn-dynamic").addEventListener("click", () => {
  const key = document.getElementById("dynamic-key").value;
  const value = person[key];
  Lesson.log("out-dynamic", `const key = "${key}";\nperson[key] → ${JSON.stringify(value)}`);
});

document.getElementById("btn-add").addEventListener("click", () => {
  const key = document.getElementById("add-key").value.trim() || "newKey";
  const value = document.getElementById("add-value").value.trim() || "";
  person[key] = value;
  renderPerson();
  Lesson.log("out-add", `person["${key}"] = "${value}"\n\nUpdated object:\n${JSON.stringify(person, null, 2)}`);
});

renderPerson();
