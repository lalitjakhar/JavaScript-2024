const person = {
  firstName: "Jakhar",
  gender: "male",
  age: 18,
};

function printDetailsOld(person) {
  return `${person.firstName}, ${person.gender}`;
}

function printDetails({ firstName, gender }) {
  return `${firstName}, ${gender}`;
}

function greet({ name = "Guest", age = 0 }) {
  return `${name} is ${age} years old`;
}

document.getElementById("btn-no-dest").addEventListener("click", () => {
  const result = printDetailsOld(person);
  Lesson.log("out-no-dest", `function printDetails(person) {\n  console.log(person.firstName);\n  console.log(person.gender);\n}\n\nprintDetails(person)\n→ ${result}\n\n⚠️ Must use person.firstName, person.gender`);
});

document.getElementById("btn-dest").addEventListener("click", () => {
  const result = printDetails(person);
  Lesson.log("out-dest", `function printDetails({ firstName, gender }) {\n  console.log(firstName);\n  console.log(gender);\n}\n\nprintDetails(person)\n→ ${result}\n\n✅ Clean! No need for person.`);
});

document.getElementById("btn-custom").addEventListener("click", () => {
  const customPerson = {
    firstName: document.getElementById("name-input").value.trim() || "Anonymous",
    age: Number(document.getElementById("age-input").value) || 0,
    gender: document.getElementById("gender-input").value.trim() || "unknown",
  };
  const result = printDetails(customPerson);
  Lesson.log("out-custom", `Person: ${JSON.stringify(customPerson, null, 2)}\n\nprintDetails({ firstName, gender })\n→ ${result}`);
});

document.getElementById("btn-defaults").addEventListener("click", () => {
  const result1 = greet({ name: "Jakhar", age: 18 });
  const result2 = greet({ name: "Alice" });
  const result3 = greet({});
  Lesson.log("out-defaults", `greet({ name: "Jakhar", age: 18 })\n→ "${result1}"\n\ngreet({ name: "Alice" })\n→ "${result2}"\n\ngreet({})\n→ "${result3}"\n\n✅ Defaults work in destructured params!`);
});
