function range(startInteger,lastInteger) {
  // Code the function here.
  if (startInteger < lastInteger) {
    for (let i = startInteger; i <= lastInteger; i++) {
      newTab.push(i);
    }
    return newTab;
  } else if (startInteger > lastInteger) {
    for (let i = startInteger; i >= lastInteger; i--) {
      newTab2.push(i);
    }
    return newTab2;
  }
  else {
    newTab3.push(startInteger);
  }
  return newTab3;
}
let newTab = [];
let newTab2 = [];
let newTab3 = [];
console.log(range(54,2)); // ne focntionne pas avec leur code

// Do not remove last lines, it is for tests
module.exports = range;
