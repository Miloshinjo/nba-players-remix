import { Form } from '@remix-run/react';

/**
 * Form to add a new player to the database
 *
 * @returns React component
 */
export function AddPlayerForm() {
  return (
    <article className="flex flex-col gap-5">
      <h2 className="font-medium text-lg">Add new player to database</h2>
      <Form method="post" className="border p-4 bg-gray-50 flex flex-col gap-2">
        <p className="flex flex-col">
          <label htmlFor="playerName">Player name</label>
          <input
            id="playerName"
            name="playerName"
            type="text"
            required
            className="border px-2 py-1"
            placeholder="Michael Jordan"
          />
        </p>
        <button
          type="submit"
          className="bg-gray-200 self-end px-2 py-1 font-medium rounded border"
          title="Add player"
          name="_action"
          value="addPlayer"
        >
          Add player
        </button>
      </Form>
    </article>
  );
}
