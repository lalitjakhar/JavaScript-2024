const users = [
  { user_id: 1, firstName: "Jakhar", gender: "male" },
  { user_id: 2, firstName: "Lalit", gender: "male" },
  { user_id: 3, firstName: "Kumar", gender: "male" },
];

document.getElementById("btn-show").addEventListener("click", () => {
  Lesson.log("out-show", `Users array:\n${JSON.stringify(users, null, 2)}`);
});

document.getElementById("btn-first").addEventListener("click", () => {
  const [{ firstName, user_id }] = users;
  Lesson.log("out-first", `const [{ firstName, user_id }] = users;\n\nfirstName → "${firstName}"\nuser_id → ${user_id}`);
});

document.getElementById("btn-skip").addEventListener("click", () => {
  const [, , { gender: user3gender }] = users;
  Lesson.log("out-skip", `const [, , { gender: user3gender }] = users;\n\nuser3gender → "${user3gender}"\n\nSkipped first two users!`);
});

document.getElementById("btn-multi").addEventListener("click", () => {
  const [{ firstName: user1Name, user_id }, , { gender: user3gender }] = users;
  Lesson.log("out-multi", `const [\n  { firstName: user1Name, user_id },\n  ,\n  { gender: user3gender }\n] = users;\n\nuser1Name → "${user1Name}"\nuser_id → ${user_id}\nuser3gender → "${user3gender}"`);
});
