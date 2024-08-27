// how to clone array

// let array1 = ["item1", "item2"];
//first way
// let array2 = ["item1", "item2"];

//second way using slice method
// let array2 = array1.slice(0);

//third way using concat method
// let array2 = [].concat(array1);

//new way using spread operator
// let array2 = [...array1];
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// how to concatenate two arrays

let array1 = ["item1", "item2"];
//first way
// let array2 = ["item1", "item2"];

//second way using slice method
// let array2 = array1.slice(0).concat(["item3", "item4"]);

//third way using concat method
// let array2 = [].concat(array1, ["item3", "item4"]);

//new way using spread operator
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];
array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);
