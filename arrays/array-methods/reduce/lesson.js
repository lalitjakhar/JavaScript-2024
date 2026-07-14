const numbers = [3, 2, 6, 8, 4, 1, 9];
const userCart = [
  { productName: "mobile", price: 33000 },
  { productName: "laptop", price: 122000 },
  { productName: "tv", price: 18000 },
  { productName: "refrigerator", price: 12000 },
];

Lesson.showArray("view-nums", numbers);

document.getElementById("btn-sum").addEventListener("click", () => {
  let steps = ["start total = 0"];
  const sum = numbers.reduce((total, n, i) => {
    const next = total + n;
    steps.push(`step ${i + 1}: ${total} + ${n} = ${next}`);
    return next;
  }, 0);
  steps.push(`final sum = ${sum}`);
  Lesson.log("out-sum", steps.join("\n"));
});

document.getElementById("btn-cart").addEventListener("click", () => {
  const lines = userCart.map((p) => `${p.productName}: ₹${p.price}`);
  const total = userCart.reduce((sum, p) => sum + p.price, 0);
  Lesson.log("out-cart", `${lines.join("\n")}\n\nCart total = ₹${total}`);
});
