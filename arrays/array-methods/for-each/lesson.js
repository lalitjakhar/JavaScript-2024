const numbers = [2, 3, 6, 7, 5];

Lesson.showArray("view-nums", numbers);

document.getElementById("btn-basic").addEventListener("click", () => {
  let output = "forEach: multiply each by 3\n\n";
  numbers.forEach((number) => {
    output += `${number} × 3 = ${number * 3}\n`;
  });
  Lesson.log("out-basic", output);
});

document.getElementById("btn-index").addEventListener("click", () => {
  let output = "forEach with index:\n\n";
  numbers.forEach((number, index) => {
    output += `[${index}] = ${number}\n`;
  });
  Lesson.log("out-index", output);
});

document.getElementById("btn-users").addEventListener("click", () => {
  const users = [
    { firstName: "jakhar", age: "18" },
    { firstName: "arpit", age: "29" },
    { firstName: "sunny", age: "31" },
  ];
  
  let output = "User names:\n\n";
  users.forEach((user) => {
    output += `${user.firstName}\n`;
  });
  Lesson.log("out-users", output);
});
