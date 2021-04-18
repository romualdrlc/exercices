function fact(n) {
  // your code here
  if (!Number.isInteger(n) || n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

// do not remove this line, it is for tests
module.exports = fact;
