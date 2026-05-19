"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Layers3 } from "lucide-react";
import { useLanguage } from "../lib/language";

type PublicProject = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  repos?: ProjectRepo[];
  demoUrl?: string;
};

type ProjectRepo = {
  label: string;
  url: string;
};

type CaseStudy = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  outcomes: string[];
};

const projectsText: Record<
  "en" | "zh",
  {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    caseHeader: {
      eyebrow: string;
      title: string;
      description: string;
    };
    repoHeader: {
      eyebrow: string;
      title: string;
      description: string;
    };
    whatItShows: string;
    readCaseStudy: string;
    live: string;
    caseStudies: CaseStudy[];
    publicProjects: PublicProject[];
  }
> = {
  en: {
    hero: {
      eyebrow: "Work Portfolio",
      title: "Projects & Case Studies",
      description:
        "Public repositories show implementation practice. Case studies show professional architecture work where source code cannot be shared.",
    },
    caseHeader: {
      eyebrow: "Case Studies",
      title: "Professional Architecture Work",
      description:
        "Real-world engineering work presented as architecture decisions, tradeoffs, and outcomes instead of source code.",
    },
    repoHeader: {
      eyebrow: "GitHub Projects",
      title: "Public Repositories",
      description:
        "Code-first projects that can be inspected directly through GitHub or live demos.",
    },
    whatItShows: "What it shows",
    readCaseStudy: "Read Case Study",
    live: "Live",
    caseStudies: [
      {
        title: "CRM Agentic AI Architecture Evolution",
        description:
          "A professional architecture case study about evolving enterprise CRM automation from prompt-based API calls into reusable skill-based agent workflows.",
        href: "/projects/crm-agentic-ai",
        tags: [
          "Enterprise AI",
          "Agentic Workflows",
          "Skill-Based Architecture",
          "CRM Automation",
        ],
        outcomes: [
          "Moved critical workflow control out of prompts and into deterministic execution paths.",
          "Separated agent responsibilities for querying, validation, notification, and route planning.",
          "Introduced reusable AI skills that can wrap workflows, APIs, and LLM steps behind stable capabilities.",
        ],
      },
    ],
    publicProjects: [
      {
        title: "Personal Website",
        description:
          "Personal portfolio website built with Next.js and deployed on Vercel.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/samuel361592/PersonalWebsite.git",
        demoUrl: "https://samuel-chen.com",
      },
      {
        title: "Social Platform (Auth & RBAC)",
        description:
          "A full-stack social platform built to practice authentication, authorization, and CRUD operations. Supports user registration, JWT-based login, role-based access control, and post ownership validation.",
        tech: ["Next.js", "NestJS", "TypeORM", "JWT", "RBAC", "MySQL"],
        repos: [
          {
            label: "Frontend",
            url: "https://github.com/samuel361592/NextJS_frontend.git",
          },
          {
            label: "Backend",
            url: "https://github.com/samuel361592/NestJS_backend.git",
          },
        ],
      },
      {
        title: "Todo CLI",
        description:
          "A command-line todo application built in Go, featuring persistent storage with SQLite and a maintainable project structure for long-term use.",
        tech: ["Go", "SQLite"],
        githubUrl: "https://github.com/samuel361592/golang-todo-cli.git",
      },
      {
        title: "Google Image Crawler",
        description:
          "A Python-based tool that automates keyword-based image collection using Google Custom Search API, designed for LLM and vision dataset preparation.",
        tech: ["Python", "Google Custom Search API", "REST API"],
        githubUrl: "https://github.com/samuel361592/google-image-crawler.git",
      },
      {
        title: "Taiwan Weather Web",
        description:
          "A web-based weather query tool built with Python and Flask that consumes CWA Open Data to provide 36-hour forecasts for all 22 cities and counties in Taiwan.",
        tech: ["Python", "Flask", "CWA Open Data API", "REST API"],
        githubUrl: "https://github.com/samuel361592/taiwan-weather-web.git",
      },
    ],
  },
  zh: {
    hero: {
      eyebrow: "作品集",
      title: "專案與案例研究",
      description:
        "公開 repo 展示實作能力；案例研究整理真實專案中的架構思考、技術取捨與落地成果。",
    },
    caseHeader: {
      eyebrow: "案例研究",
      title: "專業架構工作",
      description:
        "把真實工程經驗整理成架構決策、技術取捨與落地成果。",
    },
    repoHeader: {
      eyebrow: "GitHub 專案",
      title: "公開程式碼",
      description: "可直接透過 GitHub 或 live demo 檢視的實作型專案。",
    },
    whatItShows: "展示重點",
    readCaseStudy: "閱讀案例",
    live: "Live",
    caseStudies: [
      {
        title: "CRM Agentic AI 架構演進",
        description:
          "一份企業 CRM 自動化架構案例，整理如何從 prompt-based API 呼叫演進成可重用的 skill-based agent workflow。",
        href: "/projects/crm-agentic-ai",
        tags: ["Enterprise AI", "Agentic Workflows", "Skill 架構", "CRM 自動化"],
        outcomes: [
          "將關鍵流程控制從 prompt 移到可預期的執行路徑。",
          "拆分查詢、驗證、通知與路線規劃等 agent 責任。",
          "導入可重用 AI skills，用穩定能力包裝 workflow、API 與 LLM 步驟。",
        ],
      },
    ],
    publicProjects: [
      {
        title: "Personal Website",
        description: "使用 Next.js 建置並部署於 Vercel 的個人作品網站。",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/samuel361592/PersonalWebsite.git",
        demoUrl: "https://samuel-chen.com",
      },
      {
        title: "Social Platform (Auth & RBAC)",
        description:
          "練習 authentication、authorization 與 CRUD 的全端社群平台，支援註冊、JWT 登入、角色權限控管與貼文擁有權驗證。",
        tech: ["Next.js", "NestJS", "TypeORM", "JWT", "RBAC", "MySQL"],
        repos: [
          {
            label: "Frontend",
            url: "https://github.com/samuel361592/NextJS_frontend.git",
          },
          {
            label: "Backend",
            url: "https://github.com/samuel361592/NestJS_backend.git",
          },
        ],
      },
      {
        title: "Todo CLI",
        description:
          "使用 Go 建置的命令列 todo 工具，搭配 SQLite 持久化儲存與可長期維護的專案結構。",
        tech: ["Go", "SQLite"],
        githubUrl: "https://github.com/samuel361592/golang-todo-cli.git",
      },
      {
        title: "Google Image Crawler",
        description:
          "以 Python 和 Google Custom Search API 自動化關鍵字圖片蒐集，用於 LLM 與 vision dataset 準備。",
        tech: ["Python", "Google Custom Search API", "REST API"],
        githubUrl: "https://github.com/samuel361592/google-image-crawler.git",
      },
      {
        title: "Taiwan Weather Web",
        description:
          "以 Python Flask 串接 CWA Open Data 的天氣查詢工具，提供台灣 22 個縣市的 36 小時預報。",
        tech: ["Python", "Flask", "CWA Open Data API", "REST API"],
        githubUrl: "https://github.com/samuel361592/taiwan-weather-web.git",
      },
    ],
  },
};

