const arr1 = ["apple", "banana"];
const arr2 = ["carrot", "potato"];

Lesson.showArray("view-arr1", arr1);
Lesson.showArray("view-arr2", arr2);

document.getElementById("btn-clone").addEventListener("click", () => {
  const array1 = ["item1", "item2"];
  
  const spread = [...array1];
  const sliced = array1.slice(0);
  const concatted = [].concat(array1);
  
  array1.push("item3");
  
  Lesson.log(
    "out-clone",
    `Original after push: ${JSON.stringify(array1)}\n\nSpread copy: ${JSON.stringify(spread)}\nSlice copy: ${JSON.stringify(sliced)}\nConcat copy: ${JSON.stringify(concatted)}\n\nAll copies are independent!`
  );
});

document.getElementById("btn-concat").addEventListener("click", () => {
  const merged = [...arr1, ...arr2];
  Lesson.showArray("view-result", merged);
  Lesson.log(
    "out-concat",
    `${JSON.stringify(arr1)} + ${JSON.stringify(arr2)}\n= ${JSON.stringify(merged)}\n\nOriginals are unchanged.`
  );
});

document.getElementById("btn-expand").addEventListener("click", () => {
  const original = ["item1", "item2"];
  const expanded = [...original, "item3", "item4"];
  Lesson.log(
    "out-expand",
    `original = ${JSON.stringify(original)}\nexpanded = ${JSON.stringify(expanded)}`
  );
});
