// sets (it is iterable)
// store data
// sets also have own methods
// No index-based access
// order is not granted
// unique items only (no duplicates allowed)

const numbers = new Set([1, 2, 3]);
console.log(numbers);

const alphabets = new Set("abcdefghi");
console.log(alphabets);

// new set example
const newSet = new Set();
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(7);
numbers.add(9);

// if (numbers.has(2)) {
//   console.log("2 is present");
// } else {
//   console.log("2 is not present");
// }

for (let number of numbers) {
  console.log(number);
}

console.log(numbers);

const myArray = [1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8];

const uniqueElements = new Set(myArray);
console.log(uniqueElements);
