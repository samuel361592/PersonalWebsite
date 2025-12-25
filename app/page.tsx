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
          {/* subtle breathing layer */}
          <div className="absolute inset-0 opacity-60 animate-[pulse_12s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_55%)]" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
          {/* Status */}
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-5
                           motion-safe:animate-[fadeInUp_0.55s_ease-out_both]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to software engineering opportunities
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6
                         motion-safe:animate-[fadeInUp_0.65s_ease-out_both]">
            Samuel<span className="text-indigo-600">.</span>
          </h1>

          {/* Value proposition */}
          <p className="text-xl md:text-2xl font-medium text-gray-900 mb-5 max-w-3xl leading-snug
                        motion-safe:animate-[fadeInUp_0.75s_ease-out_both]">
            Software Engineer specializing in{" "}
            <span className="text-indigo-600">backend development</span>,{" "}
            <span className="text-cyan-600">system stability</span>, and{" "}
            <span className="text-emerald-600">long-term maintainability</span>.
          </p>

          <p className="text-base text-gray-600 max-w-3xl leading-relaxed mb-10
                        motion-safe:animate-[fadeInUp_0.85s_ease-out_both]">
            I design and build backend systems, APIs, and internal tools with a
            strong focus on clarity, predictable behavior, and scalable system
            architecture. My work emphasizes readable code, reliable data flows,
            and systems that remain maintainable as complexity grows.
          </p>

          {/* CTA */}
          <div className="flex gap-4 motion-safe:animate-[fadeInUp_0.95s_ease-out_both]">
            <Link
              href="/projects"
              className="
                px-8 py-3 rounded-md bg-indigo-600 text-white font-medium
                transition-all duration-200
                hover:bg-indigo-500 hover:shadow-lg
                active:scale-[0.98]
              "
            >
              View Projects →
            </Link>

            <Link
              href="/resume"
              className="
                px-8 py-3 rounded-md border border-gray-300 text-gray-700
                transition-all duration-200
                hover:bg-white hover:border-gray-400 hover:shadow-sm
                active:scale-[0.98]
              "
            >
              Resume
            </Link>
          </div>
        </div>

        {/* HERO FOOTNOTE (Summary inside hero for smoother UX) */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="rounded-xl border border-white/60 bg-white/55 backdrop-blur-sm
                          px-6 py-4 max-w-3xl
                          motion-safe:animate-[fadeInUp_1.05s_ease-out_both]">
            <p className="text-sm text-gray-700 leading-relaxed">
              Experience designing, building, and maintaining backend systems,
              enterprise CRM applications, and internal tools with long-term
              ownership and production stability in mind.
            </p>
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
      className="
        group relative overflow-hidden
        rounded-xl border border-gray-200 p-6 bg-white
        transition-all duration-300
        hover:border-gray-300
        hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]
      "
    >
      {/* subtle inner glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.10),transparent_55%)]
        "
      />

      {/* subtle shine sweep */}
      <div
        className="
          pointer-events-none absolute -inset-y-10 -left-20 w-24 rotate-12
          bg-white/40 blur-xl opacity-0
          group-hover:opacity-100 group-hover:translate-x-[420px]
          transition-all duration-700 ease-out
        "
      />

      <h3 className="text-sm font-medium text-gray-900 mb-2 relative">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed relative">
        {description}
      </p>
    </div>
  );
}
