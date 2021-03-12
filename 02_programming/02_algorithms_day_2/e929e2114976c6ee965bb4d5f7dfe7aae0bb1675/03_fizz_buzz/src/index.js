function fizzBuzz(list) {
  // Code the function here.
  let tab =[];
  for (let i = 0; i < list.length; i++) {
    if (list[i]%3 === 0 && list[i]%5 === 0) {
      tab.push("FizzBuzz");
    } else if (list[i]%5 === 0) {
      tab.push("Buzz");
    } else if (list[i]%3 === 0) {
      tab.push("Fizz");
    } else
      tab.push(list[i]);
  }
  return tab;
}

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
