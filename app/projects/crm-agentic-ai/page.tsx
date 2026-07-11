"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  ChevronDown,
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
        "This case study summarizes how an enterprise CRM automation system evolved through multiple architecture stages and is now exploring a reusable skill-based direction for repair, dispatch, scheduling, notification, and route-planning operations.",
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
        title: "Candidate Skill-Based Flow",
        description:
          "The current direction explores how to separate agent intent from stable execution capabilities.",
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
      before: "Before",
      after: "After",
      takeaway: "Core takeaway",
    },
    evolutionStages: [
      {
        stage: "Stage 1",
        title: "Prompt-Based API Execution",
        pattern: "User Input → Prompt → LLM → API Call → Response",
        strengths: [
          "Fast PoC and MVP development",
          "Natural-language input flexibility",
          "Easy integration with existing APIs",
          "Low cost to add simple capabilities",
        ],
        limits: [
          "Limited stability across repeated runs",
          "Execution order was difficult to control",
          "Weak state tracking across long processes",
          "Lower control over API parameters and formats",
          "Debugging became difficult as prompts and context grew",
        ],
      },
      {
        stage: "Stage 2",
        title: "Multi-Agent Architecture",
        pattern:
          "User Request → Master Agent\n├─ Query Agent\n├─ Validation Agent\n├─ Notification Agent\n└─ Route Agent",
        strengths: [
          "High modularity",
          "Easy to extend",
          "Easy to reuse",
          "Prompts are easier to maintain",
          "Useful for splitting complex domains",
        ],
        limits: [
          "More complex architecture",
          "Higher token cost",
          "More difficult debugging",
          "Information can be distorted between agents",
          "Does not naturally solve flow-control problems",
          "Still needs workflows or state machines for long-running processes",
        ],
      },
      {
        stage: "Stage 3",
        title: "Workflow-Based Execution",
        pattern:
          "Workflow Orchestrator\n├─ LLM Node\n├─ Function Node\n├─ API Node\n├─ Condition Node\n└─ State Node\n(dynamic path based on workflow state)",
        strengths: [
          "High flow stability",
          "Stronger state management",
          "More predictable results",
          "Easier debugging and monitoring",
          "Supports complex business logic",
          "Strong fit for standardized enterprise workflows",
          "More controllable LLM cost",
        ],
        limits: [
          "Higher development and setup cost",
          "Lower flexibility when flows change",
          "Large workflows increase maintenance complexity",
          "Limited value for exploratory or open-ended tasks",
          "Simple needs can become over-engineered",
        ],
      },
      {
        stage: "Stage 4 / In Progress",
        title: "Skill-Based Architecture Direction",
        pattern:
          "Agent → Large Skill (fixed process control) → Small Skill (capability execution)\n→ Workflow / API / LLM / JS → Standardized Result\n→ Next Stage or CRM Operation Result",
        strengths: [
          "Stable flow with lower risk of skipping validation or repeating operations",
          "Small skills can be reused across different business processes",
          "Clear responsibility split between large skills, small skills, and workflows",
          "Easier to modify, test, and maintain than one large workflow",
          "Each task can choose API, LLM, JS, or workflow execution as needed",
          "Small skills can be tested, replaced, and versioned independently",
        ],
        limits: [
          "More architecture layers increase early design and decomposition cost",
          "Large skills, small skills, and workflows need consistent input and output formats",
          "Errors can happen across layers, making debugging more complex",
          "Overly fine-grained skills increase skill count and management cost",
          "Requires additional flow state, error handling, and cross-layer observability",
          "Less flexible than fully autonomous agent planning",
        ],
      },
    ],
    beforeAfter: [
      ["Prompt controls flow", "Workflow controls flow"],
      ["LLM decides execution details", "Agent routes toward candidate skills"],
      ["Logic repeated across prompts", "Capabilities are being shaped into reusable units"],
      ["Hard to debug failures", "Node and skill boundaries can improve traceability"],
      ["Prototype-oriented structure", "Moving toward enterprise-ready execution architecture"],
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
      "The important engineering shift is not adding more prompts. It is moving toward an execution architecture where agents can choose reusable capabilities, while workflows and backend services handle the deterministic parts of enterprise operations.",
  },
  zh: {
    back: "回到專案",
    hero: {
      eyebrow: "案例研究",
      title: "CRM Agentic AI 架構演進",
      subtitle: "從 prompt-based API execution 到可重用的企業 AI skills。",
      description:
        "這份案例整理企業 CRM 自動化系統如何經過多個架構階段，並正在探索以可重用 skills 支援維修、派工、排程、通知與路線規劃作業的方向。",
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
        title: "Candidate Skill-Based Flow",
        description: "目前方向是探索如何把 agent 意圖與穩定執行能力分離。",
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
      before: "Before",
      after: "After",
      takeaway: "核心重點",
    },
    evolutionStages: [
      {
        stage: "階段 1",
        title: "Prompt-Based API Execution",
        pattern: "User Input → Prompt → LLM → API Call → Response",
        strengths: [
          "快速完成 PoC 與 MVP",
          "自然語言輸入彈性高",
          "容易串接既有 API",
          "新增簡單能力的成本低",
        ],
        limits: [
          "重複執行的穩定性有限",
          "API 參數與格式較難穩定控制",
          "不適合複雜多步驟流程",
          "Prompt 與 Context 變大後除錯困難",
        ],
      },
      {
        stage: "階段 2",
        title: "Multi-Agent Architecture",
        pattern:
          "User Request → Master Agent\n├─ Query Agent\n├─ Validation Agent\n├─ Notification Agent\n└─ Route Agent",
        strengths: [
          "模組化高",
          "易擴充",
          "易重用",
          "Prompt 易維護",
          "適合複雜領域拆分",
        ],
        limits: [
          "架構較複雜",
          "Token 成本較高",
          "除錯較困難",
          "Agent 間資訊可能失真",
          "無法天然解決流程控制問題",
          "仍需搭配 Workflow 或 State Machine 管理長流程",
        ],
      },
      {
        stage: "階段 3",
        title: "Workflow-Based Execution",
        pattern:
          "Workflow Orchestrator\n├─ LLM Node\n├─ Function Node\n├─ API Node\n├─ Condition Node\n└─ State Node\n(dynamic path based on workflow state)",
        strengths: [
          "流程穩定性高",
          "狀態管理完善",
          "結果較可預測",
          "容易除錯與監控",
          "支援複雜業務邏輯",
          "適合企業標準化流程",
          "LLM 呼叫成本較可控",
        ],
        limits: [
          "開發與初期建置成本較高",
          "流程變更彈性較低",
          "大型流程維護複雜度增加",
          "不適合探索型或開放式任務",
          "簡單需求可能過度設計",
        ],
      },
      {
        stage: "階段 4（進行中）",
        title: "Skill-Based Architecture Direction",
        pattern:
          "Agent\n  ↓\n大 Skill（程序控制）\n  ├─ 小 Skill A → API ─────────┐\n  ├─ 小 Skill B → LLM / JS ────┤\n  ├─ 小 Skill C → Workflow ────┤→ 回傳大 Skill\n  └─ 小 Skill D → Workflow ────┘\n                  ↓\n        下一步判斷／結果整合\n                  ↓\n        CRM Operation Result",
        strengths: [
          "流程穩定，不容易跳過必要驗證或重複執行",
          "小 Skill 可重複使用，例如查詢、寄信能力可供其他程序共用",
          "職責清楚，大 Skill 管理流程，小 Skill 負責能力，Workflow 負責執行細節",
          "比大型單一工作流更容易修改、測試與維護",
          "可依任務選擇 API、LLM、JS 或 Workflow，不必全部使用同一種執行方式",
          "小 Skill 可獨立測試、替換與版本管理",
          "保留固定流程的穩定性，同時具備一定程度的架構彈性",
        ],
        limits: [
          "架構層級較多，初期設計與拆分成本較高",
          "大 Skill、小 Skill 與 Workflow 之間的輸入輸出格式需要統一",
          "錯誤可能跨層發生，問題追蹤與除錯較複雜",
          "小 Skill 粒度過細時，會增加 Skill 數量、呼叫鏈長度與管理成本",
          "需要額外建立流程狀態、錯誤處理與跨層監控機制",
          "流程仍由大 Skill 的固定程序控制，彈性不如完全由 Agent 自主規劃",
        ],
      },
    ],
    beforeAfter: [
      ["Prompt 控制流程", "Workflow 控制流程"],
      ["LLM 決定執行細節", "Agent 導向候選 skills"],
      ["邏輯在 prompts 之間重複", "能力正在被整理成可重用單位"],
      ["失敗難以除錯", "節點與 skill 邊界可提升可追蹤性"],
      ["偏向原型的結構", "逐步走向可支援企業流程的執行架構"],
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
      "關鍵工程轉變不是加入更多 prompts，而是逐步走向一套執行架構：agents 可以選擇可重用能力，workflows 與後端服務負責企業作業中需要穩定、可預期的部分。",
  },
};

