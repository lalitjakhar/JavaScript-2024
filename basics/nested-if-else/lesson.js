document.getElementById("btn-guess").addEventListener("click", () => {
  const winningNumber = 19;
  const userGuess = Number(document.getElementById("guess").value);
  let message;
  
  if (userGuess === winningNumber) {
    message = "YOUR GUESS IS RIGHT! 🎉";
  } else {
    if (userGuess < winningNumber) {
      message = "too low ⬇️";
    } else {
      message = "too high ⬆️";
    }
  }
  
  Lesson.log("out-guess", `Winning number: 19\nYour guess: ${userGuess}\n\n→ ${message}`);
});

document.getElementById("btn-guess").click();
