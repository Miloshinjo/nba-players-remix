import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'NBA Players showcase app' },
    { name: 'description', content: 'This app is just a showcase for Remix' },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-10">
      <h1 className="text-xl font-medium underline">
        NBA Players Database{' '}
        <span role="img" aria-label="basketball emoji">
          🏀
        </span>
      </h1>
      <section className="flex gap-5 items-center">
        <div>Add Player Form</div>
        <div>Players list</div>
      </section>
    </main>
  );
}
