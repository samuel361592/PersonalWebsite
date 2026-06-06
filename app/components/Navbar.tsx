"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { type Language, useLanguage } from "../lib/language";

const navLabels = {
  en: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "About" },
  ],
  zh: [
    { href: "/", label: "首頁" },
    { href: "/projects", label: "專案" },
    { href: "/resume", label: "關於我" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const nav = navLabels[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-border/70",
        "bg-background/75 backdrop-blur-xl",
        "transition-shadow duration-300",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Samuel<span className="text-accent">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 text-sm">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group px-3 py-2 rounded-md",
                  "transition-colors duration-200",
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground",
                ].join(" ")}
              >
                {/* text wrapper */}
                <span className="relative inline-block">
                  {item.label}

                  {/* Hover underline (text width) */}
                  <span
                    className={[
                      "pointer-events-none absolute left-0 right-0 -bottom-[4px] h-[2px] rounded-full",
                      "bg-accent/60",
                      "origin-left scale-x-0 opacity-0",
                      "transition-transform transition-opacity duration-200",
                      "group-hover:scale-x-100 group-hover:opacity-100",
                    ].join(" ")}
                  />

                  {/* Active underline (text width) */}
                  <span
                    className={[
                      "pointer-events-none absolute left-0 right-0 -bottom-[4px] h-[2px] rounded-full",
                      "bg-accent",
                      "transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </span>
              </Link>
            );
          })}
          <div
            className="ml-2 inline-flex rounded-md border border-border bg-card-muted p-0.5"
            aria-label="Language"
            role="group"
          >
            {[
              { value: "en", label: "EN" },
              { value: "zh", label: "中文" },
            ].map((option) => {
              const isActive = language === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLanguage(option.value as Language)}
                  aria-pressed={isActive}
                  className={[
                    "rounded px-2.5 py-1.5 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-card text-accent shadow-sm"
                      : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
