import { drizzle } from 'drizzle-orm/libsql';

import { createClient } from '@libsql/client';
import * as schema from './schema';

// This is the client that will be used to connect to the database.
const client = createClient({
  url: 'libsql://nba-players-miloshinjo.turso.io',
  authToken:
    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTY1OTA0MDcsImlkIjoiYzRmYTJlMjUtMGMxZi00ZWMzLWE0YmItNmJhZjhhOTE5MjQ0In0.gW-oD57WwzPLLlMNCzPcbo3g8WGUjjclmUSz_h5nUM3dqD2KK5-HN9cJq_qdmjCYhOg5G5nqmPQ8uCw83bSbCQ',
});

// This is the database object that can be used to interact with the database.
export const db = drizzle(client, { schema });
