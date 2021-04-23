import express, { request, response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import nunjucks from "nunjucks";

const clientWantsJson = (request: express.Request): boolean => request.get("accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();
  const formParser = express.urlencoded({ extended: true });

  nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  app.post("/games/:game_slug/comments", formParser, (request, response) => {
    const input = {
      name: request.body.username,
      comment: request.body.message,
    };
    gameModel.addComment(request.params.game_slug, input).then((game) => {
      response.redirect(`/games/${game.slug}`);
    });
  });

  app.get("/", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("home");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game", { game });
        }
      }
    });
  });

  return app;
}
