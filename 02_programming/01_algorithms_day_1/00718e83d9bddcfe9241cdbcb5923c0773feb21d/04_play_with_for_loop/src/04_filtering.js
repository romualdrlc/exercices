// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
const literalDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let longueurTab = [];
let i =0;

while (i < literalDigits.length) {
  while (literalDigits[i] === "zero" || literalDigits[i] === "two" || literalDigits[i] === "four" || literalDigits[i] === "six" || literalDigits[i] === "eight") {
    longueurTab = literalDigits.splice(i,1);
    i++;
  }
  i++;
}
console.log(longueurTab);

