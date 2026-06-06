"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../lib/language";

const resumeText = {
  en: {
    availability: "Open to software engineering opportunities",
    title:
      "AI Engineer focused on enterprise AI agents and backend-integrated workflow automation.",
    intro:
      "I build CRM automation systems that connect LLM workflows, backend services, enterprise APIs, and operational data into maintainable execution pipelines.",
    profileStats: [
      { label: "Current focus", value: "Enterprise AI agents" },
      { label: "Core stack", value: "Python, C#, REST APIs" },
      { label: "Domain", value: "CRM workflow automation" },
    ],
    overview: { eyebrow: "Overview", title: "What I Do Best" },
    experience: { eyebrow: "Experience", title: "Recent Work" },
    skills: { eyebrow: "Skills", title: "Technical Toolkit" },
    education: { eyebrow: "Education", title: "Background" },
    learning: { eyebrow: "Learning", title: "Certifications" },
    university: "Shih Hsin University",
    degree: "B.S. in Information Management",
    educationPeriod: "Sep 2021 - Jun 2025",
    focusAreas: [
  {
    title: "AI Agent Systems",
    description:
      "Designing agentic workflows, reusable AI skills, and multi-step automation for enterprise CRM operations.",
  },
  {
    title: "Backend Integration",
    description:
      "Connecting LLM-driven workflows with REST APIs, business logic, SQL-backed services, and operational validation.",
  },
  {
    title: "Workflow Automation",
    description:
      "Turning dispatch, scheduling, notification, and route-planning processes into clearer execution pipelines.",
  },
],
    experiences: [
  {
    company: "Datasys",
    location: "New Taipei City, Taiwan",
    roles: [
      {
        title: "AI Engineer",
        period: "Jan 2026 - Present",
        summary:
          "Building enterprise AI agent workflows for CRM repair operations, dispatching, scheduling, and route planning.",
        highlights: [
          "Built reusable AI agent skills that connect LLM workflow nodes with enterprise CRM APIs and JavaScript function logic.",
          "Evolved prompt-based API execution into structured workflow pipelines with conditional routing and state-driven orchestration.",
          "Integrated Google Maps APIs to support travel-time estimation, field-service scheduling, and route-planning automation.",
          "Designed OpenAPI-documented services so backend capabilities can be invoked reliably by AI workflows and internal tools.",
        ],
        skills: [
          "AI Agents",
          "Multi-Agent Orchestration",
          "Workflow Automation",
          "RESTful APIs",
          "OpenAPI / Swagger",
          "Google Maps APIs",
        ],
        featured: true,
      },
      {
        title: "Software Engineer",
        period: "Sep 2025 - Dec 2025",
        summary:
          "Developed CRM customization features and backend modules for enterprise business workflows.",
        highlights: [
          "Implemented CRM modules, UI behavior, and backend logic using C#, .NET Framework, ASP.NET Web Forms, and SQL Server.",
          "Translated business requirements into maintainable features with testing and debugging before UAT.",
          "Improved implementation documentation and mentored a new team member, reducing ramp-up time by about 40%.",
        ],
        skills: ["C#", ".NET Framework", "ASP.NET Web Forms", "SQL Server"],
      },
    ],
  },
  {
    company: "GoMore",
    location: "Taipei, Taiwan",
    roles: [
      {
        title: "Quality Assurance Intern",
        period: "Feb 2025 - Aug 2025",
        summary:
          "Tested mobile apps, web dashboards, APIs, wearable devices, and machine-learning model outputs across real usage scenarios.",
        highlights: [
          "Designed functional and exploratory test cases for mobile apps and web management dashboards, then verified fixes across releases.",
          "Performed API integration testing with Postman to catch backend-frontend consistency issues earlier.",
          "Collected real-world sensor and firmware data for wearable devices, supporting engineering validation and stability improvements.",
          "Created Python automation scripts to validate machine-learning model accuracy and reduce manual verification effort.",
        ],
        skills: [
          "Test Design",
          "Postman",
          "Jira / Agile",
          "Python Automation",
          "ML Validation",
        ],
      },
    ],
  },
],
    skillGroups: [
  {
    title: "AI & Workflow",
    skills: [
      "AI Agents",
      "Agentic AI Development",
      "Multi-Agent Orchestration",
      "LLM Workflows",
      "Tool-Invocable Services",
      "Workflow Automation",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "C# / .NET Framework",
      "SQL Server",
      "RESTful APIs",
      "OpenAPI / Swagger",
      "ASP.NET Web Forms",
      "Next.js / React",
      "NestJS",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "System Integration",
      "Google Maps APIs",
      "Git",
      "Jira / Agile",
      "Testing & Debugging",
      "Documentation",
    ],
  },
],
    certifications: [
      {
        title: "Machine Learning Operations (MLOps) for Generative AI",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/15246552?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title:
          "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/15276777?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title: "Foundations of Software Testing and Validation",
        issuer: "University of Leeds",
        url: "https://www.futurelearn.com/certificates/p5z19cq",
      },
      {
        title: "Prompt Design in Vertex AI",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/17171695?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title: "Data Manipulation and Transactions in SQL Server",
        issuer: "Microsoft",
        url: "https://www.coursera.org/account/accomplishments/records/PV0LL3K6KOYX",
      },
      {
        title: "Building AI Agents and Agentic Workflows Specialization",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/specialization/NKAJPVE4MFR2",
      },
      {
        title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/records/OXWMFAC98ECW",
      },
    ],
  },
  zh: {
    availability: "開放軟體工程相關機會",
    title: "AI Application Engineer，專注企業 AI agents、後端整合與工作流程自動化。",
    intro:
      "我建立 CRM 自動化系統，將 LLM 工作流程、後端服務、企業 API 與營運資料整合成穩定、可維護的自動化流程。",
    profileStats: [
      { label: "目前重點", value: "企業 AI agents" },
      { label: "核心技術", value: "Python, C#, REST APIs" },
      { label: "領域", value: "CRM 工作流程自動化" },
    ],
    overview: { eyebrow: "概覽", title: "我的核心能力" },
    experience: { eyebrow: "經歷", title: "近期工作" },
    skills: { eyebrow: "技能", title: "技術工具箱" },
    education: { eyebrow: "學歷", title: "背景" },
    learning: { eyebrow: "學習", title: "證照與課程" },
    university: "世新大學",
    degree: "資訊管理學系 學士",
    educationPeriod: "2021 年 9 月 - 2025 年 6 月",
    focusAreas: [
      {
        title: "AI Agent 系統",
        description:
          "設計 agentic workflows、可重用 AI skills，以及企業 CRM 作業的多步驟自動化。",
      },
      {
        title: "後端整合",
        description:
          "把 LLM-driven workflows 串接 REST APIs、商業邏輯、SQL-backed services 與營運驗證。",
      },
      {
        title: "工作流程自動化",
        description:
          "將派工、排程、通知與路線規劃流程整理成更清楚的執行管線。",
      },
    ],
    experiences: [
      {
        company: "Datasys",
        location: "New Taipei City, Taiwan",
        roles: [
          {
            title: "AI Application Engineer",
            period: "2026 年 1 月 - 現在",
            summary:
              "為 CRM 維修作業、派工、排程與路線規劃建立企業 AI agent workflows。",
            highlights: [
              "建立可重用 AI agent skills，串接 LLM workflow nodes、企業 CRM APIs 與 JavaScript function logic。",
              "將 prompt-based API execution 演進成具備 conditional routing 與 state-driven orchestration 的結構化 workflow pipelines。",
              "整合 Google Maps APIs 支援交通時間估算、外勤排程與路線規劃自動化。",
              "設計 OpenAPI 文件化服務，讓後端能力能被 AI workflows 與內部工具可靠呼叫。",
            ],
            skills: [
              "AI Agents",
              "Multi-Agent Orchestration",
              "Workflow Automation",
              "RESTful APIs",
              "OpenAPI / Swagger",
              "Google Maps APIs",
            ],
            featured: true,
          },
          {
            title: "Software Engineer",
            period: "2025 年 9 月 - 2025 年 12 月",
            summary: "開發企業商務流程所需的 CRM 客製功能與後端模組。",
            highlights: [
              "使用 C#, .NET Framework, ASP.NET Web Forms 與 SQL Server 實作 CRM 模組、UI 行為與後端邏輯。",
              "將商業需求轉成可維護功能，並在 UAT 前完成測試與除錯。",
              "改善實作文件並協助新人上手，使 ramp-up time 約降低 40%。",
            ],
            skills: ["C#", ".NET Framework", "ASP.NET Web Forms", "SQL Server"],
          },
        ],
      },
      {
        company: "GoMore",
        location: "Taipei, Taiwan",
        roles: [
          {
            title: "Quality Assurance Intern",
            period: "2025 年 2 月 - 2025 年 8 月",
            summary:
              "針對 mobile apps、web dashboards、APIs、wearable devices 與 machine-learning model outputs 進行真實使用情境測試。",
            highlights: [
              "設計 mobile apps 與 web management dashboards 的功能與探索式測試案例，並跨版本驗證修正結果。",
              "使用 Postman 進行 API integration testing，提早發現前後端一致性問題。",
              "蒐集 wearable devices 的真實 sensor 與 firmware data，支援工程驗證與穩定性改善。",
              "建立 Python automation scripts 驗證 machine-learning model accuracy，降低人工驗證成本。",
            ],
            skills: [
              "Test Design",
              "Postman",
              "Jira / Agile",
              "Python Automation",
              "ML Validation",
            ],
          },
        ],
      },
    ],
    skillGroups: [
      {
        title: "AI & Workflow",
        skills: [
          "AI Agents",
          "Agentic AI Development",
          "Multi-Agent Orchestration",
          "LLM Workflows",
          "Tool-Invocable Services",
          "Workflow Automation",
        ],
      },
      {
        title: "Backend",
        skills: [
          "Python",
          "C# / .NET Framework",
          "SQL Server",
          "RESTful APIs",
          "OpenAPI / Swagger",
          "ASP.NET Web Forms",
          "Next.js / React",
          "NestJS",
        ],
      },
      {
        title: "Engineering",
        skills: [
          "System Integration",
          "Google Maps APIs",
          "Git",
          "Jira / Agile",
          "Testing & Debugging",
          "Documentation",
        ],
      },
    ],
    certifications: [
      {
        title: "Machine Learning Operations (MLOps) for Generative AI",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/15246552?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title:
          "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/15276777?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title: "Foundations of Software Testing and Validation",
        issuer: "英國里茲大學",
        url: "https://www.futurelearn.com/certificates/p5z19cq",
      },
      {
        title: "Prompt Design in Vertex AI",
        issuer: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/public_profiles/37e3b911-f2e5-496b-9445-eb4d4e1bc3f2/badges/17171695?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        title: "Data Manipulation and Transactions in SQL Server",
        issuer: "微軟",
        url: "https://www.coursera.org/account/accomplishments/records/PV0LL3K6KOYX",
      },
      {
        title: "Building AI Agents and Agentic Workflows Specialization",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/specialization/NKAJPVE4MFR2",
      },
      {
        title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/records/OXWMFAC98ECW",
      },
    ],
  },
};

