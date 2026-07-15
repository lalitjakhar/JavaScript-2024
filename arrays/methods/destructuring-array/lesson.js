const myArray = ["value1", "value2", "value3"];
Lesson.showArray("view-array", myArray);

document.getElementById("btn-demo").addEventListener("click", () => {
  const [myvar1, myvar2] = myArray;
  Lesson.log(
    "out-demo",
    `const [myvar1, myvar2] = ${JSON.stringify(myArray)}\n\nmyvar1 = "${myvar1}"\nmyvar2 = "${myvar2}"\n\nOne line instead of two!`
  );
});

document.getElementById("btn-skip").addEventListener("click", () => {
  const colors = ["red", "green", "blue", "yellow"];
  const [first, , third] = colors;
  Lesson.log(
    "out-skip",
    `colors = ${JSON.stringify(colors)}\n\nconst [first, , third] = colors\n\nfirst = "${first}"\nthird = "${third}"\n\n(Skipped index 1)`
  );
});

document.getElementById("btn-rest").addEventListener("click", () => {
  const nums = [1, 2, 3, 4, 5, 6];
  const [first, second, ...rest] = nums;
  Lesson.log(
    "out-rest",
    `nums = ${JSON.stringify(nums)}\n\nconst [first, second, ...rest] = nums\n\nfirst = ${first}\nsecond = ${second}\nrest = ${JSON.stringify(rest)}`
  );
});

document.getElementById("btn-custom").addEventListener("click", () => {
  const item0 = document.getElementById("item0").value.trim() || "item0";
  const item1 = document.getElementById("item1").value.trim() || "item1";
  const item2 = document.getElementById("item2").value.trim() || "item2";
  
  const customArray = [item0, item1, item2];
  const [a, b, c] = customArray;
  
  Lesson.log(
    "out-custom",
    `const arr = ${JSON.stringify(customArray)}\n\nconst [a, b, c] = arr\n\na = "${a}"\nb = "${b}"\nc = "${c}"`
  );
});
