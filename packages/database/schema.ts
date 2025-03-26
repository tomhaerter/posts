import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  email: text().notNull().unique(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
})

export const posts = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: text().notNull(),
  userId: integer()
    .notNull()
    .references(() => users.id),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
})
