function fizzBuzz(list) {
  // Code the function here.
  let tab = [];
  return list.map((element) => {
    if (list[element] === 1 && list[element] === 2) {
      return element;
    } else if (element % 3 === 0 && element % 5 === 0) {
      return "FizzBuzz";
    } else if (element % 5 === 0) {
      return "Buzz";
    } else if (element % 3 === 0) {
      return "Fizz";
    } else {
      return element;
    }
  });
}

// Leave the line below for tests to work properly.
module.exports = fizzBuzz;
