import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiReactquery,
  SiVitest,
  SiTestinglibrary,
  SiPhp,
  SiRust,
  SiTauri,
  SiSqlite,
  SiGnubash,
  SiDocker,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiVite,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiGooglegemini,
  SiCursor,
  SiDeepseek,
  SiClaude,
  SiGoogle,
  SiHtml5,
  SiCss,
  SiFigma,
  SiWordpress,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode, VscTerminal } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";
import { FiZap, FiCheckSquare } from "react-icons/fi";

export type SkillInfo = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: SkillInfo[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C#", icon: TbBrandCSharp, color: "#A179DC" },
  { name: ".NET", icon: SiDotnet, color: "#B794F6" },
  { name: "Rust", icon: SiRust, color: "#DEA584" },
  { name: "Tauri", icon: SiTauri, color: "#24C8DB" },
  { name: "SQLite", icon: SiSqlite, color: "#4A9CC7" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Playwright", icon: FiCheckSquare, color: "#45BA4B" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "#E33332" },
  { name: "PHP", icon: SiPhp, color: "#A5ACE9" },
  { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "PL/pgSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
  { name: "PowerShell", icon: VscTerminal, color: "#5391FE" },
  { name: "Windows Batch", icon: VscTerminal, color: "#A0AEC0" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#E5E5E5" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Prisma", icon: SiPrisma, color: "#A0AEC0" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "OpenCode", icon: VscTerminal, color: "#22C55E" },
  { name: "Cursor", icon: SiCursor, color: "#A1A1AA" },
  { name: "Antigravity", icon: SiGoogle, color: "#4285F4" },
  { name: "Gemini AI", icon: SiGooglegemini, color: "#8E75B2" },
  { name: "ChatGPT", icon: RiOpenaiFill, color: "#10A37F" },
  { name: "DeepSeek", icon: SiDeepseek, color: "#4D6BFE" },
  { name: "Claude AI", icon: SiClaude, color: "#D97757" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe Illustrator", icon: DiIllustrator, color: "#FF9A00" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Bolt", icon: FiZap, color: "#E8B500" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

const byName = (name: string) => skills.find((s) => s.name === name)!;

export const coreSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  ".NET",
  "Rust",
  "Tauri",
  "Flutter",
  "Supabase",
  "PostgreSQL",
  "SQLite",
  "Figma",
].map(byName);

export function getSkill(name: string): SkillInfo | undefined {
  return skills.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export const skillGroups: { label: string; skills: SkillInfo[] }[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Rust", "PHP", "Python", "Dart", "HTML", "CSS", "SQL", "PL/pgSQL"].map(byName),
  },
  {
    label: "Scripting & Automation",
    skills: ["Bash", "PowerShell", "Windows Batch"].map(byName),
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query"].map(byName),
  },
  { label: "Mobile", skills: ["Flutter"].map(byName) },
  { label: "Desktop", skills: ["Tauri"].map(byName) },
  { label: ".NET Development", skills: [".NET"].map(byName) },
  {
    label: "Testing",
    skills: ["Vitest", "Playwright", "React Testing Library"].map(byName),
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Supabase", "Prisma", "PostgreSQL", "SQLite"].map(byName),
  },
  {
    label: "Code Editors",
    skills: ["VS Code", "OpenCode", "Cursor", "Antigravity"].map(byName),
  },
  {
    label: "AI Tools",
    skills: ["ChatGPT", "DeepSeek", "Claude AI", "Gemini AI"].map(byName),
  },
  { label: "Design", skills: ["Figma", "Adobe Illustrator"].map(byName) },
  {
    label: "CMS & Build Tools",
    skills: ["WordPress", "Docker", "Bolt", "Vercel", "Git"].map(byName),
  },
];

export function SkillChip({ skill }: { skill: SkillInfo }) {
  const Icon = skill.icon;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-neutral-200"
      style={{ borderColor: `${skill.color}55` }}
    >
      <Icon className="h-3.5 w-3.5" style={{ color: skill.color }} aria-hidden="true" />
      {skill.name}
    </span>
  );
}
