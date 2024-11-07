// for each

const numbers = [2, 3, 6, 7, 5];

function myFunc(number, index) {
  console.log(`index is${index} number is ${number}`, index);
}
// for (let i = 0; i < numbers.length; i++) {
//   myFunc(numbers[i], i);
// }

numbers.forEach(function (number) {
  console.log(number * 3);
});

//  other exapmle  //
const users = [
  { firstName: "jakhar", age: "18" },
  { firstName: "arpit", age: "29" },
  { firstName: "sunny", age: "31" },
];

// for (let user of users) {
//   console.log(user.firstName);
// }

users.forEach(function (user) {
  console.log(user.firstName);
});

// users.forEach((user) => {
//   console.log(user.firstName);
// });
