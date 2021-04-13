export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    const result = this.collection.map((tab) => {
      return { name: tab.name, slug: tab.slug, cover: tab.cover_url };
    });
    return result;
  }

  findBySlug(slug: string): Game | null {
    const game = this.collection.find((jeu) => {
      if (slug === jeu.slug) {
        return jeu;
      } else {
        return undefined;
      }
    });
    if (game) {
      return game;
    } else {
      return null;
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    const result = this.collection.filter((tab) => {
      if (platform_slug === tab.platform.slug) {
        return tab;
      } else {
        return false;
      }
    });
    return result;
  }

  getPlatforms(): Platform[] {
    const result = this.collection.reduce<Platform[]>((platforms, game) => {
      if (platforms.find((platform) => game.platform.slug === platform.slug)) {
        return platforms;
      } else {
        platforms.push(game.platform);
        return platforms;
      }
    }, []);
    return result.map((platform) => {
      return {
        name: platform.name,
        slug: platform.slug,
      };
    });
  }
}
