const band = {
  bandName: "led zeppelin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "Kashmir",
};

document.getElementById("btn-basic").addEventListener("click", () => {
  const { bandName, famousSong } = band;
  Lesson.log("out-basic", `const { bandName, famousSong } = band;\n\nbandName → "${bandName}"\nfamousSong → "${famousSong}"`);
});

document.getElementById("btn-rename").addEventListener("click", () => {
  const { bandName: name, famousSong: song } = band;
  Lesson.log("out-rename", `const { bandName: name, famousSong: song } = band;\n\nname → "${name}"\nsong → "${song}"`);
});

document.getElementById("btn-rest").addEventListener("click", () => {
  const { bandName, ...restProps } = band;
  Lesson.showObject("view-rest", restProps);
  Lesson.log("out-rest", `const { bandName, ...restProps } = band;\n\nbandName → "${bandName}"\n\nrestProps:\n${JSON.stringify(restProps, null, 2)}`);
});

document.getElementById("btn-default").addEventListener("click", () => {
  const user = { name: "Jakhar" };
  const { name, age = 18, country = "India" } = user;
  Lesson.log("out-default", `const user = { name: "Jakhar" };\nconst { name, age = 18, country = "India" } = user;\n\nname → "${name}"\nage → ${age} (default)\ncountry → "${country}" (default)`);
});
