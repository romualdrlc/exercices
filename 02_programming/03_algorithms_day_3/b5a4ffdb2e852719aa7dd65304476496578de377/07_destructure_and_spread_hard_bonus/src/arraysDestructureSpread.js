function arrayCrusher(firstArray, secondArray) {
  // code here
  const newArray = [...firstArray, ...secondArray];
  return newArray;
}

function recursiveBouncer(list) {
  // code here
  const [head, ...tail] = list;

  return head === undefined ? [] : [console.log(head), ...recursiveBouncer(tail)];
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
