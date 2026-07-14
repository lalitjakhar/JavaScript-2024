// =============================================
// VARIABLES — clear, commented examples
// Run: node basics/variables/variablePrint.js
// Visual: open basics/variables/index.html
// =============================================

// 1) Create a variable (a named box) and print it
let firstName = "Lalit";
console.log("1) firstName →", firstName);

// 2) Names are case-sensitive: firstName ≠ FirstName
// 3) Change the value later (allowed with let)
firstName = "Jakhar";
console.log("2) after change →", firstName);

// 4) const cannot be reassigned
const age = 25;
console.log("3) age (const) →", age);
// age = 26; // ❌ Error if uncommented

// 5) Prefer: const by default, let when you must change, avoid var in new code
var oldStyle = "works, but avoid in modern JS";
console.log("4) var example →", oldStyle);
