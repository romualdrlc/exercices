import express, { request, response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import * as nunjucks from "nunjucks";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();
  app.use("/assets", express.static("assets"));

  nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  const clientWantsJson = (request: express.Request): boolean => {
    if (request.get("accept") === "application/json") {
      return true;
    } else {
      return false;
    }
  };

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
      } else if (clientWantsJson(request)) {
        response.json(game);
      } else {
        response.render("game", { game });
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      if (clientWantsJson(request)) {
        response.json(platforms);
      } else {
        response.render("platform", { platforms });
      }
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      if (clientWantsJson(request)) {
        response.json(gamesForPlatform);
      } else {
        response.render("platformslug", { gamesForPlatform });
      }
    });
  });

  app.get("/*", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(404).json({ error: "Wrong resource" });
    } else {
      response.status(404).render("not-found");
    }
  });

  return app;
}
