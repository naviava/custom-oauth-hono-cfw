import { Hono } from "hono";
import { Env } from "../";

const app = new Hono<{ Bindings: Env }>()
  .get("/", async (c) => c.json({ message: "hi" }))
  .post("/", (c) => c.json("create a book", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
