import { ExternalLink, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-20" aria-labelledby="projects-heading">
      <p className="section-kicker">Projects</p>
      <h2 id="projects-heading" className="section-heading mt-2">
        Things I&apos;ve built
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.projects.map((project) => (
          <article
            key={project.name}
            className="card flex flex-col p-6 sm:p-7 transition-transform hover:-translate-y-1 hover:border-accent-500/60"
          >
            <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {project.summary}
            </p>

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-ink-600 dark:text-ink-300"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 pt-5 border-t border-ink-200 dark:border-ink-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <Github size={15} />
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
