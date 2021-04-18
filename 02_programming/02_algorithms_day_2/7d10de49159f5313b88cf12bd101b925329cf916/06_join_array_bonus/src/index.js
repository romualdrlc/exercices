function joinArray(tab, carac) {
  // Code your function here.
  let string = "";
  return tab.reduce((newtab, value, index) => {
    if (index < tab.length - 1) {
      string += value + carac;
    } else {
      string += value;
    }
    return string;
  }, "");
}

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
