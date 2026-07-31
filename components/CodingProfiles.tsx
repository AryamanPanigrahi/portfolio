import { Github, Code2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="section-shell py-20"
      aria-labelledby="coding-profiles-heading"
    >
      <p className="section-kicker">Coding Profiles</p>
      <h2 id="coding-profiles-heading" className="section-heading mt-2">
        GitHub &amp; LeetCode
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="card group flex items-center justify-between p-6 sm:p-7 transition-colors hover:border-accent-500/60"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-white dark:bg-white dark:text-ink-900">
              <Github size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">@AryamanPanigrahi</p>
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500"
          />
        </a>

        <a
          href={siteConfig.links.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="card group flex items-center justify-between p-6 sm:p-7 transition-colors hover:border-accent-500/60"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500 text-ink-950">
              <Code2 size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink-900 dark:text-white">LeetCode</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400">96+ problems solved</p>
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500"
          />
        </a>
      </div>
    </section>
  );
}
