document.getElementById("btn-primitive").addEventListener("click", () => {
  let num1 = 6;
  let num2 = num1;
  Lesson.log("out-primitive", `num1 = ${num1}\nnum2 = ${num2}\n\nAfter num1++:`);
  num1++;
  Lesson.log("out-primitive", `num1 = ${num1}\nnum2 = ${num2}\n\nThey are independent!`);
});

document.getElementById("btn-ref").addEventListener("click", () => {
  let array1 = ["item1", "item2"];
  let array2 = array1;
  Lesson.showArray("view-ref", array1);
  Lesson.log("out-ref", `array1 = ${JSON.stringify(array1)}\narray2 = ${JSON.stringify(array2)}\n\nPushing "item3" to array1…`);
  
  setTimeout(() => {
    array1.push("item3");
    Lesson.showArray("view-ref", array1);
    Lesson.log("out-ref", `array1 = ${JSON.stringify(array1)}\narray2 = ${JSON.stringify(array2)}\n\nBoth changed! They share the same memory.`);
  }, 1200);
});

document.getElementById("btn-clone").addEventListener("click", () => {
  let array1 = ["item1", "item2"];
  let array2 = [...array1];
  Lesson.log("out-clone", `array1 = ${JSON.stringify(array1)}\narray2 = ${JSON.stringify(array2)} (true copy)\n\nPushing "item3" to array1…`);
  
  setTimeout(() => {
    array1.push("item3");
    Lesson.log("out-clone", `array1 = ${JSON.stringify(array1)}\narray2 = ${JSON.stringify(array2)}\n\narray2 is unchanged — it's a separate array!`);
  }, 1200);
});
