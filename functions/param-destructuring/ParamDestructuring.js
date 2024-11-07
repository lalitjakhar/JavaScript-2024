// param destructuring

// object
// react

const person = {
  firstName: "jakhar",
  gender: "male",
};

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }
function printDetails({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);
}

printDetails(person);
