// Object Destructuring
const band = {
  bandName: "led zeppelin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "Kashmir",
};

let { bandName: var1, famousSong, ...restProps } = band;
console.log(var1);
console.log(restProps);
