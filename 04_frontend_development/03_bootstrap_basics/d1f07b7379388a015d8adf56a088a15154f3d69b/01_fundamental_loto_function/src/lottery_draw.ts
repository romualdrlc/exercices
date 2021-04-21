type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const tab: Draw = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < tab.length; i++) {
    tab[i] = Math.floor(Math.random() * 101);
  }

  return tab;
}
