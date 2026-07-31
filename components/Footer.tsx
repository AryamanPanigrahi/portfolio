import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 dark:border-ink-800">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-3 py-8 text-sm text-ink-500 dark:text-ink-400">
        <p>
          &copy; {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-600 dark:hover:text-accent-400">
            GitHub
          </a>
          <a href={siteConfig.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-accent-600 dark:hover:text-accent-400">
            LeetCode
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-600 dark:hover:text-accent-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
