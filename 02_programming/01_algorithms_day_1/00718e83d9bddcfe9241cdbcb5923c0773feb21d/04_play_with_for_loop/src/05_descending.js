// ## Decreasing Iteration on arrays
//
// -  Using `length`, write on `stdout` each values of the `literalDigits` array, descending.

const literalDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let longueurTab = literalDigits.length;
literalDigits.reverse();
for (let i = 0; i < longueurTab; i++){
  console.log(literalDigits[i]);
}