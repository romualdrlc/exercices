export function line(numberOfStars: number): string {
  let str = "";
  for (let i = 0; i < numberOfStars; i++) {
    str += "*";
  }
  return str;
}
