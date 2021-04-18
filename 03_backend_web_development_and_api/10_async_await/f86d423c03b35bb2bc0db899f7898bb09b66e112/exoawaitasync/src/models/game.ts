import { json } from "body-parser";
import { response } from "express";
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
const agg = [
  {
    $group: {
      _id: "$platform.slug",
      games: {
        $push: {
          name: "$slug",
          genre: "$genres",
        },
      },
    },
  },
  {
    $project: {
      games: {
        $size: "$games",
      },
    },
  },
];

export class GameModel {
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  private fullGameToGame(game: Game) {
    return {
      name: game.name,
      slug: game.slug,
      cover: game.cover_url,
    };
  }

  async getAll(): Promise<Game[]> {
    const allGame = await this.collection.find({}).toArray();
    const result = await allGame.map(this.fullGameToGame);
    return result;
  }

  async findBySlug(slug: string): Promise<Game | null> {
    const newslug = await this.collection.findOne({
      slug: slug,
    });
    if (!newslug.slug) {
      throw new Error("Pas de slug trouvé");
    } else {
      return newslug;
    }
  }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const firstResult = await this.collection.find({ "platform.slug": platform_slug }).toArray();
    const result = await firstResult.map(this.fullGameToGame);
    return result;
  }

  async getPlatforms(): Promise<unknown> {
    const firstResult = await this.collection.find({}).toArray();
    const platforms: Platform[] = [];
    const secondResult = await firstResult.forEach((game) => {
      const platform = platforms.find((platform) => platform.slug === game.platform.slug);
      if (!platform) {
        platforms.push(game.platform);
      }
    });
    const resultFinal = platforms.map((res) => {
      return {
        name: res.name,
        slug: res.slug,
      };
    });
    return resultFinal;
  }

  async create(game: Game): Promise<unknown> {
    const insert = await this.collection.insertOne(game);
    return insert;
  }

  async testAgragete(): Promise<unknown> {
    const test = await this.collection
      .aggregate(agg) // 2️⃣
      .toArray()
      .then((result) => {
        //console.log(result[0]); // 3️⃣
        return result;
      });
    return test;
  }
}
