import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
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
import { VscVscode, VscTerminal } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";
import { FiZap } from "react-icons/fi";

export type SkillInfo = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: SkillInfo[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
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

export function getSkill(name: string): SkillInfo | undefined {
  return skills.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export const skillGroups: { label: string; skills: SkillInfo[] }[] = [
  { label: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Dart"].map(byName) },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"].map(byName),
  },
  { label: "Mobile", skills: ["Flutter"].map(byName) },
  {
    label: "Backend & Data",
    skills: ["Supabase", "Prisma", "PostgreSQL"].map(byName),
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
    skills: ["WordPress", "Bolt", "Vercel", "Git"].map(byName),
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
