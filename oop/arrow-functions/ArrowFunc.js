// arrow function
// arrow functions takes this from its surroundings

const user1 = {
  firstName: "Lalit",
  age: "18",
  about: () => {
    console.log(this.firstName, this.age);
  },
};
user1.about();
