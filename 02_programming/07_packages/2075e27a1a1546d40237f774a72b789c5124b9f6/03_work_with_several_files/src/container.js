// There should be no import in this file. Only exports!
let coffePut = 0;
let literOfCoffe;

function putLitersOfCoffee(liter) {
  literOfCoffe = liter;
  return literOfCoffe;
}

function consumeLitersOfCoffee(quantityOfCup) {
  literOfCoffe = literOfCoffe - quantityOfCup;
  return literOfCoffe;
}

export { putLitersOfCoffee, consumeLitersOfCoffee };
