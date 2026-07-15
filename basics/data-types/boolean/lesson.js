document.getElementById("btn-compare").addEventListener("click", () => {
  Lesson.log("out-compare", `Comparisons:\nlet num1 = 9, num2 = 7\n\nnum1 > num2 → true\nnum1 < num2 → false\nnum1 >= num2 → true`);
});

document.getElementById("btn-equals").addEventListener("click", () => {
  Lesson.log("out-equals", `Equality check:\nlet num1 = 7, num2 = "7"\n\nnum1 == num2 → true (value only)\nnum1 === num2 → false (type matters!)\n\nAlways prefer ===`);
});

document.getElementById("btn-notequal").addEventListener("click", () => {
  Lesson.log("out-notequal", `Not-equal check:\nlet num1 = 9, num2 = 7\n\nnum1 != num2 → true\nnum1 !== num2 → true`);
});

document.getElementById("btn-compare").click();
