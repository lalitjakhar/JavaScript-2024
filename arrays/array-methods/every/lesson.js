const numbers = [2, 4, 6, 8, 10];

Lesson.showArray("view-nums", numbers);

document.getElementById("btn-even").addEventListener("click", () => {
  const allEven = numbers.every((number) => number % 2 === 0);
  Lesson.log(
    "out-even",
    `numbers = ${JSON.stringify(numbers)}\n\nTest: n % 2 === 0\n\nResult: ${allEven}\n\nAll numbers are even!`
  );
});

const userCart = [
  { productId: 1, productName: "mobile", price: 33000 },
  { productId: 2, productName: "laptop", price: 122000 },
  { productId: 3, productName: "tv", price: 18000 },
  { productId: 4, productName: "refrigerator", price: 12000 },
];

document.getElementById("btn-cart").addEventListener("click", () => {
  const allAffordable = userCart.every((item) => item.price < 30000);
  Lesson.log(
    "out-cart",
    `Test: Are all items under $30,000?\n\nResult: ${allAffordable}\n\nmobile ($33k) and laptop ($122k) exceed the limit.`
  );
});

document.getElementById("btn-mixed").addEventListener("click", () => {
  const mixed = [2, 4, 5, 8];
  const allEven = mixed.every((n) => n % 2 === 0);
  Lesson.log(
    "out-mixed",
    `mixed = ${JSON.stringify(mixed)}\n\nTest: n % 2 === 0\n\nResult: ${allEven}\n\nFailed at 5 (odd number).`
  );
});
