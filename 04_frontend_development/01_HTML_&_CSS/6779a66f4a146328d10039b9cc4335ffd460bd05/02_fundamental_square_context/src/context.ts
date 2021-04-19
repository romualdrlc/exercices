import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  const newTab = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    newTab.push(squareNumber(arrayOfNumbers[i]));
  }
  return newTab;
}
