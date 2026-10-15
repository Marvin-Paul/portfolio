import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { SkillChip, skillGroups } from "@/components/skill-chip";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

const selected = projects.filter((project) => project.featured).slice(0, 3);

const process = [
  {
    step: "01",
    title: "DISCOVER",
    body: "Understanding goals, audience and project requirements.",
  },
  {
    step: "02",
    title: "IDEATE",
    body: "Planning, wireframing and creating the right concept.",
  },
  {
    step: "03",
    title: "DESIGN",
    body: "Crafting interfaces with a focus on user experience.",
  },
  {
    step: "04",
    title: "DEVELOP",
    body: "Building fast, responsive and high-performing products.",
  },
  {
    step: "05",
    title: "DELIVER",
    body: "Testing, optimizing and launching with perfection.",
  },
];

const experience: {
  role: string;
  org: string;
  period: string;
  link?: { label: string; href: string };
}[] = [
  {
    role: "Full-Stack Developer Intern",
    org: "HYSYS Global Solutions",
    period: "2026",
  },
  {
    role: "Application & Website Tester",
    org: "Testbirds",
    period: "2026",
    link: { label: "nest.testbirds.com", href: "https://nest.testbirds.com/dashboard" },
  },
  {
    role: "Product Developer",
    org: "Wabz Foods",
    period: "2026",
  },
  {
    role: "AI Applications Developer",
    org: "MaizeGuard",
    period: "2026",
  },
];

function monogram(title: string) {
  return title
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function Home() {
  return (
    <div className="container-site space-y-12 py-6 sm:py-8">
      {/* HERO */}
      <Reveal>
        <header className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-12">
          <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-widest text-neutral-400 sm:flex-row sm:items-center sm:gap-0 sm:pb-8">
            <div>
              <p className="font-bold text-primary">SOFTWARE DEVELOPER</p>
              <p>DIGITAL CREATOR</p>
            </div>
            <div className="flex items-center gap-2">
              <span>AVAILABLE FOR FREELANCE</span>
              <span className="text-primary">✦</span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 select-none justify-center overflow-hidden">
            <h1 className="font-display text-[clamp(3rem,11vw,13rem)] font-bold leading-none tracking-tight text-primary/60">
              PORTFOLIO
            </h1>
          </div>

          <div className="relative grid min-h-[500px] grid-cols-1 items-end gap-8 md:grid-cols-2 lg:grid-cols-12">
            <div className="space-y-4 md:col-span-1 lg:col-span-4">
              <p className="font-handwriting text-3xl text-neutral-300">
                Hello, I&rsquo;m
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
                Muwereza
                <br />
                <span className="text-white">Marvin Paul</span>
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Full-Stack Web, Mobile & AI Developer
              </p>
              <p className="max-w-xs text-xs leading-relaxed text-neutral-400">
                I design and build stylish, user-focused digital products that
                combine creativity with strategy. Passionate about clean design,
                smooth interactions and details that make a difference.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
                <FiGlobe className="h-3.5 w-3.5" aria-hidden="true" />
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            <div className="flex justify-center md:col-span-1 lg:col-span-5">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                <Image
                  src="/images/portrait-with-tie.png"
                  alt={`${site.fullName}, ${site.title}`}
                  width={432}
                  height={432}
                  unoptimized
                  priority
                  className="h-full w-full object-cover contrast-125 grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 md:col-span-2 md:flex-row md:items-center lg:col-span-3 lg:h-full lg:flex-col lg:items-stretch lg:gap-0">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-primary">✦</span>
                <span>Turning ideas into powerful digital experiences.</span>
              </div>

              <div className="space-y-6 md:flex md:items-baseline md:justify-between md:gap-8 md:space-y-0 lg:block lg:space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-bold text-primary">
                    {projects.length}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">
                    Projects
                    <br />
                    On GitHub
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-bold text-primary">
                    {site.skills.length}+
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">
                    Technologies
                    <br />
                    In My Stack
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-bold text-primary">
                    {projects.filter((project) => project.featured).length}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">
                    Featured
                    <br />
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Reveal>

      {/* SELECTED PROJECTS */}
      <section className="space-y-6">
        <Reveal>
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h3 className="font-display text-xl uppercase tracking-wider text-white">
              Selected Projects
            </h3>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
            >
              VIEW ALL PROJECTS
              <FiArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {selected.map((project, i) => (
            <Reveal key={project.slug} delay={i * 140} className="h-full">
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full cursor-pointer space-y-3"
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-[#1a0404]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top transition duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-6xl font-bold uppercase text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-primary/30">
                      {monogram(project.title)}
                    </span>
                  )}
                  <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-bold text-primary">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-bold uppercase text-white">
                        {project.title}
                      </p>
                      <p className="text-neutral-500">
                        {project.category.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <span className="text-neutral-500 transition group-hover:text-white">
                    <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE · PROCESS · QUOTE */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        <Reveal variant="slide-left" className="md:col-span-1 lg:col-span-5">
          <div className="glass-card space-y-8 rounded-2xl p-6">
            <h3 className="border-b border-neutral-800 pb-3 font-display text-xl uppercase tracking-wider text-white">
              Experience & Skills
            </h3>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                EXPERIENCE
              </p>
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="flex items-start justify-between border-b border-neutral-900 pb-3 text-xs last:border-none last:pb-0"
                >
                  <div>
                    <p className="font-semibold text-white">{item.role}</p>
                    <p className="text-neutral-500">{item.org}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {item.link.label}
                      </a>
                    )}
                  </div>
                  <span className="font-medium text-primary">{item.period}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                SKILLS
              </p>
              {skillGroups.map((group) => (
                <div key={group.label} className="space-y-2.5">
                  <p className="mono-label text-[10px] text-neutral-500">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="slide-right" delay={100} className="md:col-span-1 lg:col-span-4">
          <div className="glass-card space-y-6 rounded-2xl p-6">
            <h3 className="border-b border-neutral-800 pb-3 font-display text-xl uppercase tracking-wider text-white">
              Work Process
            </h3>
            <div className="space-y-6 text-xs">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-display text-lg font-bold text-primary">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold uppercase text-primary">
                      {item.title}
                    </p>
                    <p className="text-neutral-400">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="zoom" delay={200} className="md:col-span-2 lg:col-span-3">
          <div className="glass-card flex h-full flex-col justify-between space-y-8 rounded-2xl border-red-900/50 p-6">
            <div className="font-serif text-5xl text-red-500">“</div>
            <blockquote className="text-sm font-medium leading-relaxed text-neutral-200">
              Good design is not just how it looks, but how it works.
            </blockquote>
            <div>
              <p className="font-handwriting text-3xl text-neutral-200">
                Muwereza
              </p>
              <div className="mt-8 border-t border-red-900/40 pt-4 text-[10px] tracking-wider text-neutral-300">
                <p className="font-bold text-white">LET&rsquo;S CREATE</p>
                <p className="text-neutral-400">SOMETHING GREAT TOGETHER.</p>
                <span className="mt-2 block text-primary">✦</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
