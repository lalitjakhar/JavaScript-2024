document.getElementById("btn-temp").addEventListener("click", () => {
  const temp = Number(document.getElementById("temp").value);
  let message;
  
  if (temp < 0) {
    message = "extremely cold outside";
  } else if (temp < 16) {
    message = "It is cold outside";
  } else if (temp < 25) {
    message = "Weather is Okay";
  } else if (temp < 35) {
    message = "lets go for swim";
  } else if (temp < 45) {
    message = "Ac";
  } else {
    message = "Too hot !!";
  }
  
  Lesson.log("out-temp", `Temperature: ${temp}°C\n→ ${message}`);
});

document.getElementById("btn-temp").click();
