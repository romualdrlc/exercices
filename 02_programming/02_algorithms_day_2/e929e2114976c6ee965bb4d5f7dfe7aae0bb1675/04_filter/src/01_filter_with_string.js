let tabodd =[];
let tabeven =[];

function filter(array, str) {
  // Your code here
  for(let i = 0; i < array.length; i++) {
    if (array[i]%2 !== 0) {
      tabodd.push(i);
    }
    else {
      tabeven.push(i);
    }
  }
}
console.log(tabeven);
console.log(tabodd);



// do not remove this line, it is for tests
module.exports = filter;