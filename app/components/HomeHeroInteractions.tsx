"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Map,
  Workflow,
} from "lucide-react";

const consoleLines = [
  { label: "intent", text: "analyze CRM repair request" },
  { label: "skill", text: "select crm_dispatch_workflow" },
  { label: "validate", text: "check customer, task, and technician data" },
  { label: "tool", text: "call route_planning_api" },
  { label: "state", text: "update scheduling workflow context" },
  { label: "result", text: "return structured operation summary" },
];

const architectureLayers = [
  {
    title: "Agent Layer",
    subtitle: "Interprets task intent",
    detail:
      "The agent decides what capability is needed without owning every execution detail.",
    icon: Bot,
  },
  {
    title: "Skill Layer",
    subtitle: "Packages reusable capabilities",
    detail:
      "Skills expose stable actions such as dispatch lookup, scheduling, notifications, and route planning.",
    icon: Layers3,
  },
  {
    title: "Workflow Layer",
    subtitle: "Controls deterministic execution",
    detail:
      "Workflow nodes handle conditions, state, validation, API calls, and LLM steps in a traceable order.",
    icon: Workflow,
  },
  {
    title: "Integration Layer",
    subtitle: "Connects enterprise systems",
    detail:
      "Backend APIs, CRM services, and map data provide the real operational execution surface.",
    icon: Database,
  },
];

const capabilities = [
  {
    title: "AI Workflow Engineering",
    description:
      "Designing LLM-assisted workflows where reasoning and deterministic execution each have clear ownership.",
    tags: ["LLM Nodes", "State", "Conditions"],
    icon: GitBranch,
  },
  {
    title: "Backend Integration",
    description:
      "Building API-backed services that let agents operate through stable, validated system boundaries.",
    tags: ["REST APIs", "OpenAPI", "Validation"],
    icon: Braces,
  },
  {
    title: "Enterprise Automation",
    description:
      "Turning CRM operations such as dispatch, scheduling, notification, and route planning into repeatable flows.",
    tags: ["CRM", "Scheduling", "Maps"],
    icon: Map,
  },
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-indigo-50/70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  );
}

export function AgentConsole() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisibleCount((count) =>
        count >= consoleLines.length ? 1 : count + 1,
      );
    }, 900);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex h-[420px] flex-col rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-100 shadow-2xl shadow-indigo-950/15">
      <div className="mb-3 flex shrink-0 items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-xs text-slate-400">
          agent-runner.ts
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col font-mono text-xs leading-5">
        <div className="text-slate-500">$ run crm_agent.execute</div>
        <div className="mt-4 grid flex-1 grid-rows-6 gap-2">
          {consoleLines.map((line, index) => {
            const isVisible = index < visibleCount;

            return (
              <div
                key={line.label}
                className={[
                  "grid min-h-0 grid-cols-[74px_1fr] items-center gap-3 rounded-lg border px-3 py-1.5 transition duration-300",
                  isVisible
                    ? "border-white/5 bg-white/[0.03] opacity-100"
                    : "border-transparent bg-transparent opacity-0",
                ].join(" ")}
              >
                <span className="text-indigo-300">[{line.label}]</span>
                <span className="text-slate-200">{line.text}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex shrink-0 items-center gap-2 text-emerald-300">
          <CheckCircle2 className="h-4 w-4" />
          <span>workflow ready</span>
          <span className="h-4 w-2 animate-pulse bg-emerald-300/70" />
        </div>
      </div>
    </div>
  );
}

export function ArchitectureCanvas() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeLayer = architectureLayers[activeIndex];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="rounded-2xl border border-gray-200 bg-white/75 p-5 shadow-sm backdrop-blur md:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
              Architecture Canvas
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-gray-950">
              Agentic AI, But With System Boundaries
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-600">
            Hover or tap a layer to see how AI reasoning connects to stable
            backend execution.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-3 sm:grid-cols-4">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={layer.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "group relative min-h-36 rounded-xl border p-4 text-left transition duration-300",
                    isActive
                      ? "border-indigo-200 bg-indigo-50 shadow-sm"
                      : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-700",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-950">
                    {layer.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">
                    {layer.subtitle}
                  </p>
                  {index < architectureLayers.length - 1 ? (
                    <ArrowRight className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gray-300 sm:block" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-950 p-5 text-white">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-indigo-200">
              <GitBranch className="h-5 w-5" />
            </div>
            <p className="text-xs uppercase tracking-widest text-indigo-200">
              Selected Layer
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              {activeLayer.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {activeLayer.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {capabilities.map((capability) => {
        const Icon = capability.icon;

        return (
          <article
            key={capability.title}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold tracking-tight text-gray-950">
              {capability.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {capability.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {capability.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200 transition group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:ring-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