export default function CrmAgenticAiCaseStudyPage() {
  const { language } = useLanguage();
  const text = caseText[language];

  return (
    <div className="py-10">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {text.back}
      </Link>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {text.hero.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {text.hero.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-8 text-foreground">
            {text.hero.subtitle}
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            {text.hero.description}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {text.hero.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-border bg-card-muted p-4"
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                {label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader {...text.sections.timeline} />

        <div className="space-y-5">
          {text.evolutionStages.map((stage) => (
            <article
              key={stage.title}
              className="grid gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm md:grid-cols-[190px_1fr] md:p-6"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {stage.stage}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-foreground">
                  {stage.title}
                </h2>
              </div>

              <div>
                <div className="mb-4 rounded-xl border border-border bg-card-muted p-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-muted">
                    {text.labels.pattern}
                  </p>
                  <p className="whitespace-pre-line font-mono text-sm leading-6 text-foreground">
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

              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader {...text.sections.flow} />

        <div className="rounded-2xl border border-border bg-slate-950 p-5 text-white shadow-sm md:p-6">
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
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 border-b border-border bg-card-muted text-sm font-semibold text-foreground">
              <div className="border-r border-border p-4">
                {text.labels.before}
              </div>
              <div className="p-4">{text.labels.after}</div>
            </div>
            {text.beforeAfter.map(([before, after]) => (
              <div
                key={before}
                className="grid grid-cols-2 border-b border-border last:border-b-0"
              >
                <div className="border-r border-border p-4 text-sm leading-6 text-muted">
                  {before}
                </div>
                <div className="p-4 text-sm leading-6 text-foreground">
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
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-card-muted px-2.5 py-1 text-xs text-muted ring-1 ring-border"
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

      <section className="mt-10 rounded-2xl border border-border bg-accent-soft p-6">
        <div className="flex max-w-3xl gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
            <Route className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">
              {text.labels.takeaway}
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted">
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
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        {description}
      </p>
    </div>
  );
}

function splitSignal(item: string) {
  const separatorIndex = item.search(/[:：]/);

  if (separatorIndex === -1) {
    return { label: item, detail: "" };
  }

  return {
    label: item.slice(0, separatorIndex),
    detail: item.slice(separatorIndex + 1).trim(),
  };
}

function SignalList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm leading-6 text-muted">
        {items.map((item) => {
          const signal = splitSignal(item);

          return (
            <li key={item}>
              {signal.detail ? (
                <details className="group rounded-lg border border-border bg-card-muted px-3 py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-foreground transition hover:text-accent [&::-webkit-details-marker]:hidden">
                    <span>{signal.label}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted transition group-open:rotate-180 group-open:text-accent" />
                  </summary>
                  <p className="mt-2 border-t border-border pt-2 text-xs leading-5 text-muted">
                    {signal.detail}
                  </p>
                </details>
              ) : (
                <p className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-medium text-foreground">
                    {signal.label}
                  </span>
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
