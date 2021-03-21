// There should be no import in this file. Only exports!
let coffePut = 0;


function putLitersOfCoffee(liter) {
  return (coffePut += liter);
};

function consumeLitersOfCoffee(quantityOfCup) {
  return (coffePut -= quantityOfCup);
}

export { putLitersOfCoffee, consumeLitersOfCoffee };

