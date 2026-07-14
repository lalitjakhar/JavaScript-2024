// Solution 4 — Functions

function isEven(n) {
  return n % 2 === 0;
}

function sumArray(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(sumArray([1, 2, 3, 4])); // 10
