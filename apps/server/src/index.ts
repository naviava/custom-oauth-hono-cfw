import { Hono } from "hono";
import { cors } from "hono/cors";
import { hc } from "hono/client";

import authors from "./routes/authors";
import books from "./routes/books";
import auth from "./routes/auth";

export type Env = {
  DATABASE_URL: string;
  AUTH_SECRET: string;
  WEB_URL: string;
  AUTH_GITHUB_ID: string;
  AUTH_GITHUB_SECRET: string;
};

const app = new Hono()
  .basePath("/api")
  .use("*", cors({ origin: "https://localhost:3000", credentials: true }));

const routes = app
  .route("/authors", authors)
  .route("/books", books)
  .route("/auth", auth);

type AppType = typeof routes;

export default app;
export const client = hc<AppType>("http://localhost:8787");
