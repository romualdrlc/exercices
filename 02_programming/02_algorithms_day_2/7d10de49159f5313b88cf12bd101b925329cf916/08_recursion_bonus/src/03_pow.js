function pow(number, power) {
  // Your code here
  let nb = 0;
  if (power === 0) {
    return 1;
  } else if (!Number.isInteger(number) || power < 0) {
    return null;
  } else {
    return pow(number, power - 1) * number;
  }
}

// do not remove this line, it is for tests
module.exports = pow;
