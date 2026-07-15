function greet() {
  return "Hello!";
}

function callFunc(fn) {
  return fn();
}

function operate(a, b, operation) {
  return operation(a, b);
}

document.getElementById("btn-basic").addEventListener("click", () => {
  const result = callFunc(greet);
  Lesson.log("out-basic", `function greet() { return "Hello!"; }\nfunction callFunc(fn) { return fn(); }\n\ncallFunc(greet)\n→ "${result}"\n\n✅ greet is passed as a callback!`);
});

document.getElementById("btn-map").addEventListener("click", () => {
  const nums = [1, 2, 3, 4];
  const doubled = nums.map(n => n * 2);
  const squared = nums.map(n => n * n);
  Lesson.log("out-map", `nums = ${JSON.stringify(nums)}\n\nnums.map(n => n * 2)\n→ ${JSON.stringify(doubled)}\n\nnums.map(n => n * n)\n→ ${JSON.stringify(squared)}\n\n✅ Arrow function is the callback!`);
});

document.getElementById("btn-operate").addEventListener("click", () => {
  const a = Number(document.getElementById("op-a").value);
  const b = Number(document.getElementById("op-b").value);
  const op = document.getElementById("op-select").value;
  
  let result, opFn;
  if (op === "add") {
    opFn = "(x, y) => x + y";
    result = operate(a, b, (x, y) => x + y);
  } else if (op === "multiply") {
    opFn = "(x, y) => x * y";
    result = operate(a, b, (x, y) => x * y);
  } else {
    opFn = "(x, y) => x - y";
    result = operate(a, b, (x, y) => x - y);
  }
  
  Lesson.log("out-operate", `operate(${a}, ${b}, ${opFn})\n→ ${result}\n\n✅ Different callback = different behavior!`);
});
