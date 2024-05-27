import {
  json,
  type ActionFunction,
  type LoaderFunction,
  type MetaFunction,
} from '@remix-run/node';
import { eq } from 'drizzle-orm';

import { db } from '~/.server/db/client';
import { playersTable } from '~/.server/db/schema';
import { AddPlayerForm } from '~/components/AddPlayerForm';
import { Players } from '~/components/Players';

// This is a Remix meta function that sets the title and description of the page
export const meta: MetaFunction = () => {
  return [
    { title: 'NBA Players showcase app' },
    { name: 'description', content: 'This app is just a showcase for Remix' },
  ];
};

// Remix loader function for passing data to the '/' route
// This function is only ever run on the server. On the initial server render, it will provide data to the HTML document. On navigations in the browser, Remix will call the function via fetch from the browser.
// This means you can talk directly to your database, use server-only API secrets, etc. Any code that isn't used to render the UI will be removed from the browser bundle.
export const loader: LoaderFunction = async () => {
  // This is a query to select all players from the 'players' table
  const players = await db.select().from(playersTable).catch(console.error);

  // Handle errors in any way you like
  if (!players) {
    return { players: [] };
  }

  return json({ players });
};

// Remix action function for handling form submissions
// This function is called when the form is submitted within a route with a "non-GET" method
// It gets the web request object and can be used to handle form data
export const action: ActionFunction = async ({ request }) => {
  // Get the form data from the web request object
  const formData = await request.formData();

  // Get the action type from the form data
  // We need this in order to handle more forms per route
  const action = formData.get('_action');

  if (action === 'deletePlayer') {
    const playerId = formData.get('playerId') as string;

    if (!playerId) {
      // do some server validation
    }

    await db.delete(playersTable).where(eq(playersTable.id, Number(playerId)));
  }

  if (action === 'addPlayer') {
    const name = formData.get('playerName') as string;
    // We can do some server validation here and
    // return an error message
    if (!name) {
      // do some server validation
    }

    // Insert the player into the database
    await db
      .insert(playersTable)
      .values({ name })
      .returning()
      // Handle the error in any way you like
      .catch(console.error);
  }

  // Must always return something from an action
  return null;
};

export default function IndexRoute() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-10">
      <h1 className="text-xl font-medium underline">
        NBA Players Database{' '}
        <span role="img" aria-label="basketball emoji">
          🏀
        </span>
      </h1>
      <section className="flex gap-5 items-center">
        <AddPlayerForm />
        <Players />
      </section>
    </main>
  );
}
