Lesson.bindRun("btn-chain", () => {
  const user = {
    firstName: "harshit"
  };

  Lesson.log("out-chain",
    "user?.firstName:", user?.firstName,
    "\nuser?.address?.houseNumber:", user?.address?.houseNumber
  );
});

Lesson.bindRun("btn-compare", () => {
  const userWithAddress = {
    firstName: "John",
    address: { houseNumber: "1234" }
  };

  const userNoAddress = {
    firstName: "Jane"
  };

  Lesson.log("out-compare",
    "userWithAddress?.address?.houseNumber:", userWithAddress?.address?.houseNumber,
    "\nuserNoAddress?.address?.houseNumber:", userNoAddress?.address?.houseNumber
  );
});
