// Solution 2 — Arrays

const nums = [1, 2, 3, 4, 5, 6];

const result = nums.filter((n) => n % 2 !== 0).map((n) => n * 2);

console.log(result); // [2, 6, 10]
