function myFunc() {
  function hello() {
    return "Hello World";
  }
  return hello;
}

function makeGreeter(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

function makeMultiplier(factor) {
  return (n) => n * factor;
}

let customGreeter = null;

document.getElementById("btn-basic").addEventListener("click", () => {
  const fn = myFunc();
  const result = fn();
  Lesson.log("out-basic", `function myFunc() {\n  function hello() {\n    return "Hello World";\n  }\n  return hello;\n}\n\nconst fn = myFunc(); // fn is now the hello function\nfn()\n→ "${result}"\n\n✅ myFunc returns a function!`);
});

document.getElementById("btn-immediate").addEventListener("click", () => {
  const result = myFunc()();
  Lesson.log("out-immediate", `myFunc()()\n\nFirst (): calls myFunc, returns hello\nSecond (): calls hello, returns "Hello World"\n\n→ "${result}"\n\n✅ Double invocation!`);
});

document.getElementById("btn-factory").addEventListener("click", () => {
  const greeting = document.getElementById("greeting-input").value.trim() || "Hello";
  customGreeter = makeGreeter(greeting);
  Lesson.log("out-factory", `const greeter = makeGreeter("${greeting}")\n\n✅ Greeter function created!\nNow click "Greet" to use it.`);
});

document.getElementById("btn-greet").addEventListener("click", () => {
  if (!customGreeter) {
    Lesson.log("out-factory", "⚠️ Click 'Make greeter' first!");
    return;
  }
  const name = document.getElementById("name-input").value.trim() || "Guest";
  const result = customGreeter(name);
  Lesson.log("out-factory", `greeter("${name}")\n→ "${result}"\n\n✅ Custom greeting function!`);
});

document.getElementById("btn-multiplier").addEventListener("click", () => {
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  Lesson.log("out-multiplier", `const double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\n\ndouble(5) → ${double(5)}\ntriple(5) → ${triple(5)}\n\ndouble(10) → ${double(10)}\ntriple(10) → ${triple(10)}\n\n✅ Each returned function "remembers" its factor!`);
});
