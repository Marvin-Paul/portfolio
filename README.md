# Muwereza Marvin Paul — Portfolio

A Next.js portfolio with projects, skills, experience, contact details and a printable resume.

## Updating portfolio content

- `src/lib/projects.ts` contains the curated project showcase and capabilities.
- `src/lib/site.ts` contains profile details, navigation and the skills shared with the resume.
- `src/components/skill-chip.tsx` contains skill icons and homepage skill groups.

Repository-backed skills include PHP from Rolkat's WordPress theme; SQL and PL/pgSQL from HYSYS and Wabz Foods database scripts; Bash and Windows Batch from Campus Mindspace's deployment scripts; PowerShell and Docker from Wabz Foods' workflow and container files; and Rust, Tauri and SQLite from the POS and invoicing apps. Keep new skills in both the shared `site.skills` list and the appropriate homepage skill group.

Project content was reviewed against public and private repositories at [Marvin-Paul on GitHub](https://github.com/Marvin-Paul?tab=repositories) on 16 November 2026. The showcase has twelve projects. JBK Invoicing, House of Gina, Rakentaa Real Estate, Rolkat, Wabz Foods and HYSYS Global Solutions are featured; Emotions Store POS, MaizeGuard AI, Connect+, Campus Mindspace, C# Fundamentals (`Variables`) and the JavaScript course complete the set. Wabz Foods, Connect+, House of Gina and the Emotions Store POS demo have verified live links. The Rolkat preview comes from its repository's `designs/stitch/home-desktop.png`; the MaizeGuard preview comes from its Flutter login screen; the House of Gina preview is a capture of its live storefront.

C# and .NET are supported by `Variables/Program.cs`, its .NET 10 project file, and JBK Invoicing's .NET MAUI project (SQLite, CommunityToolkit.Mvvm, MailKit, PDF and SMTP services). Tauri v2, Rust, React 19, Zustand, TanStack Query, Vitest and Supabase are declared in the POS manifests. TanStack Query, Vitest, Playwright and React Testing Library are declared in Connect+'s package manifest. House of Gina's stack (React 19, Vite, Tailwind CSS v4, Zustand, React Router, Motion) is declared in its `package.json`. Rakentaa's private hosted preview is not advertised as a public live site. `Webapp` contains only Git configuration and is omitted from the showcase.

Private projects (`private: true`) are described from their source files and marked with a Private badge. They never link to the repository because visitors cannot open it; JBK Invoicing links to the contact page for a walkthrough, MaizeGuard links nowhere, and Emotions Store POS and House of Gina link to their public demos. The showcase omits empty repositories, duplicates and documentation-only bootstraps. Existing personal experience and education are maintained separately. Updates are curated in source, rather than fetched from GitHub during page loads. Check repository source files before changing descriptions or technology tags, and add live links only when available.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
