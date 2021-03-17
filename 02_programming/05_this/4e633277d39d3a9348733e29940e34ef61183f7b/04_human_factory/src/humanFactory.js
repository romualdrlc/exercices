const humanFactory = (humanData = {}) => {
  // code here
  /*if humandata est Vide
    on retourne la fiche john doe
  else
    on retourne la fiche jane doe*/

  const John = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    },
    introduction: function () {
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    },
  };
  const Jane = {
    firstName: "Jane",
    lastName: "Doe",
    genre: "female",
    job: "unemployed",
    fullname: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    },
    introduction: function () {
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    }
    
  };
  
};

const createHumans = (humans) => {
  // code here
  
};

module.exports = {
  humanFactory,
  createHumans,
};
