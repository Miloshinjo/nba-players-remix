import type { Config } from 'drizzle-kit';

export default {
  schema: './app/.server/db/schema.ts',
  out: './app/.server/db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: 'libsql://nba-players-miloshinjo.turso.io',
    authToken:
      'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTY1OTA0MDcsImlkIjoiYzRmYTJlMjUtMGMxZi00ZWMzLWE0YmItNmJhZjhhOTE5MjQ0In0.gW-oD57WwzPLLlMNCzPcbo3g8WGUjjclmUSz_h5nUM3dqD2KK5-HN9cJq_qdmjCYhOg5G5nqmPQ8uCw83bSbCQ',
  },
  dialect: 'sqlite',
} satisfies Config;
