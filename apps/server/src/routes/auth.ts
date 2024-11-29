import { Hono } from "hono";
import { createMiddleware } from "hono/factory";

import { Env } from "../";
import { githubAuth } from "@hono/oauth-providers/github";

const githubOAuth = createMiddleware<{
  Bindings: Env;
}>(async (c, next) => {
  const middleware = githubAuth({
    client_id: c.env.AUTH_GITHUB_ID,
    client_secret: c.env.AUTH_GITHUB_SECRET,
  });
  return middleware(c, next);
});

const app = new Hono<{ Bindings: Env }>()
  .get("/github", githubOAuth, (c) => {
    const token = c.get("token");
    const user = c.get("user-github");

    return c.json({ token, user });
  })
  .get("/discord", (c) => c.json({ message: "Hello World!" }));

export default app;
