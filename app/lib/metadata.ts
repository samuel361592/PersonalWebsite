import type { Metadata } from "next";

export const siteUrl = "https://samuel-chen.com";
export const siteName = "Samuel Chen";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteUrl).toString();
  const image = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Samuel Chen — AI Engineer. LLM Applications, RAG, AI Agents, and Backend Integration.",
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
