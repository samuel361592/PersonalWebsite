import CrmCaseStudyPage from "./CrmCaseStudyPage";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "CRM Agentic AI Architecture Evolution | Samuel Chen",
  "An engineering case study tracing enterprise CRM automation from prompt-based API execution through agent workflows toward reusable AI skills and controlled execution.",
  "/projects/crm-agentic-ai",
);

export default function Page() {
  return <CrmCaseStudyPage />;
}
