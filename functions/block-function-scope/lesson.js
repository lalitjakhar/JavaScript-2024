document.getElementById("btn-block").addEventListener("click", () => {
  let output = "{\n  let name = \"Jakhar\";\n  console.log(name); // \"Jakhar\"\n}\n";
  let name;
  {
    name = "Jakhar";
    output += `Inside block: "${name}"\n`;
  }
  output += "\ntry console.log(name); // outside block\n→ Would throw ReferenceError if name was let inside block\n\n✅ let is block-scoped!";
  Lesson.log("out-block", output);
});

document.getElementById("btn-var").addEventListener("click", () => {
  if (true) {
    var firstName = "Jakhar";
  }
  Lesson.log("out-var", `if (true) {\n  var firstName = "Jakhar";\n}\nconsole.log(firstName); // outside if block\n→ "${firstName}"\n\n⚠️ var leaks out! It ignores block scope.`);
});

document.getElementById("btn-func").addEventListener("click", () => {
  function myApp() {
    if (true) {
      var firstName = "jakhar";
    }
    return firstName;
  }
  const result = myApp();
  Lesson.log("out-func", `function myApp() {\n  if (true) {\n    var firstName = "jakhar";\n  }\n  console.log(firstName); // after if block\n}\n\nmyApp()\n→ "${result}"\n\n✅ var is function-scoped, visible everywhere in the function.`);
});

document.getElementById("btn-loop").addEventListener("click", () => {
  let output = "for (let i = 0; i < 3; i++) {\n";
  for (let i = 0; i < 3; i++) {
    output += `  Loop ${i}\n`;
  }
  output += "}\n// i is not available here\n\n✅ let keeps i inside the loop!";
  Lesson.log("out-loop", output);
});
