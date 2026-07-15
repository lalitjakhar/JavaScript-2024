Lesson.bindRun("btn-apply", () => {
  const user1 = {
    firstName: "Lalit",
    age: 18,
    about(hobby, favMusician) {
      return `${this.firstName}, age ${this.age}, likes ${hobby} and ${favMusician}`;
    }
  };

  const user2 = {
    firstName: "Jakhar",
    age: 12
  };

  const args = ["guitar", "bach"];
  const result = user1.about.apply(user2, args);
  Lesson.log("out-apply",
    "user1.about.apply(user2, ['guitar', 'bach']):",
    "\n" + result
  );
});
