let newarray = [];

function filter(array, str) {
  // Your code here
  array.forEach(element => {
    if (Number.isInteger(element) && element < 3) {
      newarray.push(element);
    }  
  });
  return newarray;
 
}


// do not remove this line, it is for tests
module.exports = filter;