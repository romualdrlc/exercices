// There should be no import in this file. Only exports!

let totalRecipient = 0;

function longCoffee(doseCoffe) {
  totalRecipient += doseCoffe;
  console.log("totalrecipient23 longcoffe", totalRecipient);
  return totalRecipient;
}

function expresso(doseExpresso) {
  totalRecipient += doseExpresso;
  console.log("totalrecipient expresso", totalRecipient);
  return totalRecipient;
}

export { longCoffee, expresso };
