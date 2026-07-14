// =============================================
// filter — keep items that pass a test
// Visual: arrays/array-methods/filter/index.html
// =============================================

const numbers = [1, 2, 3, 4, 5, 6, 4, 8, 7, 9];

// Even numbers: remainder 0 when divided by 2
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("evens →", evenNumbers);

// Odd numbers
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log("odds →", oddNumbers);

// Original array is NOT changed
console.log("original →", numbers);
