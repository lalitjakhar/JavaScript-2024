document.getElementById("btn-compare").addEventListener("click", () => {
  Lesson.log("out-compare", `Old way (concatenation):\n"my name is " + firstName + " and my age is " + age\n\nNew way (template string):\n\`my name is \${firstName} and my age is \${age}\`\n\n→ "my name is Lalit Choudhary and my age is 22"\n\nBoth produce the same result, but template strings are cleaner!`);
});

document.getElementById("btn-expr").addEventListener("click", () => {
  Lesson.log("out-expr", `Embed expressions:\nlet price = 100\n\nMessage: \`Total: $\${price * 1.2} with tax\`\n→ "Total: $120 with tax"`);
});

document.getElementById("btn-multi").addEventListener("click", () => {
  Lesson.log("out-multi", `Multi-line template string:\n\nLine one\nLine two\nLine three\n\n(Line breaks are preserved automatically!)`);
});

document.getElementById("btn-compare").click();
