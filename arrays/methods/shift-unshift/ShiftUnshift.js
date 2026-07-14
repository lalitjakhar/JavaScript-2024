// =============================================
// unshift / shift — start of array
// Visual: arrays/methods/shift-unshift/index.html
// =============================================

let fruits = ["apple", "mango", "grapes"];
console.log("start →", fruits);

// unshift: add at START
fruits.unshift("banana");
console.log("after unshift('banana') →", fruits);

// shift: remove from START (returns removed item)
const removedFruit = fruits.shift();
console.log("after shift() →", fruits);
console.log("removed fruit →", removedFruit);
