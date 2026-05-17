import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "turso",
    schema: "./app/db/schema.ts",
    out: "./drizzle",
    dbCredentials:{
        url: process.env.VITE_TURSO_DATABASE_URL!,
        authToken: process.env.VITE_TURSO_AUTH_TOKEN!,
    }
});

