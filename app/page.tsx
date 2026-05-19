import Link from "next/link";
import {
  AgentConsole,
  ArchitectureCanvas,
  CapabilityCards,
  HeroBackground,
} from "./components/HomeHeroInteractions";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroBackground />

        <div className="max-w-6xl mx-auto grid gap-10 px-6 pt-28 pb-16 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 motion-safe:animate-[fadeInUp_0.55s_ease-out_both]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to software engineering opportunities
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight motion-safe:animate-[fadeInUp_0.65s_ease-out_both] md:text-6xl">
              Samuel<span className="text-indigo-600">.</span>
            </h1>

            <p className="mb-5 max-w-3xl text-xl font-medium leading-snug text-gray-900 motion-safe:animate-[fadeInUp_0.75s_ease-out_both] md:text-2xl">
              Software Engineer focused on{" "}
              <span className="text-indigo-600">AI agents</span>,{" "}
              <span className="text-cyan-600">backend systems</span>, and{" "}
              <span className="text-emerald-600">
                enterprise workflow automation
              </span>
              .
            </p>

            <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-600 motion-safe:animate-[fadeInUp_0.85s_ease-out_both]">
              I design systems where AI reasoning connects to stable APIs,
              workflow state, validation logic, and real enterprise operations.
              My work emphasizes clear boundaries, predictable behavior, and
              maintainable execution paths.
            </p>

            <div className="flex gap-4 motion-safe:animate-[fadeInUp_0.95s_ease-out_both]">
              <Link
                href="/projects"
                className="rounded-md bg-indigo-600 px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg active:scale-[0.98]"
              >
                View Projects
              </Link>

              <Link
                href="/resume"
                className="rounded-md border border-gray-300 bg-white/70 px-8 py-3 text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-white hover:shadow-sm active:scale-[0.98]"
              >
                Resume
              </Link>
            </div>
          </div>

          <div className="motion-safe:animate-[fadeInUp_1.05s_ease-out_both]">
            <AgentConsole />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="max-w-3xl rounded-xl border border-white/60 bg-white/55 px-6 py-4 backdrop-blur-sm motion-safe:animate-[fadeInUp_1.15s_ease-out_both]">
            <p className="text-sm leading-relaxed text-gray-700">
              Experience building backend-integrated AI workflows, enterprise
              CRM automation, and internal tools with long-term ownership and
              production stability in mind.
            </p>
          </div>
        </div>

        <ArchitectureCanvas />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="mb-10 text-sm uppercase tracking-widest text-gray-400">
          What I Build
        </h2>

        <CapabilityCards />
      </section>
    </>
  );
}
