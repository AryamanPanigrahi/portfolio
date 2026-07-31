"use client";

import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 dark:border-ink-800/70 bg-white/80 dark:bg-ink-950/80 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-ink-900 dark:text-ink-50"
        >
          Aryaman<span className="text-accent-500">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 dark:text-ink-300 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2 !px-4 text-xs">
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950 px-6 py-4 flex flex-col gap-4"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-700 dark:text-ink-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            <FileDown size={16} />
            View Resume
          </a>
        </nav>
      )}
    </header>
  );
}
