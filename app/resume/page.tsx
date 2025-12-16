import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 space-y-24">
      {/* ================= Header ================= */}
      <section>
        <h1 className="text-4xl font-bold mb-2">Chih-Chi Chen</h1>
        <p className="text-gray-600 mb-6">
          Software Engineer · Backend / Fullstack
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-indigo-600">
          <a href="mailto:samuel361592@gmail.com" className="hover:underline">
            samuel361592@gmail.com
          </a>
          <span>·</span>
          <a
            href="https://github.com/samuel361592"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/chihchichen"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ================= Summary ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Software Engineer with experience in enterprise CRM development and a
          strong foundation in quality assurance. Previously worked as a QA
          intern in a med-tech environment, gaining hands-on experience in
          testing web, mobile, firmware, and ML-based systems. Currently focused
          on building scalable, maintainable backend systems using C# and modern
          web technologies.
        </p>
      </section>

      {/* ================= Experience ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Experience</h2>

        <div className="space-y-10">
          {/* 鼎新 */}
          <div>
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-semibold">
                Junior Software Engineer — 鼎新數智
              </h3>
              <span className="text-sm text-gray-500">2024 – Present</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
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

          {/* GoMore */}
          <div>
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-semibold">
                QA Intern — GoMore
              </h3>
              <span className="text-sm text-gray-500">2023 – 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
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

      {/* ================= Skills ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-medium mb-2">Backend</h4>
            <ul className="space-y-1 text-gray-700">
              <li>C# / .NET Framework</li>
              <li>SQL Server</li>
              <li>RESTful API Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Frontend</h4>
            <ul className="space-y-1 text-gray-700">
              <li>ASP.NET Web Forms</li>
              <li>Basic React / Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Engineering</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Git</li>
              <li>Jira / Agile Workflow</li>
              <li>Testing & Debugging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Education ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <p className="text-gray-700">
          Shih Hsin University — B.S. in Information Management (2021 – 2025)
        </p>
      </section>

      {/* ================= Download ================= */}
      <section>
        <Link
          href="/resume.pdf"
          className="inline-block px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition"
        >
          Download PDF Resume
        </Link>
      </section>
    </main>
  );
}
