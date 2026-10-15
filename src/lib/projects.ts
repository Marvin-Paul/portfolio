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

// Curated from public repositories at https://github.com/Marvin-Paul on 2026-10-15.
// Keep descriptions grounded in source files; omit empty and documentation-only repos.
export const projects: Project[] = [
  {
    slug: "rakentaa-real-estate",
    title: "Rakentaa Real Estate",
    description:
      "Responsive corporate website with a React frontend and Node.js content management backend. The CMS supports authenticated editing, saved drafts, previews and publishing; appointment forms prepare a WhatsApp enquiry for visitors to send.",
    category: "Real Estate / CMS",
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "Node.js"],
    year: "2026",
    featured: true,
    repo: "rakentaa-real-estate",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/rakentaa-real-estate" }],
  },
  {
    slug: "rolkat-financial-services",
    title: "Rolkat Financial Services",
    description:
      "Financial services and property website with a custom WordPress theme, a Node.js preview server and an admin CMS. Includes editable services, property listings, team profiles and contact enquiries.",
    category: "Business / CMS",
    tags: ["WordPress", "PHP", "JavaScript", "Node.js", "CSS"],
    year: "2026",
    featured: true,
    repo: "rolkat-website",
    image: "/images/rolkat.png",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/rolkat-website" }],
  },
  {
    slug: "wabz-foods",
    title: "Wabz Foods",
    description:
      "Full-stack food ordering and delivery platform with a merchant admin panel, Supabase-backed auth and data, and a Next.js client. Built to move an entire ordering flow from menu browsing to checkout.",
    category: "Food & Beverage",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "SQL", "PL/pgSQL"],
    year: "2026",
    featured: true,
    repo: "wabzfoods",
    image: "/images/wabz-foods.png",
    links: [
      { label: "Live site", href: "https://wabzfoods.vercel.app" },
      { label: "GitHub", href: "https://github.com/Marvin-Paul/wabzfoods" },
    ],
  },
  {
    slug: "hysys-global-solutions",
    title: "HYSYS Global Solutions",
    description:
      "Company website for HYSYS Global Solutions — built during my internship there. Delivered as a TypeScript monorepo with full PRD, BRD, design, site-map, SEO and analytics documentation.",
    category: "Company Website",
    tags: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "SQL", "PL/pgSQL"],
    year: "2026",
    featured: true,
    repo: "hysys",
    image: "/images/hysys.png",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/hysys" }],
  },
  {
    slug: "campus-mindspace",
    title: "Campus Mindspace",
    description:
      "Student community project with a React application, Supabase integration and Tailwind CSS styling. The repository also preserves the original HTML/CSS prototype.",
    category: "EdTech",
    tags: ["React", "JavaScript", "Vite", "Supabase", "Tailwind CSS"],
    year: "2026",
    repo: "campus-Mindspace",
    image: "/images/campus-mind.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/campus-Mindspace" }],
  },
  {
    slug: "connect-plus",
    title: "Connect+",
    description:
      "Professional networking platform scaffold with profiles, a jobs section, messaging and API routes. Built with Next.js, Prisma and PostgreSQL, with Supabase integration, TanStack Query and automated Vitest and Playwright checks.",
    category: "Networking",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "TanStack Query"],
    year: "2026",
    repo: "ConnectPlus",
    image: "/images/connect+.jpg",
    links: [
      { label: "Live site", href: "https://connect-plus-bay.vercel.app" },
      { label: "GitHub", href: "https://github.com/Marvin-Paul/ConnectPlus" },
    ],
  },
  {
    slug: "csharp-variables",
    title: "C# Fundamentals",
    description:
      "C# console exercises targeting .NET 10, covering variables, console input, conditionals, loops, arrays and methods. A learning repository that includes a name-guessing game example and menu-selection practice.",
    category: "Education",
    tags: ["C#", ".NET"],
    year: "2026",
    repo: "Variables",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/Variables" }],
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
    body: "Flutter applications connected to AI services, including maize disease diagnostics with Gemini vision.",
    tags: ["Flutter", "Dart", "Gemini AI", "SQLite"],
  },
  {
    title: "Product Thinking",
    body: "Documentation-first delivery. I write the PRDs, the designs and the specs so what gets built is what was agreed.",
    tags: ["Design Systems", "SEO", "Docs", "Analytics"],
  },
];
