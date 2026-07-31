import { ArrowRight, FileText, Github, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-shell flex min-h-[85vh] flex-col justify-center py-20"
      aria-label="Introduction"
    >
      <p className="section-kicker fade-up">Software Engineering &middot; AI &middot; Cybersecurity</p>

      <h1
        className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-white fade-up"
        style={{ animationDelay: "80ms" }}
      >
        {siteConfig.name}
      </h1>

      <p
        className="mt-3 text-lg sm:text-xl font-medium text-ink-600 dark:text-ink-300 fade-up"
        style={{ animationDelay: "140ms" }}
      >
        B.Tech CSE (Cybersecurity), VIT Vellore &middot; Class of 2028
      </p>

      <p
        className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-300 fade-up"
        style={{ animationDelay: "200ms" }}
      >
        {siteConfig.tagline}
      </p>

      <div
        className="mt-9 flex flex-wrap items-center gap-3 fade-up"
        style={{ animationDelay: "260ms" }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
          <ArrowRight size={16} />
        </a>
        <a
          href={siteConfig.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <FileText size={16} />
          Resume
        </a>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Github size={16} />
          GitHub
        </a>
        <a href="#contact" className="btn-secondary">
          <Mail size={16} />
          Contact
        </a>
      </div>
    </section>
  );
}
