import { Mail, Phone, MapPin, Github, Code2, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  const items = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Location",
      value: siteConfig.location,
      href: null,
      icon: MapPin,
    },
    {
      label: "GitHub",
      value: "AryamanPanigrahi",
      href: siteConfig.links.github,
      icon: Github,
    },
    {
      label: "LeetCode",
      value: "Aryaman_11",
      href: siteConfig.links.leetcode,
      icon: Code2,
    },
    ...(siteConfig.links.linkedin
      ? [
          {
            label: "LinkedIn",
            value: "LinkedIn Profile",
            href: siteConfig.links.linkedin,
            icon: Linkedin,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="section-shell py-20" aria-labelledby="contact-heading">
      <p className="section-kicker">Contact</p>
      <h2 id="contact-heading" className="section-heading mt-2">
        Let&apos;s talk
      </h2>
      <p className="mt-4 max-w-xl text-base text-ink-600 dark:text-ink-300">
        Open to Software Engineering, AI/ML, Backend Development, and Cybersecurity
        internships. Reach out directly — I respond to email fastest.
      </p>

      <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <div className="card flex items-center gap-4 p-5 h-full transition-colors hover:border-accent-500/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <dt className="text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {label}
                </dt>
                <dd className="text-sm font-medium text-ink-900 dark:text-white truncate">
                  {value}
                </dd>
              </div>
            </div>
          );

          return (
            <div key={label}>
              {href ? (
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
