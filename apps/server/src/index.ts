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

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
  }),
);

const routes = app
  .route("/authors", authors)
  .route("/books", books)
  .route("/auth", auth);

type AppType = typeof routes;

export default app;
export const client = hc<AppType>("http://127.0.0.1:8787");
