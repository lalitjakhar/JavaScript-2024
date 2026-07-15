const words = ["Hello", "cat", "Dog", "Lion"];

Lesson.showArray("view-words", words);

document.getElementById("btn-length").addEventListener("click", () => {
  const result = words.find((word) => word.length === 3);
  Lesson.log(
    "out-length",
    `words = ${JSON.stringify(words)}\n\nSearching for: word.length === 3\n\nResult: "${result}"`
  );
});

const users = [
  { userId: 1, firstName: "jakhar", age: "18" },
  { userId: 2, firstName: "arpit", age: "29" },
  { userId: 3, firstName: "sunny", age: "31" },
  { userId: 4, firstName: "mohit", age: "61" },
];

document.getElementById("btn-user").addEventListener("click", () => {
  const id = Number(document.getElementById("user-id").value);
  const myUser = users.find((user) => user.userId === id);
  
  if (myUser) {
    Lesson.log(
      "out-user",
      `Found user with ID ${id}:\n\n${JSON.stringify(myUser, null, 2)}`
    );
  } else {
    Lesson.log("out-user", `No user found with ID ${id}`);
  }
});

document.getElementById("btn-nomatch").addEventListener("click", () => {
  const result = words.find((word) => word.length === 100);
  Lesson.log(
    "out-nomatch",
    `Searching for: word.length === 100\n\nResult: ${result}\n\nNo match found!`
  );
});
