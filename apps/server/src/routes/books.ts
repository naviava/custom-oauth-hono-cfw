import { Hono } from "hono";
import { Env } from "../";

import { users } from "@repo/db/tables";
import { eq } from "@repo/db/drizzle-orm";
import { getDbInstance } from "@repo/db";

const app = new Hono<{ Bindings: Env }>()
  .get("/", async (c) => {
    const db = getDbInstance(c.env.DATABASE_URL);
    const allUsers = await db.query.users.findMany({
      where: eq(users.name, "Navin"),
    });

    return c.json(allUsers);
  })
  .post("/", (c) => c.json("create a book", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
