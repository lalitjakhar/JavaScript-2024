Lesson.bindRun("btn-bind", () => {
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

  const func = user1.about.bind(user2, "guitar", "bach");
  const result = func();
  Lesson.log("out-bind",
    "Bound function created with bind(user2, 'guitar', 'bach')",
    "\nCalling func():",
    "\n" + result
  );
});
