import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="section-shell py-20" aria-labelledby="about-heading">
      <p className="section-kicker">About</p>
      <h2 id="about-heading" className="section-heading mt-2">
        Who I am
      </h2>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {siteConfig.about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
              {p}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-mono uppercase tracking-wide text-ink-500 dark:text-ink-400 mb-3">
            Focus Areas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {siteConfig.about.focusAreas.map((area) => (
              <li key={area} className="pill">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
