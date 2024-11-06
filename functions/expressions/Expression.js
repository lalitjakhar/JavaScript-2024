// function Expression

const singHappyBirthday = function () {
  console.log("Happy Birthday To You...........");
};
singHappyBirthday();

const sumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};
const returnedNumberValue = sumTwoNumbers(4, 5);
console.log(returnedNumberValue);

const isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
console.log(isEven(3));

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
