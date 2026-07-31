import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Education() {
  return (
    <section id="education" className="section-shell py-20" aria-labelledby="education-heading">
      <p className="section-kicker">Education</p>
      <h2 id="education-heading" className="section-heading mt-2">
        Academic background
      </h2>

      <div className="mt-8 space-y-4">
        {siteConfig.education.map((edu) => (
          <div key={edu.school} className="card flex items-start gap-4 p-6 sm:p-7">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                {edu.school}
              </h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{edu.degree}</p>
              <p className="mt-1 text-sm font-mono text-ink-500 dark:text-ink-400">
                {edu.period} &middot; {edu.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
