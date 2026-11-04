import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", "/resume", "/projects/crm-agentic-ai"].map(
    (path) => ({ url: new URL(path, siteUrl).toString() }),
  );
}
