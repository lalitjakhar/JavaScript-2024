const users = [
  { user_id: 1, firstName: "Jakhar", gender: "male" },
  { user_id: 2, firstName: "Lalit", gender: "male" },
  { user_id: 3, firstName: "Kumar", gender: "male" },
];

document.getElementById("btn-show").addEventListener("click", () => {
  Lesson.log("out-show", `Users array (${users.length} users):\n${JSON.stringify(users, null, 2)}`);
});

document.getElementById("btn-loop").addEventListener("click", () => {
  let output = "for (let user of users) {\n";
  for (let user of users) {
    output += `  ID: ${user.user_id}, Name: ${user.firstName}\n`;
  }
  output += "}";
  Lesson.log("out-loop", output);
});

document.getElementById("btn-find").addEventListener("click", () => {
  const id = Number(document.getElementById("find-id").value);
  const found = users.find(u => u.user_id === id);
  if (found) {
    Lesson.log("out-find", `Found user:\n${JSON.stringify(found, null, 2)}`);
  } else {
    Lesson.log("out-find", `No user with id ${id} found.`);
  }
});

document.getElementById("btn-map").addEventListener("click", () => {
  const names = users.map(u => u.firstName);
  const ids = users.map(u => u.user_id);
  Lesson.log("out-map", `users.map(u => u.firstName)\n→ ${JSON.stringify(names)}\n\nusers.map(u => u.user_id)\n→ ${JSON.stringify(ids)}`);
});

document.getElementById("btn-add").addEventListener("click", () => {
  const name = document.getElementById("add-name").value.trim() || "Anonymous";
  const gender = document.getElementById("add-gender").value.trim() || "unknown";
  const newUser = {
    user_id: users.length + 1,
    firstName: name,
    gender: gender,
  };
  users.push(newUser);
  Lesson.log("out-add", `Added user:\n${JSON.stringify(newUser, null, 2)}\n\nTotal users: ${users.length}`);
});