export default function ProjectsPage() {
  const { language } = useLanguage();
  const text = projectsText[language];

  return (
    <div className="py-10">
      <section className="mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
          {text.hero.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
          {text.hero.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
          {text.hero.description}
        </p>
      </section>

      <section className="mb-16">
        <SectionHeader
          eyebrow={text.caseHeader.eyebrow}
          title={text.caseHeader.title}
          description={text.caseHeader.description}
        />

        <div className="grid gap-6">
          {text.caseStudies.map((study) => (
            <article
              key={study.title}
              className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/40 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-indigo-100/70 blur-3xl" />

              <div className="relative grid gap-6 lg:grid-cols-[1fr_280px]">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                    {study.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                    {study.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-2.5 py-1 text-xs text-indigo-700 ring-1 ring-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/70 bg-white/75 p-4 backdrop-blur">
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                    {text.whatItShows}
                  </p>
                  <ul className="space-y-3 text-sm leading-6 text-gray-600">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <Link
                    href={study.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                  >
                    {text.readCaseStudy}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow={text.repoHeader.eyebrow}
          title={text.repoHeader.title}
          description={text.repoHeader.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {text.publicProjects.map((project) => (
            <PublicProjectCard
              key={project.title}
              project={project}
              liveLabel={text.live}
            />
          ))}
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

function PublicProjectCard({
  project,
  liveLabel,
}: {
  project: PublicProject;
  liveLabel: string;
}) {
  return (
    <article className="group relative flex min-h-72 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      <div className="pointer-events-none absolute -top-1/2 right-[-30%] z-20 h-[220%] w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 blur-[1px] group-hover:[animation:cardShimmer_900ms_ease-out_1]" />
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60" />

      <div className="relative">
        <h3 className="text-xl font-semibold tracking-tight text-gray-950">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>
      </div>

      <div className="relative mt-auto pt-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 transition group-hover:bg-gray-50"
              title={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          {project.repos?.map((repo) => (
            <ProjectLink key={repo.url} href={repo.url} icon="github">
              {repo.label}
            </ProjectLink>
          ))}

          {!project.repos && project.githubUrl ? (
            <ProjectLink href={project.githubUrl} icon="github">
              GitHub
            </ProjectLink>
          ) : null}

          {project.demoUrl ? (
            <ProjectLink href={project.demoUrl} icon="external">
              {liveLabel}
            </ProjectLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: "github" | "external";
  children: React.ReactNode;
}) {
  const Icon = icon === "github" ? Github : ExternalLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-gray-500 transition hover:text-gray-950"
    >
      <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px]" />
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}
