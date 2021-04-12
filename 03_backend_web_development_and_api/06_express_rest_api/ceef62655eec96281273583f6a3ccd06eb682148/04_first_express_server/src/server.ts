import express, { request, response } from "express";

const app = express();

app.get("/", (req, res) => res.send("OK"));

export { app };
