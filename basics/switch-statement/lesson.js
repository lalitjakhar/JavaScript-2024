document.getElementById("btn-day").addEventListener("click", () => {
  const day = Number(document.getElementById("day").value);
  let dayName;
  
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
      break;
  }
  
  Lesson.log("out-day", `Day code: ${day}\n→ ${dayName}`);
});

document.getElementById("btn-day").click();
