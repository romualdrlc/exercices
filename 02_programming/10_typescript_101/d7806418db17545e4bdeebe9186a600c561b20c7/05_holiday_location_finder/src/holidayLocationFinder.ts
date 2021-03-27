import { Interface } from "readline";
import { CONTINENTS, CITIES } from "./data/data";
import { sanitizeUserInput } from "./utils/format";


function holidayLocationFinder(reader: Interface): any {
  // Write your code here
  console.log("***Welcome to HOLIDAY LOCATION FINDER***\n\n");
  console.log("This program will help you find a location based on the continent you will input.");
  console.log("- Europe\n- North America\n- South America\n- Asia\n- Africa\n- Oceania\n\n");
  console.log("Please input your choice:\n")
  reader.question("Here is the list of continent to chose from:", (answer) => {
    // TODO: Log the answer in a database
    // 
    
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
