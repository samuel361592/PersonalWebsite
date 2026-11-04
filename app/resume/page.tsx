import ResumePage from "./ResumePage";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata(
  "About & Resume | Samuel Chen",
  "Learn about Samuel Chen, an AI Engineer working with LLM applications, RAG, AI agents, and backend integration. View work experience, skills, and download the resume.",
  "/resume",
);

export default function Page() {
  return <ResumePage />;
}
