// authors.ts
import { Hono } from "hono";
import { env } from "hono/adapter";

const app = new Hono()
  .get("/", (c) => c.json("GET -> /api/authors"))
  .post("/", (c) => c.json("create an author", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
