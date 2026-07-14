// Error handling — catch problems without crashing your app

// 1) try / catch
try {
  const data = JSON.parse("{ bad json }");
  console.log(data);
} catch (error) {
  console.log("Caught error:", error.message);
}

// 2) throw your own error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // jumps to catch
} catch (error) {
  console.log("Math problem:", error.message);
}

// 3) finally always runs
try {
  console.log("Working...");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup done (finally)");
}

// Tip: read the FIRST line of an error — it usually names the file + line
