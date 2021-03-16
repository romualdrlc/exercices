function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  const entierAleatoire = Math.round(Math.random() * (max - min) + min);
  console.log("welcome to my game");
  let counter = 11;
  function loop(number) {
    counter = counter - 1;
    let numero = parseInt(number);
    if (counter > 0) {
      if (isNaN(numero)) {
        console.log(`This was not a number il vous reste ${counter} tentative`);
        reader.question("Enter a number", (loop));
      } else if (numero < min || numero > max) {
        console.log(`The number is between 1 and 100 il vous reste ${counter} tentative`);
        reader.question("Enter a number", (loop));
      } else if (numero < entierAleatoire) {
        console.log(`Too low il vous reste ${counter} tentative`);
        reader.question("Enter a number ", (loop));
      } else if (numero > entierAleatoire) {
        console.log(`Too high il vous reste ${counter} tentative`);
        reader.question("Enter a number", (loop));
      } if (numero === entierAleatoire) {
        console.log(`You won! on ${counter} fois`);
        reader.close();
      }
    } else {
      console.log("tu as perdu recommence");
      reader.close();
    }
  }
  reader.question("Enter a number", (loop(counter)));
}

module.exports = numberGameWithStats;
