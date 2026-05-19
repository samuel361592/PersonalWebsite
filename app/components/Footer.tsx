"use client";

import { useLanguage } from "../lib/language";

const footerText = {
  en: {
    built: "Built with Next.js",
  },
  zh: {
    built: "使用 Next.js 建置",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const text = footerText[language];

  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Samuel</span>
        <span>{text.built}</span>
      </div>
    </footer>
  );
}
