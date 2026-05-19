import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  GitBranch,
  Layers3,
  Route,
} from "lucide-react";

const evolutionStages = [
  {
    stage: "Stage 1",
    title: "Prompt-Based API Execution",
    pattern: "User Input -> Prompt -> LLM -> API Call -> Response",
    strengths: ["Fast to prototype", "High semantic flexibility"],
    limits: [
      "Prompt complexity grew quickly",
      "Execution order was hard to control",
      "Business logic depended too much on LLM behavior",
    ],
  },
  {
    stage: "Stage 2",
    title: "Multi-Agent Architecture",
    pattern:
      "Master Agent -> Query Agent -> Validation Agent -> Notification Agent -> Route Agent",
    strengths: ["Clearer responsibility boundaries", "Easier prompt ownership"],
    limits: [
      "Coordination became more complex",
      "LLM cost and latency increased",
      "Flow control was still too agent-driven",
    ],
  },
  {
    stage: "Stage 3",
    title: "Workflow-Based Execution",
    pattern: "LLM Node -> Function Node -> API Node -> Condition Node -> State Node",
    strengths: [
      "More deterministic execution",
      "Better debugging visibility",
      "Stronger fit for enterprise processes",
    ],
    limits: [
      "Workflow definitions became larger",
      "Repeated logic started to appear",
      "Reusable capability boundaries were still unclear",
    ],
  },
  {
    stage: "Stage 4",
    title: "Skill-Based Architecture",
    pattern: "Agent -> Skill -> Workflow / API / LLM -> CRM Operation Result",
    strengths: [
      "Reusable capabilities",
      "More modular platform direction",
      "Cleaner separation between agent intent and execution details",
    ],
    limits: [
      "Higher abstraction complexity",
      "Debugging needs stronger observability across layers",
    ],
  },
];

const beforeAfter = [
  ["Prompt controls flow", "Workflow controls flow"],
  ["LLM decides execution details", "Agent selects stable skills"],
  ["Logic repeated across prompts", "Capabilities are reusable"],
  ["Hard to debug failures", "Node and skill boundaries improve traceability"],
  ["Prototype-oriented structure", "Enterprise-ready execution architecture"],
];

const capabilityGroups = [
  {
    title: "AI / Agentic AI",
    items: [
      "Prompt Engineering",
      "Multi-Agent Architecture",
      "Workflow Orchestration",
      "Skill Abstraction",
      "Stateful Execution",
      "Hybrid AI Execution",
    ],
  },
  {
    title: "Backend Engineering",
    items: [
      "RESTful API Design",
      "OpenAPI / Swagger",
      "API Integration",
      "Workflow State Management",
      "Validation Logic",
      "Error Handling",
    ],
  },
  {
    title: "Enterprise Integration",
    items: [
      "CRM System Integration",
      "Google Maps API Integration",
      "Route Planning",
      "Scheduling Automation",
      "Notification Automation",
    ],
  },
];

const finalFlow: {
  title: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  { title: "Agent", detail: "Understands task intent", icon: Bot },
  { title: "Skill", detail: "Exposes reusable capability", icon: Layers3 },
  { title: "Workflow", detail: "Controls execution path", icon: GitBranch },
  { title: "API / LLM", detail: "Runs tools and reasoning", icon: Braces },
  { title: "CRM Result", detail: "Completes operation", icon: CheckCircle2 },
];

export default function CrmAgenticAiCaseStudyPage() {
  return (
    <div className="py-10">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-950"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
            Case Study
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            CRM Agentic AI Architecture Evolution
          </h1>
          <p className="mt-4 text-lg font-medium leading-8 text-gray-800">
            From prompt-based API execution to reusable enterprise AI skills.
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            This case study summarizes how an enterprise CRM automation system
            evolved across four architecture stages to improve determinism,
            maintainability, reuse, and workflow control for repair, dispatch,
            scheduling, notification, and route-planning operations.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Architecture focus", "Agentic AI execution"],
            ["System domain", "Enterprise CRM workflows"],
            ["Key direction", "Reusable skill systems"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {label}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Architecture"
          title="Evolution Timeline"
          description="Each stage solved one set of problems while revealing the next architecture constraint."
        />

        <div className="space-y-5">
          {evolutionStages.map((stage, index) => (
            <article
              key={stage.title}
              className="grid gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-[190px_1fr] md:p-6"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
                  {stage.stage}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-gray-950">
                  {stage.title}
                </h2>
              </div>

              <div>
                <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
                    Pattern
                  </p>
                  <p className="font-mono text-sm leading-6 text-gray-800">
                    {stage.pattern}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <SignalList title="Strengths" items={stage.strengths} />
                  <SignalList title="Limits" items={stage.limits} />
                </div>

                {index < evolutionStages.length - 1 ? (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    Next step
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="System Model"
          title="Final Skill-Based Flow"
          description="The final direction separates agent intent from stable execution capabilities."
        />

        <div className="rounded-2xl border border-gray-200 bg-gray-950 p-5 text-white shadow-sm md:p-6">
          <div className="grid gap-3 md:grid-cols-5">
            {finalFlow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-indigo-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-300">
                    {step.detail}
                  </p>
                  {index < finalFlow.length - 1 ? (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 md:block" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Comparison"
            title="Before And After"
            description="The architecture moved from flexible but fragile prompt behavior toward reusable, controlled execution."
          />
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-950">
              <div className="border-r border-gray-200 p-4">Before</div>
              <div className="p-4">After</div>
            </div>
            {beforeAfter.map(([before, after]) => (
              <div
                key={before}
                className="grid grid-cols-2 border-b border-gray-100 last:border-b-0"
              >
                <div className="border-r border-gray-100 p-4 text-sm leading-6 text-gray-600">
                  {before}
                </div>
                <div className="p-4 text-sm leading-6 text-gray-800">
                  {after}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <SectionHeader
            eyebrow="Capabilities"
            title="What This Demonstrates"
            description="The case study is designed to show architecture thinking, not confidential implementation details."
          />
          <div className="space-y-4">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-gray-950">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <div className="flex max-w-3xl gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Route className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-950">Core takeaway</h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The important engineering shift was not adding more prompts. It
              was designing an execution architecture where agents choose
              reusable capabilities, while workflows and backend services handle
              the deterministic parts of enterprise operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight text-gray-950">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}

function SignalList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-gray-950">{title}</h3>
      <ul className="space-y-2 text-sm leading-6 text-gray-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
