// export function sumTwoSmallestNumbers(array: number[]) {
//   const newtab = array.sort(function (a, b) {
//     return a - b;
//   });
//   let result = 0;
//   console.log(newtab);
//   for (let i = 0; i < newtab.length; i++) {
//     if (newtab.length < 4) {
//       throw console.error("il n'y a pas assez de chiffre");
//     } else if (newtab[i] < 0) {
//       throw console.error("il y a un chiffre negatif");
//     } else {
//       if (i == 0) {
//         result += newtab[0];
//       }
//       if (i == 1) {
//         result += newtab[1];
//       }
//     }
//   }
//   return result;
// }
//tata => {a: 2, t: 2}

function lettersCounter(word: string) {
  const letters = word.split("");
  const wordOrdered = {};
  letters.sort();
  for (let i = 0, n = letters.length; i < n; i++) {
    if (!wordOrdered[letters[i]]) {
      wordOrdered[letters[i]] = 1;
    } else {
      wordOrdered[letters[i]]++;
    }
  }
  console.log(wordOrdered);
}

console.log(lettersCounter("trololo"));
