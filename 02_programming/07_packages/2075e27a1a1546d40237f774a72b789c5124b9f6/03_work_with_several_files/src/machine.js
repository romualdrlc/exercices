// Here you can import functions from 'container' and 'drink'
import { longCoffee, expresso } from "./drinks.js";
import { putLitersOfCoffee, consumeLitersOfCoffee } from "./container.js";

let consoTotal = 0.5;

function fillWithLitersOfCoffee(liters) {
  consoTotal = putLitersOfCoffee(liters);
  return consoTotal;
}

export { fillWithLitersOfCoffee, putLitersOfCoffee, expresso, consumeLitersOfCoffee, longCoffee };
