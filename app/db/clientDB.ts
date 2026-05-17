import { drizzle } from "drizzle-orm/libsql/web";
import * as Schema from "~/db/schema";

export const Drizzle = drizzle({
  connection: {
    url: import.meta.env.VITE_TURSO_DATABASE_URL as string,
    authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN as string,
  },
  schema: {...Schema}
});
