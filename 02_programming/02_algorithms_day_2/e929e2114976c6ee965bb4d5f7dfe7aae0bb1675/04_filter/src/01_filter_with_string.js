let tabeven = [];
let tabodd = [];

function filter(array, str) {

  // Your code here
  for (let i = 0; i < array.length; i++) {
    if (array[i]%2 === 0) {
      array.push([i]);
      return "even";
    }else if (array[i]%2 !== 0) {
      array.push([i]);
      return "odd";
    }
  }
  
}




// do not remove this line, it is for tests
module.exports = filter;