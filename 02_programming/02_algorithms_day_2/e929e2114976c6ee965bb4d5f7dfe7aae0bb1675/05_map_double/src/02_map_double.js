function double(integer) {
  // Code your function here.
  let number = integer * 2;
  return number;
}

function map(array, double) {
  newarray = array.map((x) => double(x));
  return newarray;
}
let newarray = [];

map([1, 3, 1, 4], double);

// Do not remove last lines, it is for tests
module.exports = { double: double, map: map };
