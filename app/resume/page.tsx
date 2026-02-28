import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pb-16 space-y-14">
      {/* Header */}
      <section className="animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          Chih-Chi Chen
        </h1>

        <p className="text-gray-500 mb-5">
          Software Engineer · Backend / Fullstack
        </p>

        <div className="flex items-center gap-3 text-indigo-600">
          <a
            href="mailto:samuel361592@gmail.com"
            className="
              p-2 rounded-md
              hover:bg-indigo-50 hover:text-indigo-800
              transition
              hover:-translate-y-0.5 hover:scale-105
            "
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/samuel361592"
            target="_blank"
            rel="noreferrer"
            className="
              p-2 rounded-md
              hover:bg-indigo-50 hover:text-indigo-800
              transition
              hover:-translate-y-0.5 hover:scale-105
            "
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/chihchichen"
            target="_blank"
            rel="noreferrer"
            className="
              p-2 rounded-md
              hover:bg-indigo-50 hover:text-indigo-800
              transition
              hover:-translate-y-0.5 hover:scale-105
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="animate-fade-up">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>

        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-5 py-4 shadow-sm">
          <p className="text-gray-800 leading-relaxed">
            Software Engineer specializing in AI agent systems and enterprise
            automation, with hands-on experience building modular,
            production-grade agents and backend integrations.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Strong in prompt engineering, RESTful API design, and enterprise
            development with C#, .NET Framework, ASP.NET, and SQL Server,
            focusing on maintainability, workflow integrity, and business logic
            consistency.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
              AI Agent Systems
            </span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
              Prompt Engineering
            </span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
              RESTful API Design
            </span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
              Enterprise CRM
            </span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="animate-fade-up">
        <h2 className="text-lg font-semibold mb-5">Experience</h2>

        <div className="space-y-6">
          {/* 鼎新數智 - AI Agent Systems */}
          <div
            className="
              rounded-xl
              border border-gray-200
              bg-white
              shadow-sm
              transition
              px-5 py-4
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <div className="flex justify-between flex-wrap gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">
                  Junior Software Engineer | AI Agent Systems & Enterprise
                  Automation
                </h3>
                <p className="text-sm text-gray-500 mt-1">鼎新數智股份有限公司</p>
              </div>
              <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full h-fit">
                Feb 2026 – Present
              </span>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>
                Built a chat-like AI interface for the CRM maintenance module,
                enabling users to create and
                manage repair orders through natural language input
              </li>
              <li>
                Developed modular, function-specific AI agents for maintenance
                workflows (e.g., repair order
                creation, status query, customer validation), enabling structured
                task execution through agent
                orchestration
              </li>
              <li>
                Authored and optimized production-grade prompts to ensure
                deterministic agent behavior and
                strict adherence to CRM maintenance business rules
              </li>
              <li>
                Refactored legacy maintenance module logic into agent-invocable
                backend services while
                preserving workflow integrity and data consistency
              </li>
              <li>
                Designed and implemented RESTful APIs to expose
                maintenance-related backend operations
                for AI agent orchestration, documented using OpenAPI (Swagger)
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
                Prompt Engineering
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
                RESTful API Design
              </span>
            </div>
          </div>

          {/* 鼎新數智 - CRM Customization */}
          <div
            className="
              rounded-xl
              border border-gray-200
              bg-white
              shadow-sm
              transition
              px-5 py-4
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <div className="flex justify-between flex-wrap gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">
                  Junior Software Engineer | Enterprise CRM Customization
                </h3>
                <p className="text-sm text-gray-500 mt-1">鼎新數智股份有限公司</p>
              </div>
              <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full h-fit">
                Sep 2025 – Feb 2026
              </span>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>
                Took ownership of System Design, Program Implementation, and
                Quality Control responsibilities for enterprise CRM customization
                projects, translating end-to-end client requirements into system
                logic design, feature implementation, and functional
                verification
              </li>
              <li>
                Developed customized modules, UI components, and backend logic
                using C#, .NET Framework,
                ASP.NET Web Forms, and SQL Server
              </li>
              <li>
                Proactively reviewed and updated onboarding and development
                documentation by correcting
                outdated content and adding practical, up-to-date implementation
                details, improving alignment
                with current systems and development workflows
              </li>
              <li>
                Mentored and onboarded a new team member through hands-on
                guidance on internal
                development tools, workflows, and system architecture, reducing
                ramp-up time by ~40% and
                enabling independent contribution
              </li>
              <li>
                Conducted functional testing and debugging to ensure customized
                features met requirements
                prior to handoff for UAT with consultants and clients
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                C#
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                .NET Framework
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                ASP.NET Web Forms
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                SQL Server
              </span>
            </div>
          </div>

          {/* GoMore */}
          <div
            className="
              rounded-xl
              border border-gray-200
              bg-white
              shadow-sm
              transition
              px-5 py-4
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <div className="flex justify-between flex-wrap gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">
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
                web-based management
                dashboard by designing test cases, reporting issues, and
                validating fixes, ensuring high-quality
                releases
              </li>
              <li>
                Performed functional and exploratory testing for the MegoLuki
                mobile app, verifying core user
                flows, UI/UX behavior, and feature stability across different
                scenarios, and collaborating with the
                team to identify and report defects
              </li>
              <li>
                Performed structured motion testing (nodding, shaking) for Cleer
                wireless headphones under
                exercise and public transportation scenarios, collecting sensor
                accuracy data to validate
                motion-triggered features and improve device stability
              </li>
              <li>
                Collected and analyzed real-world sensor and firmware
                performance data for Oura Ring
                wearable devices, supporting engineering teams in validating
                sensor accuracy and ensuring
                reliable firmware updates
              </li>
              <li>
                Performed API integration testing using Postman to validate
                response accuracy, logic, and
                formatting, increasing defect detection and improving backend-frontend consistency
              </li>
              <li>
                Managed defect lifecycle and coordinated cross-team issue
                resolution in Jira within an Agile
                environment, streamlining sprint workflows and accelerating feature delivery
              </li>
              <li>
                Developed Python automation scripts to validate machine learning
                model accuracy, increasing
                test coverage and reducing manual verification effort
              </li>
              <li>
                Validated machine learning model predictions against defined
                criteria and collaborated with
                engineers to improve model quality and ensure production readiness
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                Test Design
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                Manual Testing
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                Postman API Testing
              </span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                Jira / Agile
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="animate-fade-up">
        <h2 className="text-lg font-semibold mb-5">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Backend</h4>
            <ul className="flex flex-wrap gap-2">
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                C# / .NET Framework
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                SQL Server
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                RESTful API
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Nest.js
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-gray-900">Frontend</h4>
            <ul className="flex flex-wrap gap-2">
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                ASP.NET Web Forms
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                React / Next.js
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Tailwind CSS
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-gray-900">AI & Engineering</h4>
            <ul className="flex flex-wrap gap-2">
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Prompt Engineering
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Git
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Jira / Agile
              </li>
              <li className="px-3 py-1 text-xs rounded-full bg-gray-100">
                Testing & Debugging
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-up">
        <h2 className="text-lg font-semibold mb-3">Education</h2>
        <p className="text-gray-700">
          Shih Hsin University — B.S. in Information Management (2021 – 2025)
        </p>
      </section>

      {/* Download */}
      <section className="animate-fade-up">
        <Link
          href="/resume.pdf"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-md
            bg-indigo-600 text-white
            hover:bg-indigo-700
            transition
            text-sm font-medium
            shadow-sm hover:shadow-md
          "
        >
          Download Resume (PDF)
        </Link>
      </section>
    </main>
  );
}
