export function column(numberOfLines: number, lineContent: string): string {
  let column = "";
  for (let i = 1; i <= numberOfLines; i++) {
    console.log(lineContent);
    column += `${lineContent}\n`;
  }
  return column;
}
