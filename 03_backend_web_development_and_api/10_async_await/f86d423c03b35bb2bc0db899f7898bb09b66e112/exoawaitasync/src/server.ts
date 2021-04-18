import express, { response } from "express";
import bodyParser from "body-parser";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

const jsonParser = bodyParser.json();

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.get("/", async (request, response) => {
    // const res = await response.status(400).json({ error: "Wrong resource" });
    // return res;
    response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", async (request, response) => {
    const first = await gameModel.getAll();
    response.json(first);
  });

  app.get("/games/:game_slug", async (request, response) => {
    try {
      const first = await gameModel.findBySlug(request.params.game_slug);
      response.json(first);
    } catch (error) {
      response.status(404).end();
    }
  });

  app.get("/platforms", async (request, response) => {
    const res = await gameModel.getPlatforms();
    response.json(res);
  });

  app.get("/platforms/:platform_slug", async (request, response) => {
    const res = await gameModel.findByPlatform(request.params.platform_slug);
    response.json(res);
  });

  app.post("/games", jsonParser, async (request, response) => {
    const testAgg = await gameModel.testAgragete();
    const checkGame = request.body;
    if (!testAgg) {
      response.status(400).end();
    } else {
      const result = await gameModel.create(checkGame);
      if (checkGame.slug === undefined || checkGame.name === undefined) {
        response.status(400).end();
      } else {
        const resultBySlug = await gameModel.findBySlug(checkGame.slug);
        response.status(201).json(resultBySlug);
      }
    }
  });

  return app;
}
