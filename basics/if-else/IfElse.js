// =============================================
// if / else — decisions
// Run: node basics/if-else/IfElse.js
// Visual: open basics/if-else/index.html
// =============================================

// Example 1: age check
let age = 19;

if (age > 18) {
  console.log("1) User can play");
} else {
  console.log("1) User can play something else");
}

// Example 2: even or odd (% = remainder)
let num = 13;

if (num % 2 === 0) {
  console.log("2) even");
} else {
  console.log("2) odd"); // 13 % 2 === 1 → odd
}

// Example 3: empty values are "falsy"
let firstName; // undefined

if (firstName) {
  console.log("3)", firstName);
} else {
  console.log("3) firstName is empty");
}

// Prefer === (strict) over == so "5" and 5 are not treated the same
console.log("4) 5 === '5' →", 5 === "5"); // false
console.log("4) 5 == '5'  →", 5 == "5"); // true (avoid surprises)
