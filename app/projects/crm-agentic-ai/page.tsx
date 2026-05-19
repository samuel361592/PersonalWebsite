"use client";

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
import { useLanguage } from "../../lib/language";

const caseText = {
  en: {
    back: "Back to Projects",
    hero: {
      eyebrow: "Case Study",
      title: "CRM Agentic AI Architecture Evolution",
      subtitle:
        "From prompt-based API execution to reusable enterprise AI skills.",
      description:
        "This case study summarizes how an enterprise CRM automation system evolved across four architecture stages to improve determinism, maintainability, reuse, and workflow control for repair, dispatch, scheduling, notification, and route-planning operations.",
      stats: [
        ["Architecture focus", "Agentic AI execution"],
        ["System domain", "Enterprise CRM workflows"],
        ["Key direction", "Reusable skill systems"],
      ],
    },
    sections: {
      timeline: {
        eyebrow: "Architecture",
        title: "Evolution Timeline",
        description:
          "Each stage solved one set of problems while revealing the next architecture constraint.",
      },
      flow: {
        eyebrow: "System Model",
        title: "Final Skill-Based Flow",
        description:
          "The final direction separates agent intent from stable execution capabilities.",
      },
      comparison: {
        eyebrow: "Comparison",
        title: "Before And After",
        description:
          "The architecture moved from flexible but fragile prompt behavior toward reusable, controlled execution.",
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "What This Demonstrates",
        description:
          "The case study is designed to show architecture thinking, not confidential implementation details.",
      },
    },
    labels: {
      pattern: "Pattern",
      strengths: "Strengths",
      limits: "Limits",
      nextStep: "Next step",
      before: "Before",
      after: "After",
      takeaway: "Core takeaway",
    },
    evolutionStages: [
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
        strengths: [
          "Clearer responsibility boundaries",
          "Easier prompt ownership",
        ],
        limits: [
          "Coordination became more complex",
          "LLM cost and latency increased",
          "Flow control was still too agent-driven",
        ],
      },
      {
        stage: "Stage 3",
        title: "Workflow-Based Execution",
        pattern:
          "LLM Node -> Function Node -> API Node -> Condition Node -> State Node",
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
    ],
    beforeAfter: [
      ["Prompt controls flow", "Workflow controls flow"],
      ["LLM decides execution details", "Agent selects stable skills"],
      ["Logic repeated across prompts", "Capabilities are reusable"],
      ["Hard to debug failures", "Node and skill boundaries improve traceability"],
      ["Prototype-oriented structure", "Enterprise-ready execution architecture"],
    ],
    capabilityGroups: [
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
    ],
    finalFlow: [
      { title: "Agent", detail: "Understands task intent", icon: Bot },
      { title: "Skill", detail: "Exposes reusable capability", icon: Layers3 },
      { title: "Workflow", detail: "Controls execution path", icon: GitBranch },
      { title: "API / LLM", detail: "Runs tools and reasoning", icon: Braces },
      { title: "CRM Result", detail: "Completes operation", icon: CheckCircle2 },
    ],
    takeaway:
      "The important engineering shift was not adding more prompts. It was designing an execution architecture where agents choose reusable capabilities, while workflows and backend services handle the deterministic parts of enterprise operations.",
  },
  zh: {
    back: "回到專案",
    hero: {
      eyebrow: "案例研究",
      title: "CRM Agentic AI 架構演進",
      subtitle: "從 prompt-based API execution 到可重用的企業 AI skills。",
      description:
        "這份案例整理企業 CRM 自動化系統如何經過四個架構階段，改善維修、派工、排程、通知與路線規劃作業中的可預期性、可維護性、重用性與流程控制。",
      stats: [
        ["架構重點", "Agentic AI execution"],
        ["系統領域", "企業 CRM 工作流程"],
        ["核心方向", "可重用 skill systems"],
      ],
    },
    sections: {
      timeline: {
        eyebrow: "架構",
        title: "演進時間線",
        description:
          "每一階段都解決一組問題，同時也揭露下一個架構限制。",
      },
      flow: {
        eyebrow: "系統模型",
        title: "最終 Skill-Based Flow",
        description: "最終方向是把 agent 意圖與穩定執行能力分離。",
      },
      comparison: {
        eyebrow: "比較",
        title: "Before And After",
        description:
          "架構從彈性高但脆弱的 prompt 行為，轉向可重用且可控的執行方式。",
      },
      capabilities: {
        eyebrow: "能力",
        title: "這份案例展示什麼",
        description: "這份案例用來呈現架構思考，而不是揭露機密實作細節。",
      },
    },
    labels: {
      pattern: "Pattern",
      strengths: "優勢",
      limits: "限制",
      nextStep: "下一步",
      before: "Before",
      after: "After",
      takeaway: "核心重點",
    },
    evolutionStages: [
      {
        stage: "階段 1",
        title: "Prompt-Based API Execution",
        pattern: "User Input -> Prompt -> LLM -> API Call -> Response",
        strengths: ["原型開發速度快", "語意彈性高"],
        limits: [
          "Prompt 複雜度快速增加",
          "執行順序難以控制",
          "商業邏輯過度依賴 LLM 行為",
        ],
      },
      {
        stage: "階段 2",
        title: "Multi-Agent Architecture",
        pattern:
          "Master Agent -> Query Agent -> Validation Agent -> Notification Agent -> Route Agent",
        strengths: ["責任邊界更清楚", "Prompt ownership 更容易管理"],
        limits: [
          "協調成本變高",
          "LLM 成本與延遲增加",
          "流程控制仍然過度由 agent 驅動",
        ],
      },
      {
        stage: "階段 3",
        title: "Workflow-Based Execution",
        pattern:
          "LLM Node -> Function Node -> API Node -> Condition Node -> State Node",
        strengths: [
          "執行更可預期",
          "除錯可視性更好",
          "更符合企業流程需求",
        ],
        limits: [
          "Workflow definitions 變得更大",
          "重複邏輯開始出現",
          "可重用能力邊界仍不夠清楚",
        ],
      },
      {
        stage: "階段 4",
        title: "Skill-Based Architecture",
        pattern: "Agent -> Skill -> Workflow / API / LLM -> CRM Operation Result",
        strengths: [
          "能力可以重用",
          "平台方向更模組化",
          "Agent intent 與 execution details 分離更乾淨",
        ],
        limits: [
          "抽象層複雜度提高",
          "跨層除錯需要更強的 observability",
        ],
      },
    ],
    beforeAfter: [
      ["Prompt 控制流程", "Workflow 控制流程"],
      ["LLM 決定執行細節", "Agent 選擇穩定 skills"],
      ["邏輯在 prompts 之間重複", "能力被封裝成可重用單位"],
      ["失敗難以除錯", "節點與 skill 邊界提升可追蹤性"],
      ["偏向原型的結構", "可支援企業流程的執行架構"],
    ],
    capabilityGroups: [
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
    ],
    finalFlow: [
      { title: "Agent", detail: "理解任務意圖", icon: Bot },
      { title: "Skill", detail: "提供可重用能力", icon: Layers3 },
      { title: "Workflow", detail: "控制執行路徑", icon: GitBranch },
      { title: "API / LLM", detail: "執行工具與推理", icon: Braces },
      { title: "CRM Result", detail: "完成作業結果", icon: CheckCircle2 },
    ],
    takeaway:
      "關鍵工程轉變不是加入更多 prompts，而是設計一套執行架構：agents 選擇可重用能力，workflows 與後端服務負責企業作業中需要穩定、可預期的部分。",
  },
};

