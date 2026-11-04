import ProjectsPage from "./ProjectsPage";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata(
  "Projects & Case Studies | Samuel Chen",
  "Explore Samuel Chen's AI and software projects, including a local RAG assistant, enterprise AI agent architecture, backend services, and public repositories.",
  "/projects",
);

export default function Page() {
  return <ProjectsPage />;
}
