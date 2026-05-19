import Link from "next/link";
import {
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const profileStats = [
  { label: "Current focus", value: "Enterprise AI agents" },
  { label: "Core stack", value: "Python, C#, REST APIs" },
  { label: "Domain", value: "CRM workflow automation" },
];

const focusAreas = [
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
];

const experiences = [
  {
    company: "Datasys",
    location: "New Taipei City, Taiwan",
    roles: [
      {
        title: "AI Application Engineer",
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
];

const skillGroups = [
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
];

const certifications = [
  "Building AI Agents and Agentic Workflows Specialization",
  "Introduction to Image Generation",
  "Vertex AI Studio",
  "Introduction to Responsible AI",
  "Google Cloud Computing Foundations: Data, ML, and AI",
];

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
          ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
          : "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
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
      <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight text-gray-950">
        {title}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="py-10">
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to software engineering opportunities
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Chih-Chi Chen
            </h1>
            <p className="mt-3 text-lg font-medium text-gray-900">
              AI Application Engineer focused on enterprise AI agents and
              backend-integrated workflow automation.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              I build CRM automation systems that connect LLM workflows,
              backend services, enterprise APIs, and operational data into
              maintainable execution pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-gray-600 lg:justify-end">
            <a
              href="mailto:samuel361592@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/samuel361592"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel361592"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <Link
              href="/resume.pdf"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              PDF
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {profileStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-950">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle eyebrow="Overview" title="What I Do Best" />
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-950">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle eyebrow="Experience" title="Recent Work" />
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
            >
              <div className="mb-5 flex flex-col gap-2 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-950">
                      {experience.company}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
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
                      <h4 className="font-medium text-gray-950">
                        {role.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {role.period}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium leading-6 text-gray-800">
                        {role.summary}
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">
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

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <section className="lg:col-span-8">
          <SectionTitle eyebrow="Skills" title="Technical Toolkit" />
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-gray-950">
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

        <aside className="space-y-6 lg:col-span-4">
          <section>
            <SectionTitle eyebrow="Education" title="Background" />
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-950">
                Shih Hsin University
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                B.S. in Information Management
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Sep 2021 - Jun 2025
              </p>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Learning" title="Certifications" />
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <ul className="space-y-3 text-sm leading-6 text-gray-600">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