export default function CrmAgenticAiCaseStudyPage() {
  const { language } = useLanguage();
  const text = caseText[language];

  return (
    <div className="py-10">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-950"
      >
        <ArrowLeft className="h-4 w-4" />
        {text.back}
      </Link>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
            {text.hero.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            {text.hero.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-8 text-gray-800">
            {text.hero.subtitle}
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            {text.hero.description}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {text.hero.stats.map(([label, value]) => (
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
        <SectionHeader {...text.sections.timeline} />

        <div className="space-y-5">
          {text.evolutionStages.map((stage, index) => (
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
                    {text.labels.pattern}
                  </p>
                  <p className="font-mono text-sm leading-6 text-gray-800">
                    {stage.pattern}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <SignalList
                    title={text.labels.strengths}
                    items={stage.strengths}
                  />
                  <SignalList title={text.labels.limits} items={stage.limits} />
                </div>

                {index < text.evolutionStages.length - 1 ? (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    {text.labels.nextStep}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader {...text.sections.flow} />

        <div className="rounded-2xl border border-gray-200 bg-gray-950 p-5 text-white shadow-sm md:p-6">
          <div className="grid gap-3 md:grid-cols-5">
            {text.finalFlow.map((step, index) => (
              <FlowStep
                key={step.title}
                step={step}
                showArrow={index < text.finalFlow.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader {...text.sections.comparison} />
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-950">
              <div className="border-r border-gray-200 p-4">
                {text.labels.before}
              </div>
              <div className="p-4">{text.labels.after}</div>
            </div>
            {text.beforeAfter.map(([before, after]) => (
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
          <SectionHeader {...text.sections.capabilities} />
          <div className="space-y-4">
            {text.capabilityGroups.map((group) => (
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
            <h2 className="font-semibold text-gray-950">
              {text.labels.takeaway}
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              {text.takeaway}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowStep({
  step,
  showArrow,
}: {
  step: { title: string; detail: string; icon: LucideIcon };
  showArrow: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative rounded-xl border border-white/10 bg-white/[0.06] p-4">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-indigo-200">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-sm font-semibold">{step.title}</h3>
      <p className="mt-2 text-xs leading-5 text-gray-300">{step.detail}</p>
      {showArrow ? (
        <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 md:block" />
      ) : null}
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
