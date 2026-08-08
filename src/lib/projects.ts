export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  year: string;
  featured?: boolean;
  repo: string;
  image?: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "wabz-foods",
    title: "Wabz Foods",
    description:
      "Full-stack food ordering and delivery platform with a merchant admin panel, Supabase-backed auth and data, and a Next.js client. Built to move an entire ordering flow from menu browsing to checkout.",
    category: "Food & Beverage",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    year: "2026",
    featured: true,
    repo: "wabzfoods",
    image: "/images/wabz-foods.png",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/wabzfoods" }],
  },
  {
    slug: "maizeguard",
    title: "MaizeGuard",
    description:
      "AI-powered maize disease diagnostic built with Flutter. On-device Gemini 1.5 Flash vision identifies leaf diseases instantly, a local SQLite engine stores every scan, and a glassmorphic UI keeps the experience polished.",
    category: "AI / AgriTech",
    tags: ["Flutter", "Dart", "Gemini AI", "SQLite"],
    year: "2026",
    featured: true,
    repo: "maize2026",
    image: "/images/maizeguard.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/maize2026" }],
  },
  {
    slug: "hysys-global-solutions",
    title: "HYSYS Global Solutions",
    description:
      "Product website for HYSYS Global Solutions delivered as a TypeScript monorepo. Shipped with full PRD, BRD, design, site-map, SEO and analytics documentation to keep engineering and product aligned.",
    category: "SaaS",
    tags: ["Next.js", "TypeScript", "Supabase", "Design Systems"],
    year: "2026",
    repo: "hysys",
    image: "/images/hysys.png",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/hysys" }],
  },
  {
    slug: "connect-plus",
    title: "Connect+",
    description:
      "Professional networking platform scaffold on the Next.js App Router with Prisma and PostgreSQL. Includes GitLab SSO, CI/CD pipelines, profile sync and an API health layer.",
    category: "Networking",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Supabase"],
    year: "2026",
    repo: "ConnectPlus",
    image: "/images/connect+.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/ConnectPlus" }],
  },
  {
    slug: "connect-plus-jobs",
    title: "Connect Plus Jobs",
    description:
      "Job advertising platform that connects employers with job seekers through structured listings, applications and a focused advertising flow.",
    category: "Jobs",
    tags: ["Web", "Platform", "UI"],
    year: "2026",
    repo: "connect-Plus",
    image: "/images/connect+jobs.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/connect-Plus" }],
  },
  {
    slug: "campus-mindspace",
    title: "Campus Mindspace",
    description:
      "Prototype student community platform for campus mind space — a place to share ideas, projects and conversations across campus.",
    category: "EdTech",
    tags: ["HTML", "CSS", "Prototype"],
    year: "2025",
    repo: "campus-Mindspace",
    image: "/images/campus-mind.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/campus-Mindspace" }],
  },
  {
    slug: "javascript-emotions-store",
    title: "JavaScript Emotions Store",
    description:
      "A complete vanilla JavaScript e-commerce front end — product grid, shopping cart, checkout, orders and delivery tracking — built end-to-end as a learning project with a small backend.",
    category: "E-Commerce",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    year: "2025",
    repo: "javascript-emotions-project",
    image: "/images/emotions.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/javascript-emotions-project" }],
  },
  {
    slug: "mavin-javascript-course",
    title: "Mavin JavaScript Course",
    description:
      "Hands-on JavaScript course repo: rock-paper-scissors games, a todo list, cart design and DOM projects built while working through core JS fundamentals.",
    category: "Education",
    tags: ["JavaScript", "HTML", "CSS", "Games"],
    year: "2025",
    repo: "MAVIN-JAVASCRIPT-COURSE",
    image: "/images/mavin-course.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/MAVIN-JAVASCRIPT-COURSE" }],
  },
];

export const capabilities = [
  {
    title: "Full-Stack Web",
    body: "End-to-end products on Next.js and React with Supabase, Prisma and PostgreSQL behind clean, typed APIs.",
    tags: ["Next.js", "React", "Supabase", "PostgreSQL"],
  },
  {
    title: "Mobile & AI",
    body: "Flutter applications wired to on-device and cloud AI — from Gemini vision diagnostics to intelligent assistants.",
    tags: ["Flutter", "Dart", "Gemini AI", "SQLite"],
  },
  {
    title: "Product Thinking",
    body: "Documentation-first delivery. I write the PRDs, the designs and the specs so what gets built is what was agreed.",
    tags: ["Design Systems", "SEO", "Docs", "Analytics"],
  },
];
