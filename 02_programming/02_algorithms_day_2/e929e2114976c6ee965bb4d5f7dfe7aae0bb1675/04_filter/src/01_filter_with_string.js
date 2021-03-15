function filter(array, str) {
  // Your code here
  let tabimpair = [];
  for (let i = 0; i <= array[2]; i++) {  
    tabimpair.push(array[i]);
  }
  console.log(tabimpair);
  return tabimpair;
}


// do not remove this line, it is for tests
module.exports = filter;