// Arrow Function

const singHappyBirthday = () => {
  console.log("Happy Birthday To You.......😍");
};
singHappyBirthday();

const sumTwoNumbers = (number1, number2) => {
  return number1 + number2;
};
const returnedNumberValue = sumTwoNumbers(4, 5);
console.log(returnedNumberValue);

const isEven = (number) => number % 2 === 0;

console.log(isEven(3));

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
