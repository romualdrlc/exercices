// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
let litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];

let i = 0;

while (i < litteralDigits.length) {
  if (litteralDigits === "zero" || litteralDigits === "two" || litteralDigits === "four" || litteralDigits === "six" || litteralDigits === "eight") {
    litteralDigits.slice(i);
  }
  console.log(litteralDigits);
  i++;
}


// while (i < litteralDigits.length) {
//   if (litteralDigits === "zero") {
//     litteralDigits.shift();
//   }else if (litteralDigits === "two") {
//     litteralDigits.shift();
//   }else if (litteralDigits === "four") {
//     litteralDigits.shift();
//   }else if (litteralDigits === "six") {
//     litteralDigits.shift();
//   }else if (litteralDigits === "eight") {
//     litteralDigits.shift();
//   }
//   console.log(litteralDigits[i]);
// }