// 1111111111111111111111111111111111
// basic function to say Happy Birthday
function singHappyBirthday() {
  console.log("Happy Birthday To You...........");
}
singHappyBirthday();

// 2222222222222222222222222
//add two numbers
function twoPlusFour() {
  //   console.log(2 + 4);
  return 2 + 4;
}
console.log(twoPlusFour());
const returnedValue = twoPlusFour();
console.log(returnedValue);

twoPlusFour();

// 3333333333333333333333333333
// reusable function
function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}
const returnedNumberValue = sumTwoNumbers(4, 5);
console.log(returnedNumberValue);

// reusable function
function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}
const returnedThreeNumberValue = sumThreeNumbers(4, 5, 9);
console.log(returnedThreeNumberValue);

// 44444444444444444444444
// odd or even
// input :1 number1
// output :true, false
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(3));

// 5555555555
// input: string
// output: firstCharacter

function firstCharacter(anyString) {
  return anyString[0];
}
console.log(firstCharacter("zbc"));

// 66666666666666666666
// input : array, target : (number)
// index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 5, 7, 8];
const ans = findTarget(myArray, 8);
console.log(ans);
