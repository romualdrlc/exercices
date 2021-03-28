let newarray = [];


function filter(array, str) {
  // Your code here
  for (let i = 0; array[i] < array[3];i++) {
    if (str === "even") {
      newarray.push(array[i]);
    }
  }
}

filter([1, 2, 3, 4, 5], "even");
//filter([1, 2, 3, 4, 5], "odd"); 


// do not remove this line, it is for tests
module.exports = filter;