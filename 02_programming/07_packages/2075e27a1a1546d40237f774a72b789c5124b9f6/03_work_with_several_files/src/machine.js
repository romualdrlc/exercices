// Here you can import functions from 'container' and 'drink'
import { longCoffee, expresso } from "./drinks.js";
import { putLitersOfCoffee, consumeLitersOfCoffee } from "./container.js";

let consoTotal = 0;
let cupConsumeExpresso = 0;
let cupConsumeLongCoffe = 0;

function fillWithLitersOfCoffee(liters) {
  consoTotal = putLitersOfCoffee(liters);
  return consoTotal;
  // cupConsumeExpresso = consumeLitersOfCoffee(expresso);
  // cupConsumeLongCoffe = consumeLitersOfCoffee(longCoffee);

  // console.log("consoTotal", cupConsumeExpresso);
  // console.log("consoTotal", cupConsumeLongCoffe);
  // while (consoTotal >= cupConsumeExpresso || consoTotal >= cupConsumeLongCoffe) {
  //   console.log("tututututu");
  //   return true;
  // }
}

export { fillWithLitersOfCoffee, putLitersOfCoffee, expresso, consumeLitersOfCoffee, longCoffee };
