export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold">Samuel Portfolio</h2>
        <p className="text-gray-600 mt-2">
          Next.js + Tailwind + Vercel
        </p>
        <div className="mt-2 flex gap-4">
          <a className="underline" href="#">GitHub</a>
          <a className="underline" href="#">Demo</a>
        </div>
      </div>
    </main>
  );
}
