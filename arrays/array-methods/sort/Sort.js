// sort method

const products = [
  { productId: 1, productName: "mobile", price: "33000" },
  { productId: 2, productName: "laptop", price: "122000" },
  { productId: 3, productName: "tv", price: "18000" },
  { productId: 4, productName: "refrigator", price: "12000" },
];

//low to High prices

const lowToHgh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log(lowToHgh);

//hight to low prices

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(highToLow);
