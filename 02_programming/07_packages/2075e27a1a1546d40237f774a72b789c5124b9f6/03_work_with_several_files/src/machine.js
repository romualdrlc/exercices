// Here you can import functions from 'container' and 'drink'
import { longCoffee, expresso } from "./drinks.js";
import { putLitersOfCoffee, consumeLitersOfCoffee } from "./container.js";

let litersOfCoffee = 0;
let quantityOfCup =0;

function fillWithLitersOfCoffee(liters) {
  litersOfCoffee += liters;
};

function serveACup (quantityOfCup) {
  if (putLitersOfCoffee >= longCoffee) {
    longCoffee(quantityOfCup);
    putLitersOfCoffee.coffePut -= quantityOfCup;
  } else if (putLitersOfCoffee >= expresso) {
    expresso(quantityOfCup);
    putLitersOfCoffee.coffePut -= quantityOfCup;
  } else if (putLitersOfCoffee >= quantityOfCup) {
    consumeLitersOfCoffee.coffePut -= quantityOfCup;
    console.log("test romu");
    return true;
  } else {
    return false;
  };
};

function machine() {
  while (consumeLitersOfCoffee >= quantityOfCup) {
    return true;
  };
};


export { fillWithLitersOfCoffee, serveACup, machine, putLitersOfCoffee, expresso, consumeLitersOfCoffee, longCoffee };