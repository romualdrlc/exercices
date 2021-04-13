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

  constructor(collection: Game[] | any) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return new Promise((resolve, reject) => {
      const result = this.collection.map((tab) => {
        return { name: tab.name, slug: tab.slug, cover: tab.cover_url };
      });
      resolve(result);
    });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve, reject) => {
      const game = this.collection.find((jeu) => {
        if (slug === jeu.slug) {
          return jeu;
        } else {
          return undefined;
        }
      });
      if (game) {
        resolve(game);
      } else {
        resolve(null);
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve, reject) => {
      const result = this.collection.filter((tab) => {
        if (platform_slug === tab.platform.slug) {
          return tab;
        } else {
          return false;
        }
      });
      resolve(result);
    });
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve, reject) => {
      const result = this.collection.reduce<Platform[]>((platforms, game) => {
        if (platforms.find((platform) => game.platform.slug === platform.slug)) {
          return platforms;
        } else {
          platforms.push(game.platform);
          return platforms;
        }
      }, []);
      resolve(
        result.map((platform) => {
          return {
            name: platform.name,
            slug: platform.slug,
          };
        }),
      );
    });
  }
}
