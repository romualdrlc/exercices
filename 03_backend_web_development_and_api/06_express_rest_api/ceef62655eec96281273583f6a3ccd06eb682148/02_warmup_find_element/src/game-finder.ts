export function findGameFromSlug(games: Game[], slug: string): Game {
  const result = games.find((exist) => {
    if (slug === exist.slug) {
      return exist.name;
    } else {
      return undefined;
    }
  });
  return result;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};
