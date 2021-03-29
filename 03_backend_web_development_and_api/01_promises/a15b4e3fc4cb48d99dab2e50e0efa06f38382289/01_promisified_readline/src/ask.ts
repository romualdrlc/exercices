import { rl } from "../interface";

function ask(phrase: string, question = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    question.question(`${phrase}`, (input) => {
      if (input !== "") {
        resolve(input);
      } else if (input === "") {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
