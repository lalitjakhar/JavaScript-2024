// =============================================
// Functions intro — reusable recipes
// Visual: functions/intro/index.html
// =============================================

// 1) No inputs — just run side effects / return a message
function singHappyBirthday() {
  return "Happy Birthday To You...........";
}
console.log("1)", singHappyBirthday());

// 2) Return a value (don't only console.log inside)
function twoPlusFour() {
  return 2 + 4;
}
console.log("2) twoPlusFour() →", twoPlusFour());

// 3) Parameters make functions reusable
function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}
console.log("3) sumTwoNumbers(4, 5) →", sumTwoNumbers(4, 5));

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}
console.log("3) sumThreeNumbers(4, 5, 9) →", sumThreeNumbers(4, 5, 9));

// 4) Return true / false
function isEven(number) {
  return number % 2 === 0;
}
console.log("4) isEven(3) →", isEven(3));
console.log("4) isEven(4) →", isEven(4));

// 5) Return first character of a string
function firstCharacter(anyString) {
  return anyString[0];
}
console.log("5) firstCharacter('zbc') →", firstCharacter("zbc"));

// 6) Search in an array — return index or -1
function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log("6) findTarget([1,5,7,8], 8) →", findTarget([1, 5, 7, 8], 8));
