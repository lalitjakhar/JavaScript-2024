Lesson.bindRun("btn-create", () => {
  const numbers = new Set([1, 2, 3]);
  numbers.add(4);
  numbers.add(2);
  Lesson.log("out-create", "Set contents:", Array.from(numbers));
});

Lesson.bindRun("btn-unique", () => {
  const myArray = [1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8];
  const uniqueElements = new Set(myArray);
  Lesson.log("out-unique", "Original:", myArray, "\nUnique:", Array.from(uniqueElements));
});

Lesson.bindRun("btn-has", () => {
  const alphabets = new Set("abcdefghi");
  Lesson.log("out-has", 
    "Set:", Array.from(alphabets).join(", "),
    "\nhas('c'):", alphabets.has('c'),
    "\nhas('z'):", alphabets.has('z')
  );
});
