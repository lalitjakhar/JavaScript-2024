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

const func = user1.about.apply(user2, "guitar", "bach");
func();
