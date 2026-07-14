function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
}

function canVote(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("Allowed to vote");
    else reject(new Error("Too young to vote"));
  });
}

document.getElementById("btn-wait").addEventListener("click", () => {
  const ms = Number(document.getElementById("ms").value) || 800;
  Lesson.log("out-wait", `Promise pending… waiting ${ms}ms`);
  wait(ms).then((msg) => {
    Lesson.log("out-wait", `Status: fulfilled\n→ ${msg}`);
  });
});

document.getElementById("btn-vote").addEventListener("click", () => {
  const age = Number(document.getElementById("age").value);
  canVote(age)
    .then((msg) => Lesson.log("out-vote", `Success\n→ ${msg}`))
    .catch((err) => Lesson.log("out-vote", `Fail\n→ ${err.message}`));
});
