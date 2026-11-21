export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  year: string;
  featured?: boolean;
  private?: boolean;
  repo: string;
  image?: string;
  /** Hugging Face Space mirroring this project, if one is published. */
  hf?: string;
  /** False when the mirrored Space is private and returns 404 to visitors. */
  hfPublic?: boolean;
  links: { label: string; href: string }[];
};

// Mirrored GitHub repositories published as Hugging Face Spaces under
// https://huggingface.co/Marvin256. Private GitHub repos map to private Spaces,
// so those links are only shown to the owner.
export const hfSpaces: Record<string, string> = {
  "wabzfoods": "wabz-foods",
  hysys: "hysys-global-solutions",
  ConnectPlus: "connect-plus",
  "campus-Mindspace": "campus-mindspace",
  "MAVIN-JAVASCRIPT-COURSE": "mavin-javascript-course",
  maize2026: "maizeguard-ai",
  "rakentaa-real-estate": "rakentaa-real-estate",
  "rolkat-website": "rolkat-financial-services",
  "safe-space-community-center": "safe-space-community-center",
  Variables: "csharp-fundamentals",
  portfolio: "portfolio",
  POS: "emotions-store-pos",
  "jbk-invoicing": "jbk-invoicing",
  "house-of-gina-storefront": "house-of-gina",
  "developer-bootstrap": "developer-bootstrap",
  "enterprise-api-bootstrap": "enterprise-api-bootstrap",
};

// Curated from public and private repositories at https://github.com/Marvin-Paul
// on 2026-11-16. Keep descriptions grounded in source files; omit empty and
// documentation-only repos. Private repos show a description and stack, never a repo link.
export const projects: Project[] = [
  {
    slug: "house-of-gina",
    title: "House of Gina",
    description:
      "Editorial luxury storefront for a Kampala fashion house, cut in a quiet monochrome with Cormorant Garamond display type. A seasonless catalogue with search, category and price filters, product variants and a live bag drawer, plus a Ugandan checkout: UGX pricing, 18% VAT, district delivery rates, mobile money and card payments with validation and decline paths.",
    category: "Fashion / E-commerce",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Router"],
    year: "2026",
    featured: true,
    private: true,
    repo: "house-of-gina-storefront",
    hf: "house-of-gina",
    hfPublic: false,
    image: "/images/house-of-gina.jpg",
    links: [{ label: "Live site", href: "https://house-of-gina-storefront.vercel.app" }],
  },
  {
    slug: "jbk-invoicing",
    title: "JBK Invoicing",
    description:
      "Offline-first invoicing and stock app built for JBK Machinery & Accessories with .NET MAUI and MVVM. Manages customers, products, invoices and payments in a local SQLite database, shows revenue, outstanding balances and low-stock alerts on a dashboard, then generates branded PDF invoices and emails them via SMTP — built to keep working with no connection, priced in UGX.",
    category: "Business / Mobile",
    tags: ["C#", ".NET", "MAUI", "SQLite", "MVVM", "MailKit"],
    year: "2026",
    featured: true,
    private: true,
    repo: "jbk-invoicing",
    hf: "jbk-invoicing",
    hfPublic: false,
    links: [{ label: "Request a walkthrough", href: "/contact" }],
  },
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
    hf: "rakentaa-real-estate",
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
    hf: "rolkat-financial-services",
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
    hf: "wabz-foods",
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
    hf: "hysys-global-solutions",
    image: "/images/hysys.png",
    links: [{ label: "GitHub", href: "https://github.com/Marvin-Paul/hysys" }],
  },
  {
    slug: "emotions-store-pos",
    title: "Emotions Store POS",
    description:
      "Offline-first point-of-sale terminal with a Tauri v2 and Rust shell around React 19. Staff ring up sales, take mobile-money or card payment, process refunds and credit deposits, close shifts and email receipts, while an SQLite queue keeps trading through network drops and syncs once back online. Supabase handles auth, Postgres and realtime; reporting exports to PDF and Windows builds ship through an installer workflow.",
    category: "Retail / Desktop",
    tags: ["Tauri", "Rust", "React", "TypeScript", "Supabase", "PostgreSQL", "Zustand", "TanStack Query", "SQLite", "Vitest"],
    year: "2026",
    private: true,
    repo: "POS",
    hf: "emotions-store-pos",
    hfPublic: false,
    links: [{ label: "Live demo", href: "https://demo-pos-iota.vercel.app" }],
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
    hf: "campus-mindspace",
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
    hf: "connect-plus",
    image: "/images/connect+.jpg",
    links: [
      { label: "Live site", href: "https://connect-plus-bay.vercel.app" },
      { label: "GitHub", href: "https://github.com/Marvin-Paul/ConnectPlus" },
    ],
  },
  {
    slug: "maizeguard-ai",
    title: "MaizeGuard AI",
    description:
      "Standalone Flutter app that diagnoses maize leaf disease from a photo using Gemini 1.5 Flash vision, then continues the conversation in an in-app assistant. Scans and chat history stay on the device in SQLite, so the app works without a backend, behind a provider-based state layer and a glassmorphic interface.",
    category: "AI / AgriTech",
    tags: ["Flutter", "Dart", "Gemini AI", "SQLite", "Provider"],
    year: "2026",
    private: true,
    repo: "maize2026",
    hf: "maizeguard-ai",
    image: "/images/maizeguard.jpg",
    links: [],
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
    hf: "csharp-fundamentals",
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
    hf: "mavin-javascript-course",
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
