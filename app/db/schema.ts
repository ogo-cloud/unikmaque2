import * as sql from 'drizzle-orm/sqlite-core';

export const Users = sql.sqliteTable("users", {
    uid: sql.text().primaryKey(),
    full_name: sql.text().notNull(),
    email: sql.text().unique(),
    phone: sql.text().unique(),
    address: sql.text(),
    country: sql.text(),
    password: sql.text().notNull(),
    verified: sql.int({mode: "boolean"}).default(false),
    avatar: sql.text().default("https://uniqmaque.netlify.app/favicon.ico"),
    locked: sql.int({mode: "boolean"}).default(false),
    createdAt: sql.int("created_at", {mode: "timestamp_ms"}).default(new Date(Date.now())),
    updatedAt: sql.int("updated_at", {mode: "timestamp_ms"}).default(new Date(Date.now())).$onUpdate(()=>new Date(Date.now())),
});

export const Others = sql.sqliteTable("others", {
    id: sql.integer().primaryKey({autoIncrement: true}),
    bonus: sql.int().default(0),
    userid: sql.text().references(() =>Users.uid),
});


