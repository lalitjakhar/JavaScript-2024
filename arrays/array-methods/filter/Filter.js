// filter method

//for even numbers
const numbers = [1, 2, 3, 4, 5, 6, 4, 8, 7, 9];

const isEven = function (number) {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//for odd numbers

// const isOdd = function (number) {
//   return number % 2 !== 0;
// };

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(oddNumbers);
