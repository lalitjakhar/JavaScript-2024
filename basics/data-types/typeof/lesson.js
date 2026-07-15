document.getElementById("btn-basic").addEventListener("click", () => {
  Lesson.log("out-basic", `Checking types:\nlet age = 22\nlet firstName = "Jakhar"\n\ntypeof age → "number"\ntypeof firstName → "string"`);
});

document.getElementById("btn-to-str").addEventListener("click", () => {
  Lesson.log("out-to-str", `Converting to string:\nlet age = 18\nage = age + ""\n\ntypeof age → "string"\nNow age is "18" (text, not number)`);
});

document.getElementById("btn-to-num").addEventListener("click", () => {
  Lesson.log("out-to-num", `Converting to number:\nlet myStr = "34"\nmyStr = +myStr\n\ntypeof myStr → "number"\nNow myStr is 34 (number, not text)`);
});

document.getElementById("btn-basic").click();
