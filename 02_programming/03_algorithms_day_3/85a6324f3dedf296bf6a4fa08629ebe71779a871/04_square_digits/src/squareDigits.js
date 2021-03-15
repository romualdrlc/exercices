function squareDigits(number) {
  // Code here
  if (Number.isInteger(number)) {
    return parseInt(
      number
        .toString()
        .split("")
        .map((x) => String(parseInt(x) * parseInt(x)))
        .join(""),
    );
  } else {
    throw "not an integer";
  }
}
// Leave the line below for tests to work
module.exports = squareDigits;
