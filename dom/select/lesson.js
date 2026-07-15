Lesson.bindRun("btn-select", () => {
  const title = document.getElementById("demo-title");
  title.textContent = "Updated by id!";

  const intro = document.querySelector(".demo-intro");
  intro.textContent = "Updated by querySelector!";

  const hint = document.querySelector("[data-role='hint']");
  hint.style.fontWeight = "bold";

  const items = document.querySelectorAll("#demo-list li");
  const lines = [];
  items.forEach((item, i) => {
    lines.push(`Item ${i + 1}: ${item.textContent}`);
  });

  Lesson.log("out-select", "Elements updated!\n" + lines.join("\n"));
});

Lesson.bindRun("btn-create", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Item three (added by JS)";
  document.getElementById("demo-list").appendChild(newItem);
  
  Lesson.log("out-select", "New item added to the list!");
});
