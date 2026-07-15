const nums = [40, 5, 100, 1, 25];

Lesson.showArray("view-original", nums);

document.getElementById("btn-asc").addEventListener("click", () => {
  const sorted = nums.slice(0).sort((a, b) => a - b);
  Lesson.showArray("view-sorted", sorted);
  Lesson.log(
    "out-sort",
    `Original: ${JSON.stringify(nums)}\n\nSorted (ascending): ${JSON.stringify(sorted)}`
  );
});

document.getElementById("btn-desc").addEventListener("click", () => {
  const sorted = nums.slice(0).sort((a, b) => b - a);
  Lesson.showArray("view-sorted", sorted);
  Lesson.log(
    "out-sort",
    `Original: ${JSON.stringify(nums)}\n\nSorted (descending): ${JSON.stringify(sorted)}`
  );
});

const products = [
  { productId: 1, productName: "mobile", price: 33000 },
  { productId: 2, productName: "laptop", price: 122000 },
  { productId: 3, productName: "tv", price: 18000 },
  { productId: 4, productName: "refrigerator", price: 12000 },
];

document.getElementById("btn-price-low").addEventListener("click", () => {
  const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
  let output = "Products (low to high):\n\n";
  lowToHigh.forEach((p) => {
    output += `${p.productName}: $${p.price}\n`;
  });
  Lesson.log("out-price", output);
});

document.getElementById("btn-price-high").addEventListener("click", () => {
  const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
  let output = "Products (high to low):\n\n";
  highToLow.forEach((p) => {
    output += `${p.productName}: $${p.price}\n`;
  });
  Lesson.log("out-price", output);
});
