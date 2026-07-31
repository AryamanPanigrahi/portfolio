import { siteConfig } from "@/config/site";

export function Skills() {
  const categories = Object.entries(siteConfig.skills);

  return (
    <section id="skills" className="section-shell py-20" aria-labelledby="skills-heading">
      <p className="section-kicker">Technical Skills</p>
      <h2 id="skills-heading" className="section-heading mt-2">
        What I work with
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(([category, items]) => (
          <div key={category} className="card p-6">
            <h3 className="text-sm font-mono uppercase tracking-wide text-accent-600 dark:text-accent-400">
              {category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="pill">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
