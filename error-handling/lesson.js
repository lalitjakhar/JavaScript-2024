Lesson.bindRun("btn-try", () => {
  try {
    const data = JSON.parse("{ bad json }");
    Lesson.log("out-try", "Parsed:", data);
  } catch (error) {
    Lesson.log("out-try", "Caught error:", error.message);
  }
});

Lesson.bindRun("btn-throw", () => {
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  const lines = [];
  try {
    lines.push("divide(10, 2) = " + divide(10, 2));
    lines.push("divide(10, 0) = " + divide(10, 0));
  } catch (error) {
    lines.push("Math problem: " + error.message);
  }
  
  Lesson.log("out-throw", lines.join("\n"));
});

Lesson.bindRun("btn-finally", () => {
  const lines = [];
  try {
    lines.push("Working...");
  } catch (error) {
    lines.push(error.message);
  } finally {
    lines.push("Cleanup done (finally)");
  }
  
  Lesson.log("out-finally", lines.join("\n"));
});
