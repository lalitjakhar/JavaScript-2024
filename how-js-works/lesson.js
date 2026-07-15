Lesson.bindRun("btn-global", () => {
  const lines = [];
  lines.push("this → " + (typeof this === "object" ? "[object Window]" : String(this)));
  lines.push("window → " + (typeof window === "object" ? "[object Window]" : String(window)));
  lines.push("this === window → " + (this === window));
  Lesson.log("out-global", lines.join("\n"));
});

Lesson.bindRun("btn-hoist", () => {
  const lines = [];
  
  // Simulate hoisting
  let firstName;
  function myFunction() {
    return "this is my function";
  }
  
  lines.push("Before assignment: firstName = " + firstName);
  firstName = "Lalit Jakhar";
  lines.push("After assignment: firstName = " + firstName);
  lines.push("");
  lines.push("myFunction = " + myFunction.toString().split('\n')[0] + " ... }");
  lines.push("myFunction() = " + myFunction());
  
  Lesson.log("out-hoist", lines.join("\n"));
});
