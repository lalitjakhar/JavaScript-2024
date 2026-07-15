const numbers = [3, 5, 8, 9];

Lesson.showArray("view-nums", numbers);

document.getElementById("btn-even").addEventListener("click", () => {
  const hasEven = numbers.some((number) => number % 2 === 0);
  Lesson.log(
    "out-even",
    `numbers = ${JSON.stringify(numbers)}\n\nTest: n % 2 === 0\n\nResult: ${hasEven}\n\nExplanation: 8 is even, so some() returns true.`
  );
});

const userCart = [
  { productId: 1, productName: "mobile", price: 33000 },
  { productId: 2, productName: "laptop", price: 122000 },
  { productId: 3, productName: "tv", price: 18000 },
  { productId: 4, productName: "refrigerator", price: 12000 },
];

document.getElementById("btn-cart").addEventListener("click", () => {
  const affordable = userCart.some((item) => item.price < 100000);
  Lesson.log(
    "out-cart",
    `Test: Is there any item under $100,000?\n\nResult: ${affordable}\n\nThree items (mobile, tv, refrigerator) are under 100k!`
  );
});

document.getElementById("btn-compare").addEventListener("click", () => {
  const someEven = numbers.some((n) => n % 2 === 0);
  const everyEven = numbers.every((n) => n % 2 === 0);
  
  Lesson.log(
    "out-compare",
    `numbers = ${JSON.stringify(numbers)}\n\nsome(n % 2 === 0): ${someEven}\nevery(n % 2 === 0): ${everyEven}\n\nsome → true (at least one even)\nevery → false (not all even)`
  );
});
