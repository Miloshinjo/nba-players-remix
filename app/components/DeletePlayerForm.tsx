import { Form } from '@remix-run/react';

export function DeletePlayerForm({ playerId }: { playerId: number }) {
  return (
    <Form method="post" className="flex justify-between gap-2">
      <input type="hidden" name="playerId" value={playerId} />
      <button
        type="submit"
        className="text-red-400"
        title="Delete player"
        value="deletePlayer"
        name="_action"
      >
        <span role="img" aria-label="x emoji">
          ❌
        </span>
      </button>
    </Form>
  );
}
