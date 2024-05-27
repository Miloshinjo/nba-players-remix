import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// This is a table definition for a SQLite table named 'players'.
export const playersTable = sqliteTable('players', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
});

// These are the types for the rows in the 'players' table.
export type SelectPlayer = typeof playersTable.$inferSelect;
export type InsertPlayer = typeof playersTable.$inferInsert;
