// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let str = "";
let n = 5;
for (let i = n; i > 0; i--) {
  for (let j = n - i; j > 0; j--) {
    console.log(" ");
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
  }
  console.log("\n");
}
