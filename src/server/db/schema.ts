import {
  integer,
  pgTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import * as authSchema from "./auth-schema";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `project_${name}`);

export const files = createTable("files", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  fileName: varchar("file_name", { length: 255 }).notNull(),
  fileSize: integer("file_size").notNull(),
  placeholder: text("placeholder"),
  contentType: varchar("content_type", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const bathhouses = createTable("bathhouses", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  name: varchar("name", {length:255})
    .notNull(),
  price: integer("price")
    .notNull(),
  imageIds: varchar("imageIds")
    .array()
    .notNull()
    .default(sql`ARRAY[]::varchar[]`),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const user = authSchema.user;
export const session = authSchema.session;
export const account = authSchema.account;
export const verification = authSchema.verification;
