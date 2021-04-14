import { Collection } from "mongodb";

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
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((doc) =>
        doc.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        }),
      );
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({ slug }).then((doc) => {
      if (slug) {
        return doc;
      } else {
        return undefined;
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((recup) =>
        recup.filter((tab) => {
          if (platform_slug === tab.platform.slug) {
            return tab;
          } else {
            return false;
          }
        }),
      );
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((platform) =>
        platform.map((info) => {
          return {
            name: info.name,
            slug: info.slug,
          };
        }),
      );
  }
}
