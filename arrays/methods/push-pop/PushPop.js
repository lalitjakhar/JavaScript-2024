// =============================================
// push / pop — end of array
// Visual: arrays/methods/push-pop/index.html
// =============================================

const fruits = ["apple", "banana"];
console.log("start →", fruits);

// push: add at END, returns new length
const newLength = fruits.push("mango");
console.log("after push('mango') →", fruits, "| length returned:", newLength);

// pop: remove from END, returns removed item
const removed = fruits.pop();
console.log("after pop() →", fruits, "| removed:", removed);
