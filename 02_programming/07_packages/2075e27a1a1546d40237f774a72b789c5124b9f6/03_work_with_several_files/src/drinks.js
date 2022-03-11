// There should be no import in this file. Only exports!

let totalRecipient = 0;

function longCoffee(longCoffe) {
  totalRecipient += longCoffe;
  return totalRecipient;
}

function expresso(expresso) {
  totalRecipient += expresso;
  return totalRecipient;
}

export { longCoffee, expresso };
