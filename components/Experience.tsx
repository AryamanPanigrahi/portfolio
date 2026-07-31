import { siteConfig } from "@/config/site";

export function Experience() {
  return (
    <section id="experience" className="section-shell py-20" aria-labelledby="experience-heading">
      <p className="section-kicker">Experience</p>
      <h2 id="experience-heading" className="section-heading mt-2">
        Where I&apos;ve worked
      </h2>

      <div className="mt-10 space-y-8">
        {siteConfig.experience.map((job) => (
          <div key={job.company} className="card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                {job.role} <span className="text-ink-400 dark:text-ink-500">&middot;</span>{" "}
                <span className="text-accent-600 dark:text-accent-400">{job.company}</span>
              </h3>
              <span className="text-sm font-mono text-ink-500 dark:text-ink-400 whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
