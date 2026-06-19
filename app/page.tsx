"use client";

import Link from "next/link";
import {
  AgentConsole,
  ArchitectureCanvas,
  CapabilityCards,
  HeroBackground,
} from "./components/HomeHeroInteractions";
import { useLanguage } from "./lib/language";

const homeText = {
  en: {
    availability: "Open to software engineering opportunities",
    headlinePrefix: "Software Engineer focused on",
    aiAgents: "AI agents",
    backendSystems: "backend systems",
    and: "and",
    enterpriseAutomation: "enterprise workflow automation",
    intro:
      "I design systems where AI reasoning connects to stable APIs, workflow state, validation logic, and real enterprise operations. My work emphasizes clear boundaries, predictable behavior, and maintainable execution paths.",
    viewProjects: "View Projects",
    resume: "Resume",
    note:
      "Experience building backend-integrated AI workflows, enterprise CRM automation, and internal tools with long-term ownership and production stability in mind.",
    buildTitle: "What I Build",
  },
  zh: {
    availability: "正在尋找軟體工程相關機會",
    headlinePrefix: "專注於",
    aiAgents: "AI agents",
    backendSystems: "後端系統",
    and: "以及",
    enterpriseAutomation: "企業流程自動化",
    intro:
      "我設計能串接 AI 推理、穩定 API、流程狀態、驗證邏輯與企業實際作業的系統，重視清楚邊界、可預期行為與長期維護性。",
    viewProjects: "查看專案",
    resume: "履歷",
    note:
      "具備後端整合、AI 工作流程、企業 CRM 自動化與內部工具開發經驗，重視長期維護與正式環境穩定性。",
    buildTitle: "我打造的系統",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const text = homeText[language];

  return (
    <>
      <section className="relative overflow-hidden">
        <HeroBackground />

        <div className="max-w-6xl mx-auto grid gap-10 px-6 pt-28 pb-16 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-success-soft px-3 py-1 text-xs text-success motion-safe:animate-[fadeInUp_0.55s_ease-out_both]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success-dot" />
              {text.availability}
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight motion-safe:animate-[fadeInUp_0.65s_ease-out_both] md:text-6xl">
              Samuel<span className="text-accent">.</span>
            </h1>

            <p className="mb-5 max-w-3xl text-xl font-medium leading-snug text-foreground motion-safe:animate-[fadeInUp_0.75s_ease-out_both] md:text-2xl">
              {text.headlinePrefix}{" "}
              <span className="text-accent">{text.aiAgents}</span>,{" "}
              <span className="text-cyan-600">{text.backendSystems}</span>,{" "}
              {text.and}{" "}
              <span className="text-success">
                {text.enterpriseAutomation}
              </span>
              .
            </p>

            <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted motion-safe:animate-[fadeInUp_0.85s_ease-out_both]">
              {text.intro}
            </p>

            <div className="flex gap-4 motion-safe:animate-[fadeInUp_0.95s_ease-out_both]">
              <Link
                href="/projects"
                className="rounded-md bg-accent px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg active:scale-[0.98]"
              >
                {text.viewProjects}
              </Link>

              <Link
                href="/resume"
                className="rounded-md border border-border bg-card/70 px-8 py-3 text-muted transition-all duration-200 hover:border-accent hover:bg-card hover:text-foreground hover:shadow-sm active:scale-[0.98]"
              >
                {text.resume}
              </Link>
            </div>
          </div>

          <div className="motion-safe:animate-[fadeInUp_1.05s_ease-out_both]">
            <AgentConsole />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="max-w-3xl rounded-xl border border-border bg-card/65 px-6 py-4 backdrop-blur-sm motion-safe:animate-[fadeInUp_1.15s_ease-out_both]">
            <p className="text-sm leading-relaxed text-muted">
              {text.note}
            </p>
          </div>
        </div>

        <ArchitectureCanvas />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="mb-10 text-sm uppercase tracking-widest text-muted">
          {text.buildTitle}
        </h2>

        <CapabilityCards />
      </section>
    </>
  );
}
