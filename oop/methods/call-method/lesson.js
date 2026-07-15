Lesson.bindRun("btn-call", () => {
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

  const result = user1.about.call(user2, "guitar", "mozart");
  Lesson.log("out-call",
    "user1.about.call(user2, 'guitar', 'mozart'):",
    "\n" + result
  );
});
