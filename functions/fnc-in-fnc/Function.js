// function inside function

// const app = () => {
//   const myFunc = () => {
//     console.log("Hello World");
//   };
//   const addTwo = (num1, num2) => {
//     return num1 + num2;
//   };
//   const nullll = (num1, num2) => num1 * num2;
//   console.log("inside app");
// };
// app();

function app() {
  const myFunc = () => {
    console.log("Hello World");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const multiply = (num1, num2) => num1 * num2;
  console.log("inside app");
  myFunc();
  console.log(addTwo(2, 4));
  console.log(multiply(2, 4));
}
app();
