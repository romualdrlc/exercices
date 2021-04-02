export function column(numberOfLines: number, lineContent: string): string {
  let colonne = "";
  for (let i = 1; i <= numberOfLines; i++) {
    colonne += `${lineContent}\n`;
  }
  return colonne;
}
