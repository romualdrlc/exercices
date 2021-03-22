const humanFactory = (humanData = {}) => {
  // code here
  const human = {
    firstName: humanData.genre === "female" ? "Jane" : "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function() {
      return `${this.firstName} ${this.lastName}`;
    },// "John Doe"
    introduction: function() {
      return `Hello! My name is ${this.fullname()}.`;
    }, // "Hello! My name is John Doe."
  };
  return {...human,...humanData};
};

const createHumans = (humans) => {
  // code here
  return humans.map(humanFactory);
  //return humans.map(human => humanFactory(human));
};


module.exports = {
  humanFactory,
  createHumans,
};
