let deleteArray = ["item1", "item2", "item3", "item4"];
let insertArray = ["item1", "item2"];
let replaceArray = ["item1", "item2", "item3", "item4"];

Lesson.showArray("view-delete", deleteArray);
Lesson.showArray("view-insert", insertArray);

document.getElementById("btn-delete").addEventListener("click", () => {
  const deleted = deleteArray.splice(1, 2);
  Lesson.showArray("view-delete", deleteArray);
  Lesson.log(
    "out-delete",
    `splice(1, 2) deleted: ${JSON.stringify(deleted)}\n\nArray now: ${JSON.stringify(deleteArray)}`
  );
});

document.getElementById("btn-reset").addEventListener("click", () => {
  deleteArray = ["item1", "item2", "item3", "item4"];
  Lesson.showArray("view-delete", deleteArray);
  Lesson.log("out-delete", "Array reset!");
});

document.getElementById("btn-insert").addEventListener("click", () => {
  const index = Number(document.getElementById("insert-index").value);
  const value = document.getElementById("insert-value").value.trim() || "new";
  insertArray.splice(index, 0, value);
  Lesson.showArray("view-insert", insertArray);
  Lesson.log(
    "out-insert",
    `Inserted "${value}" at index ${index}\n\nArray: ${JSON.stringify(insertArray)}`
  );
});

document.getElementById("btn-replace").addEventListener("click", () => {
  replaceArray = ["item1", "item2", "item3", "item4"];
  replaceArray.splice(1, 2, "insertedA", "insertedB");
  Lesson.showArray("view-replace", replaceArray);
  Lesson.log(
    "out-replace",
    `splice(1, 2, "insertedA", "insertedB")\n\nDeleted 2 items, inserted 2 new ones\n\nArray: ${JSON.stringify(replaceArray)}`
  );
});
