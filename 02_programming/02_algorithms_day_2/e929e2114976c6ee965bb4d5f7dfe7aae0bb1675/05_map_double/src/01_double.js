let map1 = [];
let array = [0, 1, 2, 3];

function double(array) {
  // Code your function here.
  map1 = array.map((x) => x * 2);
  return map1;
}

double(array);
//console.log(map1);

// Do not remove last lines, it is for tests
module.exports = double;
