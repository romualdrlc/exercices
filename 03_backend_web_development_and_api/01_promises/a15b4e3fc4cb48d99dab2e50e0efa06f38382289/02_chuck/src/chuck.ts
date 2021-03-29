import { resolveConfig } from "prettier";
import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve) => {
    const choiceCatego = getChuckCategories();
    resolve(choiceCatego);
  });
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return getChuckJoke(category).then((joke) => joke.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
