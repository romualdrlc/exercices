// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
const literalDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let newtab = literalDigits.length;


for (let i = 0;i < newtab; i++) {
  if (i%2 === 1) {
    console.log(literalDigits[i]);
  }
}
