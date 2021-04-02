export function humanPercentage(percentages: number[]): string[] {
  let newtab = [];
  // const newtab = [];
  // let bibi = 0;
  // for (let i = 0; i < percentages.length; i++) {
  //   bibi = Math.round(percentages[i] * 100);
  //   newtab.push(`${bibi}%`);
  // }

  newtab = percentages.map((x) => `${Math.round(x * 100)}%`);
  //newtab.push(`${bibi}%`);
  return newtab;
}
