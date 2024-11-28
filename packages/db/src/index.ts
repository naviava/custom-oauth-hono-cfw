import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

export function getDbInstance(connString: string, forAuth?: boolean) {
  const sql = neon<boolean, boolean>(connString);
  return drizzle({
    client: sql,
    schema,
  });
}
