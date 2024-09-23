import { drizzle } from 'drizzle-orm/libsql';

import { createClient } from '@libsql/client';
import * as schema from './schema';

// This is the client that will be used to connect to the database.
const client = createClient({
  url: 'TURSO_DB_URL',
  authToken: 'TURSO_DB_AUTH_TOKEN',
});

// This is the database object that can be used to interact with the database.
export const db = drizzle(client, { schema });
