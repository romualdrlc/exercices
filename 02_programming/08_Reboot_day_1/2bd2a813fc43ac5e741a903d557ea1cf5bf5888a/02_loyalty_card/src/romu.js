import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome\n","   1 - add customer\n","   2 - access customer data\n","   quit\n");

reader.question("choose an action ", (choice) => {
 
});
