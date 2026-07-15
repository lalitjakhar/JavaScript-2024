function hello() {
  return "Hello world";
}

const greet = function () {
  return "Hello from expression!";
};

const welcome = () => {
  return "Welcome from arrow!";
};

document.getElementById("btn-decl").addEventListener("click", () => {
  Lesson.log("out-decl", `// Calling before definition:\nhello()\n→ "${hello()}"\n\nfunction hello() {\n  return "Hello world";\n}\n\n✅ Works! Declarations are hoisted.`);
});

document.getElementById("btn-expr").addEventListener("click", () => {
  Lesson.log("out-expr", `const greet = function() {\n  return "Hello from expression!";\n};\n\ngreet()\n→ "${greet()}"\n\n⚠️ Must define before calling.`);
});

document.getElementById("btn-arrow").addEventListener("click", () => {
  Lesson.log("out-arrow", `const welcome = () => {\n  return "Welcome from arrow!";\n};\n\nwelcome()\n→ "${welcome()}"\n\n⚠️ Must define before calling.`);
});
