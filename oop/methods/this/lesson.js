Lesson.bindRun("btn-this", () => {
  function personInfo() {
    return `${this.firstName} is ${this.age} years old`;
  }

  const person1 = {
    firstName: "harsh",
    age: 8,
    about: personInfo
  };

  const person2 = {
    firstName: "nitish",
    age: 17,
    about: personInfo
  };

  Lesson.log("out-this",
    "person1.about():", person1.about(),
    "\nperson2.about():", person2.about()
  );
});
