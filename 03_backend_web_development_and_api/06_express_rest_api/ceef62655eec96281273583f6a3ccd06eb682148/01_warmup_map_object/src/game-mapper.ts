export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const newGame = games.map((tab) => {
    return { name: tab.name, slug: tab.slug, cover: tab.cover.url };
  });
  return newGame;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
