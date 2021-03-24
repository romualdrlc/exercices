 type test = [string,number];

function handleTuple(test: [string,number]): void{
  // Code the function here. 
  test.forEach(element => {
    if (typeof element === "string") {
      console.log(`${element} is a string`);
    } else if (typeof element === "number"){
      console.log(`${element} is a number`);
    }
  });
}

// Leave the line below for tests to work properly.
export { handleTuple };
