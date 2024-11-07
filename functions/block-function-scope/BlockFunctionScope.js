// block scope vs function scope
// let and const are block scope
// var is function scope

{
  let firstName = "jakhar";
}
console.log(firstName);

if (true) {
  var firstName = "jakhar";
  console.log(firstName);
}
console.log(firstName);

// other example...

function myApp() {
  if (true) {
    var firstName = "jakhar";
    console.log(firstName);
  }
  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}
myApp();
