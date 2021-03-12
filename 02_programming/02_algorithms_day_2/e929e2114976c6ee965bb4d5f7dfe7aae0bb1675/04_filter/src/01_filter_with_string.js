function filter(array, str) {
  // Your code here
  let tab = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i]%2 === 0) {
      if (str === "even") {
        tab.push(i);
      }
    }else if (array[i]%2 !== 0) {
      if (str === "odd") {
        tab.push(i);
      }
    }
    return tab;
  }
}

// do not remove this line, it is for tests
module.exports = filter;
