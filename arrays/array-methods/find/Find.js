// find method

const myArray = ["Hello", "cat", "Dog", "Lion"];

// function isLength3(string) {
//   return string.lengtj === 3;
// }
// const ans = myArray.find(isLength3);
// console.log(ans);

const ans = myArray.find((string) => string.length == 3);
console.log(ans);

const users = [
  { userId: 1, firstName: "jakhar", age: "18" },
  { userId: 2, firstName: "arpit", age: "29" },
  { userId: 3, firstName: "sunny", age: "31" },
  { userId: 4, firstName: "mohit", age: "61" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
