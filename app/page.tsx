export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Samuel</h1>

      <p className="text-xl text-gray-600 mb-6">
        Software Engineer / Fullstack Developer
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-5 py-2 border rounded hover:bg-gray-100"
        >
          Projects
        </a>
        <a
          href="/resume"
          className="px-5 py-2 border rounded hover:bg-gray-100"
        >
          Resume
        </a>
      </div>
    </main>
  );
}
