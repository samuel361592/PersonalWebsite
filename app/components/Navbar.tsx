"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/70 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-gray-900
                     hover:text-indigo-600 transition-colors"
        >
          Samuel<span className="text-indigo-600">.</span>
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
                  "relative px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "text-indigo-700"
                    : "text-gray-600 hover:text-gray-900",
                ].join(" ")}
              >
                {item.label}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-2 right-2 -bottom-[6px] h-[2px] rounded-full bg-indigo-600" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
