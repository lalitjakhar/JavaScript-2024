const myArray = [];

function renderBuild() {
  Lesson.showArray("view-build", myArray);
  Lesson.log(
    "out-build",
    myArray.length
      ? `const myArray = ${JSON.stringify(myArray)}\nlength = ${myArray.length}`
      : "Your const array is empty. Add items!"
  );
}

document.getElementById("btn-modify").addEventListener("click", () => {
  const fruits = ["apple", "mango"];
  Lesson.showArray("view-const", fruits);
  Lesson.log("out-modify", `Initial: ${JSON.stringify(fruits)}`);
  
  setTimeout(() => {
    fruits.push("banana");
    fruits[0] = "orange";
    Lesson.showArray("view-const", fruits);
    Lesson.log("out-modify", `After modifications:\n${JSON.stringify(fruits)}\n\nconst allows changes to contents!`);
  }, 1000);
});

document.getElementById("btn-error").addEventListener("click", () => {
  try {
    const fruits = ["apple", "mango"];
    Lesson.log("out-error", `Initial: const fruits = ${JSON.stringify(fruits)}\n\nTrying: fruits = ["new", "array"]…`);
    
    setTimeout(() => {
      try {
        eval('fruits = ["new", "array"]');
      } catch (e) {
        Lesson.log("out-error", `❌ Error: ${e.message}\n\nYou cannot reassign a const variable!`);
      }
    }, 1000);
  } catch (e) {
    Lesson.log("out-error", `Error: ${e.message}`);
  }
});

document.getElementById("btn-add").addEventListener("click", () => {
  const input = document.getElementById("item");
  const value = input.value.trim();
  if (!value) return;
  myArray.push(value);
  input.value = "";
  input.focus();
  renderBuild();
});

document.getElementById("item").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("btn-add").click();
});

renderBuild();
