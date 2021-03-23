// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
const litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const test = [0,1,2,3,4,5,6,7,8,9];
let i = 0;
let newTab =[];

while (i < test.length) {
  newTab = test.filter(valeur => valeur%2===1 ? true : false);
  i++;
}