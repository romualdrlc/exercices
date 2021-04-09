// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let line = [];
let tabFinal = [];
let tab2 = [];
for (let j = 0; j < 5; j++) {
  line = [];
  for (let i = 0; i < 5; i++) {
    if (j <= i) {
      line.push("*");
    } else {
      line.push(" ");
    }
    //console.log({ j }, { i }, line);
  }
  line = line.join("");
  console.log(line);
}
//tab2 = tabFinal[0];

//console.log(tabFinal);
