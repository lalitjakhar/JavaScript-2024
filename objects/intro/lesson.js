const person = {
  name: "Jakhar",
  age: 18,
  hobbies: ["sleeping", "listening music"],
};

function renderPerson() {
  Lesson.showObject("view-person", person);
  Lesson.showObject("view-updated", person);
}

document.getElementById("btn-show").addEventListener("click", () => {
  renderPerson();
  Lesson.log("out-show", JSON.stringify(person, null, 2));
});

document.getElementById("btn-read").addEventListener("click", () => {
  const key = document.getElementById("read-key").value;
  const value = person[key];
  Lesson.log(
    "out-read",
    `person.${key} → ${JSON.stringify(value)}\nperson["${key}"] → ${JSON.stringify(value)}`
  );
});

document.getElementById("btn-add").addEventListener("click", () => {
  const key = document.getElementById("add-key").value.trim() || "extra";
  const value = document.getElementById("add-value").value.trim() || "";
  person[key] = value;
  renderPerson();
  Lesson.log("out-add", `Added ${key}: "${value}"\n${JSON.stringify(person, null, 2)}`);
});

renderPerson();
Lesson.log("out-show", "Object ready. Click buttons to explore.");
