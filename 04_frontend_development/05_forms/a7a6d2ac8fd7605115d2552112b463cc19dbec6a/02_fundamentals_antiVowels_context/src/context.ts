import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (string: string): string => {
  // Code your function for context here
  const result = sentenceSplitter(string);

  const newString = result.filter((x) => {
    const firstLetter = x.charAt(0).toUpperCase();
    // methode contain
    if (
      firstLetter === "A" ||
      firstLetter === "E" ||
      firstLetter === "I" ||
      firstLetter === "O" ||
      firstLetter === "U" ||
      firstLetter === "Y"
    ) {
      //result.splice(index, 1);
      return false;
    } else {
      //return result;
      return true;
    }
  });
  const sentence = sentenceJoiner(newString);
  return sentence;
};
