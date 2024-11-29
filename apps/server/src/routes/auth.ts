import { Hono } from "hono";
import { createMiddleware } from "hono/factory";

import { Env } from "../";

const googleOAuth = createMiddleware<{
  Bindings: Env;
}>(async (c, next) => {});

const app = new Hono<{ Bindings: Env }>()
  .get("/google", googleOAuth, (c) => {
    return c.json("GET -> /api/auth/google");
  })
  .get("/github", (c) => c.json("GET -> /api/auth/discord"));

export default app;
