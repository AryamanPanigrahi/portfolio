// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
// Edit this file to update anything on the site — no component changes needed.
// ============================================================================

export const siteConfig = {
  name: "Aryaman Panigrahi",
  title: "Software Engineer",
  tagline:
    "CS undergrad specializing in Cybersecurity, building backend systems, AI evaluation tooling, and applied software projects in Python and React.",
  shortIntro:
    "Computer Science undergraduate at VIT Vellore focused on backend development, AI/LLM evaluation, and applied cybersecurity.",

  // SEO — generic, software-development-role oriented
  seo: {
    title: "Aryaman Panigrahi | Software Engineer",
    description:
      "Portfolio of Aryaman Panigrahi — Computer Science (Cybersecurity) undergraduate at VIT Vellore. Software engineering, backend development, AI/LLM evaluation, and Python/React projects. Open to Software Engineering, AI/ML, Backend, and Cybersecurity internships.",
    keywords: [
      "Aryaman Panigrahi",
      "Software Engineer",
      "Software Engineering Intern",
      "Backend Developer",
      "Python Developer",
      "VIT Vellore",
      "Cybersecurity",
      "AI ML Intern",
    ],
  },

  // Placeholder deploy URL — replace with your custom domain when ready.
  // This single value drives canonical URL, OG tags, and sitemap.
  siteUrl: "https://aryaman-panigrahi.vercel.app",

  location: "Vellore, Tamil Nadu, India",
  email: "aryaman.panigrahi2024@vitstudent.ac.in",
  phone: "+91 8618410301",

  links: {
    github: "https://github.com/AryamanPanigrahi",
    leetcode: "https://leetcode.com/u/Aryaman_11/",
    // linkedin intentionally omitted — add here (e.g. "https://linkedin.com/in/...")
    // and it will automatically appear in Contact + footer once set.
    linkedin: "",
  },

  // Resume: change ONLY this path to switch resume files. Every button
  // (Hero, Resume section, Nav) reads from this single constant.
  resumePath: "/resume.pdf",

  about: {
    paragraphs: [
      "I'm a Computer Science undergraduate at VIT Vellore, specializing in Cybersecurity, with a strong interest in backend development and applied AI. I like building systems end-to-end — from signal-processing pipelines in Python to deployed front-end applications in React.",
      "Most recently, I worked on LLM safety evaluation during a cybersecurity-focused internship, designing adversarial test scenarios and helping validate AI guardrails. That experience shaped how I think about building software: correctness, edge cases, and security aren't an afterthought — they're part of the design.",
      "Outside of coursework, I solve algorithmic problems on LeetCode, explore quantum computing fundamentals with Qiskit, and contribute to my university's Mozilla Firefox Club as a senior core member.",
    ],
    focusAreas: [
      "Software Engineering",
      "Backend Development",
      "Python & C++",
      "AI / LLM Evaluation",
      "Applied Cybersecurity",
      "Problem Solving",
    ],
  },

  experience: [
    {
      company: "Tech Mahindra",
      role: "Cybersecurity & Quantum Computing Intern",
      period: "Summer 2026 · 8 Weeks",
      points: [
        "Designed and executed 100+ adversarial test scenarios against Large Language Models — including multi-step prompt injection, authority spoofing, and poisoned reference attacks — to evaluate model safety and robustness.",
        "Proposed 5 additional adversarial scenarios that were incorporated into the evaluation suite, extending guardrail test coverage.",
        "Assisted in implementing and validating AI guardrails, contributing to a more resilient LLM safety-testing workflow.",
        "Built basic quantum circuits in Qiskit as part of an internal assignment, applying quantum gates, superposition, and entanglement concepts using Python.",
      ],
    },
  ],

  projects: [
    {
      name: "Acoustic Source Localization & Classification",
      summary:
        "A Python simulation that estimates the direction of a sound source using multi-microphone time-difference analysis.",
      description:
        "Built a 5-microphone array simulation to estimate sound source direction using Time Difference of Arrival (TDOA) algorithms, achieving 5–10% localization error in simulated testing. Engineered a modular pipeline — signal generation, TDOA localization, and sound classification — with a visualization layer for direction-of-arrival results.",
      tech: ["Python", "Signal Processing", "TDOA", "NumPy"],
      highlights: [
        "5-microphone array simulation",
        "TDOA-based direction estimation, 5–10% error (simulated)",
        "Modular signal generation → processing → classification pipeline",
      ],
      github: "https://github.com/AryamanPanigrahi/Acoutsic-Source-Localisation",
      demo: null,
    },
    {
      name: "Disaster Alert Dashboard",
      summary:
        "A responsive React dashboard for surfacing disaster alerts and safety information.",
      description:
        "Designed and deployed a responsive front-end dashboard in React to display disaster alerts and safety information, with a focus on clean component structure and readable UI/UX.",
      tech: ["React"],
      highlights: [
        "Responsive layout, component-driven structure",
        "Deployed and publicly accessible",
      ],
      github: "https://github.com/AryamanPanigrahi",
      demo: "https://disaster-alert-dashboard-xi.vercel.app/",
    },
  ],

  skills: {
    Languages: ["Python", "C++", "C", "Java"],
    Frameworks: ["React", "Qiskit"],
    "Developer Tools": ["Git", "GitHub", "VS Code"],
    Cybersecurity: [
      "Adversarial Prompt Testing",
      "LLM Guardrail Validation",
      "Security Risk Management",
      "AI Safety Evaluation",
    ],
    "AI / ML": [
      "LLM Evaluation",
      "Adversarial Prompt Engineering",
      "Quantum Computing Fundamentals (Qiskit)",
    ],
    Concepts: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Signal Processing",
      "Problem Solving",
    ],
  },

  education: [
    {
      school: "VIT University, Vellore",
      degree: "B.Tech, Computer Science Engineering (Cybersecurity)",
      period: "2024 – 2028",
      detail: "CGPA: 8.85",
    },
  ],

  achievements: [
    "Scored in the 91st percentile in JEE Mains",
    "Solved 96+ problems on LeetCode",
    "Proposed 5 new adversarial test scenarios adopted into Tech Mahindra's LLM evaluation suite",
  ],

  certifications: [
    {
      name: "Google Cybersecurity Professional Certificate",
      status: "2 of 9 courses completed",
      items: [
        {
          title: "Foundations of Cybersecurity",
          url: "https://coursera.org/share/60d59e8e3d99ab9cab73705c068b5674",
        },
        {
          title: "Play It Safe: Manage Security Risks",
          url: "https://coursera.org/share/3de061ff68b66c943d20a70b056c20b3",
        },
      ],
    },
  ],

  extraCurricular: [
    {
      org: "Mozilla Firefox Club, VIT",
      role: "Senior Core Member",
      detail: "Active member contributing to club initiatives and technical community engagement.",
    },
  ],

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
