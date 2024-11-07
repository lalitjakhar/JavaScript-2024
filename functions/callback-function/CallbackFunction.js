// callback functions

function myFunc(a) {
  console.log(a);
  console.log("hello workd");
}

function myFunc2() {
  console.log("inside mt func2");
}

function myFunc(a) {
  console.log(a);
}

myFunc(myFunc2);
