// nested if else

// winning number 19

// 19 your guess is right

// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = prompt("Guess A Number");

if (userGuess === winningNumber) {
  console.log("yOUR gUESS iS rIGHT");
} else {
  if (userGuess < winningNumber) {
    console.log("too low");
  } else {
    console.log("too high");
  }
}
