import { Hono } from "hono";
import { Env } from "../";

import { getDbInstance } from "@repo/db";

const app = new Hono<{ Bindings: Env }>().get("/github", (c) => {
  return c.json("GET -> /api/auth/github");
});

export default app;
