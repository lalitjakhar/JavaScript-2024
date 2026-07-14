// =============================================
// map — transform every item → new array (same length)
// Visual: arrays/array-methods/map-method/index.html
// =============================================

const numbers = [3, 4, 2, 7, 9];

// Square each number
const squareNumber = numbers.map((number) => number * number);
console.log("squares →", squareNumber); // [9, 16, 4, 49, 81]
console.log("original unchanged →", numbers);

// Pull one field from objects
const users = [
  { firstName: "jakhar", age: "18" },
  { firstName: "arpit", age: "29" },
  { firstName: "sunny", age: "31" },
];

const userNames = users.map((user) => user.firstName);
console.log("names →", userNames); // ["jakhar", "arpit", "sunny"]
