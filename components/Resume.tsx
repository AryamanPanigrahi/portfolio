import { FileText, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Resume() {
  return (
    <section id="resume" className="section-shell py-20" aria-labelledby="resume-heading">
      <p className="section-kicker">Resume</p>
      <h2 id="resume-heading" className="section-heading mt-2">
        Full details, one document
      </h2>

      <div className="mt-8 card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink-900 dark:text-white">
              {siteConfig.name} — Resume
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              Experience, projects, skills, and education in one PDF.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FileText size={16} />
            View Resume
          </a>
          <a href={siteConfig.resumePath} download className="btn-primary">
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
