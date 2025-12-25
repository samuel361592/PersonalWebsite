import Link from "next/link";

/* HOME PAGE */

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_60%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
          {/* Status */}
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to software engineering opportunities
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Samuel<span className="text-indigo-600">.</span>
          </h1>

          {/* Value proposition (SEO 核心) */}
          <p className="text-xl md:text-2xl font-medium text-gray-900 mb-5 max-w-3xl leading-snug">
            Software Engineer specializing in{" "}
            <span className="text-indigo-600">backend development</span>,{" "}
            <span className="text-cyan-600">system stability</span>, and{" "}
            <span className="text-emerald-600">
              long-term maintainability
            </span>
            .
          </p>

          <p className="text-base text-gray-600 max-w-3xl leading-relaxed mb-10">
            I design and build backend systems, APIs, and internal tools with a
            strong focus on clarity, predictable behavior, and scalable system
            architecture. My work emphasizes readable code, reliable data flows,
            and systems that remain maintainable as complexity grows.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition font-medium"
            >
              View Projects →
            </Link>

            <Link
              href="/resume"
              className="px-8 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-10">
          What I Build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BuildCard
            title="Backend Systems"
            description="Designing backend services and APIs using clear domain logic, predictable workflows, and strong data validation."
          />
          <BuildCard
            title="Enterprise Applications"
            description="Building and maintaining enterprise CRM systems that support complex business rules and long-term evolution."
          />
          <BuildCard
            title="Maintainable Architecture"
            description="Focusing on system design choices that reduce technical debt and keep future changes manageable."
          />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-2xl font-bold mb-4">Selected Work</h2>

        <p className="text-gray-600 max-w-xl mb-6">
          A selection of software engineering projects demonstrating backend
          development, system design, and real-world problem solving.
        </p>
      </section>
    </>
  );
}

/* COMPONENTS */

function BuildCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl border border-gray-200 p-6 bg-white
                 transition hover:-translate-y-1 hover:shadow-sm hover:border-gray-300"
    >
      <h3 className="font-medium text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
