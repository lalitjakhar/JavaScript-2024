// primitive vs reference data types

// primitive data types
let num1 = 6;
let num2 = num1;
console.log("value of num 1 is", num1);
console.log("value of num 2 is", num2);
num1++;
console.log("after increament in num1");
console.log("value of num 1 is", num1);
console.log("value of num 2 is", num2);

// reference data types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1", array1);
console.log("array1", array1);
console.log("array2", array2);
