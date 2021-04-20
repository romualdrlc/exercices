import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const tab = sentence.split(" ");
  const str = tab.map((x) => capitalize([x].toString()));
  const res = str.join(" ").toString();
  return res;
}
