//  and or operator

let firstName = "Jakhar";
let age = 19;

// if (firstName[0] === "J") {
//     console.log("your name starts with J")
// }

// if (age > 18) {
//   console.log("you are above 18");
// }

// if (firstName[0] === "J" && age > 18) {
//   console.log("Name start with J and above 18");
// } else {
//   console.log("inside else");
// }

if (firstName[0] === "J" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}
