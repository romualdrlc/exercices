function filter(array, fn) {
  // Your code here
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 0 === true) {
      return array[i];
    }
  }
}

// do not remove this line, it is for tests
module.exports = filter;
