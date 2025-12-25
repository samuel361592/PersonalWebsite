import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pb-16 space-y-14">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Chih-Chi Chen
        </h1>

        <p className="text-gray-500 mb-5">
          Software Engineer · Backend / Fullstack
        </p>

        <div className="flex items-center gap-3 text-indigo-600">
          <a
            href="mailto:samuel361592@gmail.com"
            className="p-2 rounded-md hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/samuel361592"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/chihchichen"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-indigo-50 hover:text-indigo-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Summary</h2>
        <p className="text-gray-700 leading-relaxed max-w-prose">
          Software Engineer specializing in backend and enterprise system
          development, with hands-on experience in C#, ASP.NET, and SQL Server.
          Currently working on large-scale CRM customization projects, focusing
          on maintainability, data integrity, and real-world business workflows.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-lg font-semibold mb-5">Experience</h2>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">
                Junior Software Engineer — 鼎新數智
              </h3>
              <span className="text-sm text-gray-500">
                2024 – Present
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm">
              <li>
                Designed and implemented customized CRM modules using C#, ASP.NET
                Web Forms, and SQL Server
              </li>
              <li>
                Translated client requirements into system logic, workflow rules,
                and UI behavior
              </li>
              <li>
                Took ownership of SD / PR / QC phases in enterprise customization
                projects
              </li>
              <li>
                Performed functional verification and debugging before UAT
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">
                QA Intern — GoMore
              </h3>
              <span className="text-sm text-gray-500">
                2023 – 2024
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm">
              <li>
                Designed and executed test cases for mobile apps, web dashboards,
                and APIs
              </li>
              <li>
                Performed API integration testing using Postman
              </li>
              <li>
                Conducted sensor and firmware testing for wearable and audio
                devices
              </li>
              <li>
                Developed Python scripts to automate ML model validation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-semibold mb-5">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-gray-900">Backend</h4>
            <ul className="space-y-1 text-gray-700">
              <li>C# / .NET Framework</li>
              <li>SQL Server</li>
              <li>RESTful API Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-gray-900">Frontend</h4>
            <ul className="space-y-1 text-gray-700">
              <li>ASP.NET Web Forms</li>
              <li>React / Next.js (Basic)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-gray-900">Engineering</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Git</li>
              <li>Jira / Agile Workflow</li>
              <li>Testing & Debugging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Education</h2>
        <p className="text-gray-700">
          Shih Hsin University — B.S. in Information Management (2021 – 2025)
        </p>
      </section>

      {/* Download */}
      <section>
        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300
                     hover:bg-gray-50 hover:border-gray-400 transition text-sm font-medium"
        >
          Download Resume (PDF)
        </Link>
      </section>
    </main>
  );
}
