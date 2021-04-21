// Copy your function `lottery_draw` from exercise one.
type Draw = number[];

export function lottery_draw(): Draw {
  const tab: Draw = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < tab.length; i++) {
    tab[i] = Math.floor(Math.random() * 100);
  }

  return tab;
}
