const identityForm = (reader) => {
  // Code here
  reader.question("first name", (firstname) => {
    const prenom = firstname;
    reader.question("last name", (lastname) => {
      const nom = lastname;
      reader.question("your age is", (Age) => {
        console.log(`Your name is ${prenom} ${nom} and you are ${Age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
