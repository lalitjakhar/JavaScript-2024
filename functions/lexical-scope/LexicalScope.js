// Lexical Scope

// Lexical scope means that a function's scope is determined by its location within the source code.
// It allows a function to access variables defined outside of it within its parent scope.

function myApp() {
  const myVar = "value1";
  function myFunc() {
    const myVar = "value59";
    console.log("inside myFunc", myVar); // Logs "inside myFunc value59", because it uses the nearest `myVar`.
  }
  const myFunc2 = function () {};
  const myFunc3 = () => {};
  console.log(myVar);
  myFunc;
}
myApp();
