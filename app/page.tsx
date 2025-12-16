import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_60%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-36 pb-32">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </span>

          <h1 className="text-6xl font-bold tracking-tight mb-8">
            Samuel<span className="text-indigo-600">.</span>
          </h1>

          <p className="text-2xl font-medium text-gray-900 mb-6 max-w-2xl leading-snug">
            A software engineer who values{" "}
            <span className="text-indigo-600">clarity</span>,{" "}
            <span className="text-cyan-600">stability</span>, and{" "}
            <span className="text-emerald-600">long-term maintainability</span>.
          </p>

          <p className="text-base text-gray-600 max-w-2xl leading-relaxed mb-12">
            I build systems that are easy to understand, reliable under change,
            and designed to stay maintainable as complexity grows.
          </p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
            >
              View Projects →
            </Link>
            <Link
              href="/resume"
              className="px-8 py-3 rounded-md border border-gray-300 hover:bg-white transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW I WORK ================= */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
          How I Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PhilosophyCard
            title="Stability First"
            color="indigo"
            description="I prefer predictable, well-tested solutions over clever but fragile designs."
          />
          <PhilosophyCard
            title="Clarity Over Cleverness"
            color="cyan"
            description="Code should explain itself. If a system is hard to understand, it will not age well."
          />
          <PhilosophyCard
            title="Maintainability Matters"
            color="emerald"
            description="I design systems with future changes in mind, not just today’s requirements."
          />
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-2xl font-bold mb-4">Selected Work</h2>
        <p className="text-gray-600 max-w-xl mb-6">
          A small selection of projects that reflect how I think about system
          design and long-term maintainability.
        </p>

        <Link
          href="/projects"
          className="inline-flex items-center text-indigo-600 hover:underline"
        >
          Explore all projects →
        </Link>
      </section>
    </>
  );
}

/* ================= Components ================= */

function PhilosophyCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: "indigo" | "cyan" | "emerald";
}) {
  const colorMap = {
    indigo: "bg-indigo-50 text-indigo-600",
    cyan: "bg-cyan-50 text-cyan-600",
    emerald: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <div
        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4 ${colorMap[color]}`}
      >
        {title}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
