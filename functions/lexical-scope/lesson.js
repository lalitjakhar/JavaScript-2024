document.getElementById("btn-inner").addEventListener("click", () => {
  function outer() {
    const message = "Hello from outer!";
    function inner() {
      return message;
    }
    return inner();
  }
  const result = outer();
  Lesson.log("out-inner", `function outer() {\n  const message = "Hello from outer!";\n  function inner() {\n    console.log(message);\n  }\n  inner();\n}\n\nResult:\n→ "${result}"\n\n✅ Inner function sees outer's variables!`);
});

document.getElementById("btn-nearest").addEventListener("click", () => {
  function myApp() {
    const myVar = "outer";
    function myFunc() {
      const myVar = "inner";
      return myVar;
    }
    return { innerResult: myFunc(), outerResult: myVar };
  }
  const result = myApp();
  Lesson.log("out-nearest", `function myApp() {\n  const myVar = "outer";\n  function myFunc() {\n    const myVar = "inner";\n    console.log(myVar);\n  }\n  myFunc();\n  console.log(myVar);\n}\n\nInside myFunc: "${result.innerResult}"\nInside myApp: "${result.outerResult}"\n\n✅ Nearest variable wins!`);
});

document.getElementById("btn-chain").addEventListener("click", () => {
  const global = "I'm global";
  function outer() {
    const outerVar = "I'm outer";
    function inner() {
      return { global, outerVar };
    }
    return inner();
  }
  const result = outer();
  Lesson.log("out-chain", `const global = "I'm global";\nfunction outer() {\n  const outerVar = "I'm outer";\n  function inner() {\n    console.log(global, outerVar);\n  }\n  inner();\n}\n\nglobal: "${result.global}"\nouterVar: "${result.outerVar}"\n\n✅ Inner sees both outer and global!`);
});

document.getElementById("btn-position").addEventListener("click", () => {
  const x = 10;
  function show() {
    return x;
  }
  function caller() {
    const x = 20;
    return show();
  }
  const result = caller();
  Lesson.log("out-position", `const x = 10;\nfunction show() {\n  console.log(x);\n}\nfunction caller() {\n  const x = 20;\n  show();\n}\n\ncaller()\n→ ${result}\n\n✅ show() sees x=10 from where it was WRITTEN, not where it was called!`);
});
