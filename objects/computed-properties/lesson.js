const dynamicObj = {};

document.getElementById("btn-build").addEventListener("click", () => {
  const key1 = "firstName";
  const key2 = "lastName";
  const obj = {
    [key1]: "Lalit",
    [key2]: "Jakhar",
  };
  Lesson.showObject("view-obj", obj);
  Lesson.log("out-build", `const key1 = "firstName";\nconst key2 = "lastName";\n\nconst obj = {\n  [key1]: "Lalit",\n  [key2]: "Jakhar"\n};\n\nResult:\n${JSON.stringify(obj, null, 2)}`);
});

document.getElementById("btn-dynamic").addEventListener("click", () => {
  const key = document.getElementById("key-input").value.trim() || "defaultKey";
  const value = document.getElementById("value-input").value.trim() || "";
  
  const newObj = {
    ...dynamicObj,
    [key]: value,
  };
  Object.assign(dynamicObj, newObj);
  
  Lesson.showObject("view-dynamic", dynamicObj);
  Lesson.log("out-dynamic", `Added: { [${key}]: "${value}" }\n\nCurrent object:\n${JSON.stringify(dynamicObj, null, 2)}`);
});

document.getElementById("btn-old").addEventListener("click", () => {
  const key1 = "objkey1";
  const key2 = "objkey2";
  const value1 = "valuekey1";
  const value2 = "valuekey2";
  
  const obj = {};
  obj[key1] = value1;
  obj[key2] = value2;
  
  Lesson.log("out-old", `const obj = {};\nobj["${key1}"] = "${value1}";\nobj["${key2}"] = "${value2}";\n\nResult:\n${JSON.stringify(obj, null, 2)}`);
});