function Pill({
  children,
  active = false,
}: {
  children: string;
  active?: boolean;
}) {
  return (
    <span
      className={[
        "rounded-md px-2.5 py-1 text-xs transition-colors",
        active
          ? "bg-accent-soft text-accent-foreground ring-1 ring-border"
          : "bg-card-muted text-muted ring-1 ring-border",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  const { language } = useLanguage();
  const text = resumeText[language];

  return (
    <div className="py-10">
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-success-soft px-3 py-1 text-xs font-medium text-success">
              <span className="h-2 w-2 rounded-full bg-success-dot" />
              {text.availability}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Chih-Chi Chen
            </h1>
            <p className="mt-3 text-lg font-medium text-foreground">
              {text.title}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              {text.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-muted lg:justify-end">
            <a
              href="mailto:samuel361592@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card transition hover:border-accent hover:bg-accent-soft hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/samuel361592"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card transition hover:border-accent hover:bg-accent-soft hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel361592"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card transition hover:border-accent hover:bg-accent-soft hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <Link
              href="/resume.pdf"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              <Download className="h-4 w-4" />
              PDF
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {text.profileStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-card-muted p-4"
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle
          eyebrow={text.overview.eyebrow}
          title={text.overview.title}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {text.focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle
          eyebrow={text.experience.eyebrow}
          title={text.experience.title}
        />
        <div className="space-y-5">
          {text.experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"
            >
              <div className="mb-5 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {experience.company}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-7">
                {experience.roles.map((role) => (
                  <div
                    key={`${experience.company}-${role.title}`}
                    className="grid gap-4 md:grid-cols-[220px_1fr]"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">
                        {role.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {role.period}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium leading-6 text-foreground">
                        {role.summary}
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <Pill key={skill} active={role.featured}>
                            {skill}
                          </Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle
          eyebrow={text.skills.eyebrow}
          title={text.skills.title}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {text.skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <section className="lg:col-span-4">
          <SectionTitle
            eyebrow={text.education.eyebrow}
            title={text.education.title}
          />
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground">
              {text.university}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{text.degree}</p>
            <p className="mt-1 text-sm text-muted">{text.educationPeriod}</p>
          </div>
        </section>

        <section className="lg:col-span-8">
          <SectionTitle
            eyebrow={text.learning.eyebrow}
            title={text.learning.title}
          />
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <ul className="grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
              {text.certifications.map((certification) => (
                <li key={certification.title}>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full min-h-24 items-start justify-between gap-3 rounded-lg border border-border bg-card-muted p-3 transition hover:border-accent hover:bg-accent-soft"
                  >
                    <span>
                      <span className="block font-medium leading-5 text-foreground transition group-hover:text-accent">
                        {certification.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-muted">
                        {certification.issuer}
                      </span>
                    </span>
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted transition group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
