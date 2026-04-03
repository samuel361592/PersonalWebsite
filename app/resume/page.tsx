import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <section className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/50 to-white px-6 py-7 shadow-sm">
        <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-indigo-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-20 h-44 w-44 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Chih-Chi Chen
            </h1>
            <p className="mt-2 text-gray-600">
              Software Engineer · AI Applications · Backend / Fullstack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                AI Agent Systems
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                Prompt Engineering
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                Enterprise CRM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-indigo-600">
            <a
              href="mailto:samuel361592@gmail.com"
              className="p-2 rounded-md hover:bg-indigo-100 hover:text-indigo-800 transition hover:-translate-y-0.5 hover:scale-105"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/samuel361592"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-indigo-100 hover:text-indigo-800 transition hover:-translate-y-0.5 hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chihchichen"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-indigo-100 hover:text-indigo-800 transition hover:-translate-y-0.5 hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-100/50 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h2 className="text-lg font-semibold mb-3">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Software Engineer specializing in AI agent systems and enterprise
            automation, with hands-on experience building modular,
            production-grade agents and backend integrations.
          </p>
          <p>
            Strong in prompt engineering, RESTful API design, and enterprise
            development with C#, .NET Framework, ASP.NET, and SQL Server,
            focusing on maintainability, workflow integrity, and business logic
            consistency.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-5">Experience</h2>

        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/40 to-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-indigo-100/70 blur-3xl" />
            <p className="text-sm text-gray-500 mb-4">鼎新數智股份有限公司</p>

            <div className="relative pl-8 space-y-6">
              <div className="absolute left-3 top-3 bottom-3 w-px bg-gray-300" />

              <div className="relative rounded-lg border border-transparent p-3 -mx-3 transition duration-300 hover:bg-white/80 hover:border-indigo-100">
                <div className="absolute -left-8 top-4 h-2.5 w-2.5 rounded-full bg-gray-500" />
                <div className="flex justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Junior AI Application Engineer
                  </h3>
                  <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full h-fit">
                    Feb 2026 – Present · 3 months
                  </span>
                </div>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>
                    Contributed as a core developer to a new AI agent product,
                    building a platform that automates enterprise CRM
                    maintenance workflows through natural language interactions
                  </li>
                  <li>
                    Designed prompt flows and agent behaviors to support
                    structured task execution, including repair order creation,
                    status lookup, and customer validation
                  </li>
                  <li>
                    Implemented RESTful APIs and backend integrations to connect
                    AI agent actions with CRM maintenance services
                  </li>
                  <li>
                    Optimized production prompts and response handling to improve
                    determinism, workflow reliability, and business rule
                    compliance
                  </li>
                  <li>
                    Collaborated with teammates to refine product scope, verify
                    feature behavior, and ensure the AI agent experience aligned
                    with real CRM maintenance scenarios
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 transition hover:bg-indigo-100">
                    Prompt Engineering
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 transition hover:bg-indigo-100">
                    RESTful API Design
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 transition hover:bg-indigo-100">
                    AI Agent Development
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 transition hover:bg-indigo-100">
                    Enterprise CRM Automation
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg border border-transparent p-3 -mx-3 transition duration-300 hover:bg-white/80 hover:border-indigo-100">
                <div className="absolute -left-8 top-4 h-2.5 w-2.5 rounded-full bg-gray-500" />
                <div className="flex justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Junior Software Engineer
                  </h3>
                  <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full h-fit">
                    Sep 2025 – Jan 2026 · 5 months
                  </span>
                </div>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>
                    Took ownership of system design, implementation, and quality
                    control tasks for enterprise CRM customization projects,
                    translating client requirements into logic design, feature
                    delivery, and functional verification
                  </li>
                  <li>
                    Developed customized modules, UI components, and backend
                    logic using C#, .NET Framework, ASP.NET Web Forms, and SQL
                    Server
                  </li>
                  <li>
                    Reviewed and updated onboarding and development
                    documentation to replace outdated content with practical
                    implementation details, improving alignment with current
                    workflows
                  </li>
                  <li>
                    Mentored and onboarded a new team member through hands-on
                    guidance on internal tools, workflows, and system
                    architecture, reducing ramp-up time by about 40%
                  </li>
                  <li>
                    Conducted functional testing and debugging to ensure
                    customized features met requirements before handoff for UAT
                    with consultants and clients
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
                    C#
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
                    .NET Framework
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
                    ASP.NET Web Forms
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
                    SQL Server
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md">
            <div className="pointer-events-none absolute -right-14 -top-16 h-36 w-36 rounded-full bg-indigo-100/60 blur-3xl" />

            <div className="flex justify-between flex-wrap gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug transition-colors group-hover:text-indigo-700">
                  QA Intern
                </h3>
                <p className="text-sm text-gray-500 mt-1">GoMore</p>
              </div>
              <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full h-fit">
                Feb 2023 – Aug 2025 · 7 months
              </span>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>
                Executed functional testing for the "活力翻翻" mobile app and its
                web-based management dashboard by designing test cases,
                reporting issues, and validating fixes, ensuring high-quality
                releases
              </li>
              <li>
                Performed functional and exploratory testing for the MegoLuki
                mobile app, verifying core user flows, UI/UX behavior, and
                feature stability across different scenarios, and collaborating
                with the team to identify and report defects
              </li>
              <li>
                Performed structured motion testing (nodding, shaking) for Cleer
                wireless headphones under exercise and public transportation
                scenarios, collecting sensor accuracy data to validate
                motion-triggered features and improve device stability
              </li>
              <li>
                Collected and analyzed real-world sensor and firmware
                performance data for Oura Ring wearable devices, supporting
                engineering teams in validating sensor accuracy and ensuring
                reliable firmware updates
              </li>
              <li>
                Performed API integration testing using Postman to validate
                response accuracy, logic, and formatting, increasing defect
                detection and improving backend-frontend consistency
              </li>
              <li>
                Managed defect lifecycle and coordinated cross-team issue
                resolution in Jira within an Agile environment, streamlining
                sprint workflows and accelerating feature delivery
              </li>
              <li>
                Developed Python automation scripts to validate machine learning
                model accuracy, increasing test coverage and reducing manual
                verification effort
              </li>
              <li>
                Validated machine learning model predictions against defined
                criteria and collaborated with engineers to improve model
                quality and ensure production readiness
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                Test Design
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                Manual Testing
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                Postman API Testing
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                Jira / Agile
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
          <h2 className="text-lg font-semibold mb-5">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              <h4 className="font-medium mb-3 text-gray-900">Backend</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  C# / .NET Framework
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  SQL Server
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  RESTful API
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Nest.js
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              <h4 className="font-medium mb-3 text-gray-900">Frontend</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  ASP.NET Web Forms
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  React / Next.js
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              <h4 className="font-medium mb-3 text-gray-900">AI & Engineering</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Prompt Engineering
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Git
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Jira / Agile
                </li>
                <li className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 transition hover:border-indigo-200 hover:bg-indigo-50">
                  Testing & Debugging
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-6">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-lg font-semibold mb-3">Education</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Shih Hsin University
            </p>
            <p className="text-sm text-gray-600">
              B.S. in Information Management (2021 – 2025)
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-lg font-semibold mb-4">Resume</h2>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Download Resume (PDF)
            </Link>
          </section>
        </aside>
      </div>
    </main>
  );
}
