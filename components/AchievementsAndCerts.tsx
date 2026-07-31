import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AchievementsAndCerts() {
  return (
    <section
      id="achievements"
      className="section-shell py-20"
      aria-labelledby="achievements-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="section-kicker">Achievements</p>
          <h2 id="achievements-heading" className="section-heading mt-2">
            Milestones
          </h2>
          <ul className="mt-6 space-y-3">
            {siteConfig.achievements.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                <Award size={16} className="mt-0.5 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div id="certifications">
          <p className="section-kicker">Certifications</p>
          <h2 className="section-heading mt-2">Credentials</h2>
          <div className="mt-6 space-y-5">
            {siteConfig.certifications.map((cert) => (
              <div key={cert.name} className="card p-5">
                <div className="flex items-start gap-3">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-mono text-ink-500 dark:text-ink-400 mt-0.5">
                      {cert.status}
                    </p>
                  </div>
                </div>
                <ul className="mt-3 ml-8 space-y-1.5">
                  {cert.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400"
                      >
                        {item.title}
                        <ExternalLink size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
