// Map method

const numbers = [3, 4, 2, 7, 9];

// const square = function (number) {
//   return number * number;
// };
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// other way
// const squareNumber = numbers.map(function (number) {
//   return number * number;
// });
// console.log(squareNumber);

//other way
const squareNumber = numbers.map((number) => {
  return number * number;
});
console.log(squareNumber);

// other example

const users = [
  { firstName: "jakhar", age: "18" },
  { firstName: "arpit", age: "29" },
  { firstName: "sunny", age: "31" },
];

const userNames = users.map((user) => {
  return user.firstName;
});
