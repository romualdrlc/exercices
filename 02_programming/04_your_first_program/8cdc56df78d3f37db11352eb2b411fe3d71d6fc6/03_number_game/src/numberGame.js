function numberGame(reader, min = 1, max = 100) {
  // code here
  const entierAleatoire = Math.round(Math.random() * (max - min) + min);
  console.log("welcome to my game");

  function loop(number) {
  
    let numero = parseInt(number);
    if (isNaN(numero)) {
      console.log("This was not a number");
      reader.question("Enter a number", (loop));
    } else if (numero < min || numero > max) {
      console.log("The number is between 1 and 100");
      reader.question("Enter a number", (loop));
    } else if (numero < entierAleatoire) {
      console.log("Too low");
      reader.question("Enter a number", (loop));
    } else if (numero > entierAleatoire) {
      console.log("Too high");
      reader.question("Enter a number", (loop));
    } if (numero === entierAleatoire) {
      console.log("You won!");
      reader.close();
    }
  }
  reader.question("Enter a number", (loop));
}

module.exports = numberGame;
