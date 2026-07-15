const baseUser = { name: "Jakhar", age: 18 };

document.getElementById("btn-copy").addEventListener("click", () => {
  const original = { name: "Jakhar", age: 18 };
  const copy = { ...original };
  Lesson.log("out-copy", `Original:\n${JSON.stringify(original, null, 2)}\n\nCopy:\n${JSON.stringify(copy, null, 2)}\n\nSame reference? ${original === copy}`);
});

document.getElementById("btn-merge").addEventListener("click", () => {
  const obj1 = { key1: "value1", key2: "value2" };
  const obj2 = { key3: "value3", key4: "value4" };
  const merged = { ...obj1, ...obj2 };
  Lesson.showObject("view-merged", merged);
  Lesson.log("out-merge", `obj1: ${JSON.stringify(obj1)}\nobj2: ${JSON.stringify(obj2)}\n\nMerged:\n${JSON.stringify(merged, null, 2)}`);
});

document.getElementById("btn-override").addEventListener("click", () => {
  const obj1 = { key1: "value1", key2: "value2" };
  const obj2 = { key1: "OVERRIDE", key3: "value3" };
  const result = { ...obj1, ...obj2 };
  Lesson.showObject("view-override", result);
  Lesson.log("out-override", `obj1.key1 = "value1"\nobj2.key1 = "OVERRIDE"\n\nResult:\n${JSON.stringify(result, null, 2)}\n\nobj2 wins! Last value overrides.`);
});

document.getElementById("btn-add").addEventListener("click", () => {
  const key = document.getElementById("add-key").value.trim() || "newKey";
  const value = document.getElementById("add-value").value.trim() || "";
  const updated = { ...baseUser, [key]: value };
  Lesson.showObject("view-add", updated);
  Lesson.log("out-add", `Base: ${JSON.stringify(baseUser)}\n\nUpdated:\n${JSON.stringify(updated, null, 2)}`);
});
