const user1 = {
  firstName: "Lalit",
  age: "18",
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  },
};

const user2 = {
  firstName: "Jakhar",
  age: "12",
};

user1.about.call(user2, "guitar", "moazrt");
