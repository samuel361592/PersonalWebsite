import HomePage from "./HomePage";
import { createPageMetadata } from "./lib/metadata";

export const metadata = createPageMetadata(
  "Samuel Chen | AI Engineer",
  "AI Engineer focused on LLM applications, RAG, AI agents, and backend systems integration. Explore Samuel Chen's projects, experience, and engineering case studies.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
