// =============================================
// ARRAYS intro
// Run: node arrays/intro/IntroArray.js
// Visual (best): open arrays/intro/index.html
// =============================================

// An array is an ordered list. Indexes start at 0.
const fruits = ["apple", "banana", "grapes"];
// indexes:        0         1          2

console.log("1) fruits[2] →", fruits[2]); // grapes
console.log("2) length →", fruits.length); // 3

const numbers = [1, 2, 3, 4, 5, 6];
console.log("3) numbers →", numbers);

// Mixed types are allowed
const mixed = [1, "string", null, undefined, 5, 6];
console.log("4) mixed →", mixed);

// Change one item by index
const fruits2 = ["apple", "banana", "grapes"];
fruits2[1] = "mango";
console.log("5) after fruits2[1] = 'mango' →", fruits2);

// typeof is misleading for arrays — use Array.isArray
const fruits3 = ["apple", "banana", "grapes"];
console.log("6) typeof →", typeof fruits3); // "object"
console.log("6) Array.isArray →", Array.isArray(fruits3)); // true
