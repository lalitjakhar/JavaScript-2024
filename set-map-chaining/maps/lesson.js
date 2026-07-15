Lesson.bindRun("btn-basic", () => {
  const person = new Map();
  person.set('firstName', 'Harshit');
  person.set('age', 7);
  person.set(1, 'one');
  
  Lesson.log("out-basic",
    "person.get('firstName'):", person.get('firstName'),
    "\nperson.get('age'):", person.get('age'),
    "\nperson.get(1):", person.get(1)
  );
});

Lesson.bindRun("btn-objects", () => {
  const person1 = { id: 1, firstName: "harshit" };
  const person2 = { id: 2, firstName: "harshta" };

  const extraInfo = new Map();
  extraInfo.set(person1, { age: 8, gender: "male" });
  extraInfo.set(person2, { age: 9, gender: "female" });

  Lesson.log("out-objects",
    "person1.firstName:", person1.firstName,
    "\nextraInfo.get(person1):", extraInfo.get(person1),
    "\nperson2.firstName:", person2.firstName,
    "\nextraInfo.get(person2):", extraInfo.get(person2)
  );
});
