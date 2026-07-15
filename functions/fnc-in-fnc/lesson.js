function app() {
  const greet = () => {
    return "Hello World";
  };
  const addTwo = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  
  return {
    greeting: greet(),
    sum: addTwo(2, 4),
    product: multiply(2, 4),
  };
}

function calculate(x, y) {
  const square = n => n * n;
  const sum = (a, b) => a + b;
  
  return sum(square(x), square(y));
}

document.getElementById("btn-basic").addEventListener("click", () => {
  function basicApp() {
    const greet = () => "Hello World";
    return greet();
  }
  const result = basicApp();
  Lesson.log("out-basic", `function app() {\n  const greet = () => "Hello World";\n  return greet();\n}\n\napp()\n→ "${result}"\n\n✅ greet is a function inside app!`);
});

document.getElementById("btn-multi").addEventListener("click", () => {
  const result = app();
  Lesson.log("out-multi", `function app() {\n  const addTwo = (a, b) => a + b;\n  const multiply = (a, b) => a * b;\n  \n  console.log(addTwo(2, 4));\n  console.log(multiply(2, 4));\n}\n\napp()\ngreeting: "${result.greeting}"\nsum: ${result.sum}\nproduct: ${result.product}\n\n✅ Multiple inner functions!`);
});

document.getElementById("btn-calc").addEventListener("click", () => {
  const x = Number(document.getElementById("calc-x").value);
  const y = Number(document.getElementById("calc-y").value);
  const result = calculate(x, y);
  Lesson.log("out-calc", `calculate(${x}, ${y})\n\nInner: square(${x}) = ${x * x}\nInner: square(${y}) = ${y * y}\nInner: sum(${x * x}, ${y * y}) = ${result}\n\n→ ${result}\n\n✅ Helper functions make code readable!`);
});
