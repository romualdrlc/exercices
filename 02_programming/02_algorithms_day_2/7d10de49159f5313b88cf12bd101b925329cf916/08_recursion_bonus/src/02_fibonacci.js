function fibo(n) {
  // your code here

  if (!Number.isInteger(n) || n < 0) {
    return null;
  } else if (n >= 0 && n < 2) {
    return n;
  } else {
    return fibo(n - 2) + fibo(n - 1);
  }
}

// do not remove this line, it is for tests
module.exports = fibo;
