document.getElementById("btn-age").addEventListener("click", () => {
  const age = Number(document.getElementById("age").value);
  const message = age > 18 ? "You can play" : "Play something else";
  Lesson.log(
    "out-age",
    `age = ${age}\nif (age > 18) { ... }\n\n→ ${message}`
  );
});

document.getElementById("btn-odd").addEventListener("click", () => {
  const num = Number(document.getElementById("num").value);
  const rem = num % 2;
  const kind = rem === 0 ? "even" : "odd";
  Lesson.log(
    "out-odd",
    `${num} % 2 = ${rem}\nSo it is → ${kind}`
  );
});

document.getElementById("btn-name").addEventListener("click", () => {
  const firstName = document.getElementById("fname").value;
  if (firstName) {
    Lesson.log("out-name", `firstName is truthy\n→ ${firstName}`);
  } else {
    Lesson.log("out-name", `firstName is falsy (empty)\n→ firstName is empty`);
  }
});
