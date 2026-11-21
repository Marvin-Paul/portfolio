import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiArrowRight, FiArrowUpRight, FiLock } from "react-icons/fi";
import { SiHuggingface } from "react-icons/si";
import { Reveal } from "@/components/reveal";
import { SmartLink } from "@/components/smart-link";
import { SkillChip, coreSkills } from "@/components/skill-chip";
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
    role: "Data Analysis Intern",
    org: "Codveda Technologies",
    period: "2026 — Present",
    link: { label: "codveda.com", href: "https://www.codveda.com" },
  },
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
    <div className="container-site space-y-10 py-6 sm:py-8">
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

          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 select-none justify-center overflow-hidden lg:flex">
            <h1 className="font-display text-[clamp(3rem,11vw,13rem)] font-bold leading-none tracking-tight text-primary/60">
              PORTFOLIO
            </h1>
          </div>

          <div className="relative grid min-h-[440px] grid-cols-1 items-end gap-8 md:grid-cols-2 lg:min-h-[480px] lg:grid-cols-12">
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
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 sm:max-w-sm lg:max-w-md">
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
                    Built
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
          {selected.map((project, i) => {
            const primary = project.links[0];
            const card = (
              <>
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-[#1a0404]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top transition duration-500 ease-out group-hover:scale-105 group-active:scale-105"
                    />
                  ) : (
                    <span className="font-display text-6xl font-bold uppercase text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-primary/30">
                      {monogram(project.title)}
                    </span>
                  )}
                  <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    {project.year}
                  </span>
                  {project.private && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      <FiLock className="h-3 w-3" aria-hidden="true" />
                      Private
                    </span>
                  )}
                  {project.hf && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#FFD21E]">
                      <SiHuggingface className="h-3 w-3" aria-hidden="true" />
                      {project.hfPublic === false ? "HF Private" : "HF Space"}
                    </span>
                  )}
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
              </>
            );

            return (
              <Reveal key={project.slug} delay={i * 140} className="h-full">
                {primary ? (
                  <SmartLink
                    href={primary.href}
                    className="group block h-full cursor-pointer space-y-3 transition-transform duration-300 active:scale-[0.985]"
                  >
                    {card}
                  </SmartLink>
                ) : (
                  <div className="group block h-full space-y-3">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* HUGGING FACE */}
      <Reveal variant="fade-up">
        <section className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFD21E]/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mono-label text-[#FFD21E]">Hugging Face</p>
              <h3 className="mt-2 font-display text-xl uppercase tracking-wider text-white">
                Every repository, mirrored as a Space
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                All {projects.filter((p) => p.hf && p.hfPublic !== false).length}{" "}
                public projects are also published as Hugging Face Spaces, so the
                source can be browsed, cloned and reused straight from the Hub.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={site.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFD21E] px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-[#ffe066] active:scale-95"
              >
                <SiHuggingface className="h-4 w-4" aria-hidden="true" />
                @{site.huggingfaceHandle}
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-[#FFD21E]/60 hover:text-[#FFD21E] active:scale-95"
              >
                Browse projects
                <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* EXPERIENCE + CORE STACK */}
      <Reveal variant="slide-left">
        <section className="glass-card grid gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="border-b border-neutral-800 pb-3 font-display text-xl uppercase tracking-wider text-white">
              Experience
            </h3>
            <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {experience.map((item) => (
                <div key={item.role} className="text-xs">
                  <p className="font-semibold text-white">{item.role}</p>
                  <p className="mt-0.5 text-neutral-500">{item.org}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block text-primary hover:underline"
                    >
                      {item.link.label}
                    </a>
                  )}
                  <p className="mt-1 font-medium text-primary">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-neutral-800 lg:pl-8">
            <div className="flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-3">
              <h3 className="font-display text-xl uppercase tracking-wider text-white">
                Core stack
              </h3>
              <Link
                href="/resume"
                className="flex shrink-0 items-center gap-1 text-xs text-neutral-400 hover:text-white"
              >
                Full stack
                <FiArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-neutral-500">
              From the app shell to the database — typed, tested and shipped
              with the same care.
            </p>
          </div>
        </section>
      </Reveal>

      {/* WORK PROCESS */}
      <Reveal variant="slide-right">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-neutral-800 pb-3">
            <h3 className="font-display text-xl uppercase tracking-wider text-white">
              Work Process
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Five steps, no surprises
            </span>
          </div>
          <ol className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {process.map((item) => (
              <li
                key={item.step}
                className="border-t border-neutral-800 pt-4"
              >
                <span className="font-display text-lg font-bold text-primary">
                  {item.step}
                </span>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* QUOTE */}
      <Reveal variant="zoom">
        <section className="glass-card relative overflow-hidden rounded-2xl p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-red-900/25 blur-3xl" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-0 hidden select-none font-serif text-[10rem] leading-none text-primary/10 sm:right-10 sm:block"
          >
            &rdquo;
          </span>

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="mono-label text-primary">A principle I build by</p>
              <blockquote className="mt-4 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                &ldquo;Good design is not just how it looks, but{" "}
                <span className="text-primary">how it works</span>.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-neutral-800 lg:pl-8">
              <p className="font-handwriting text-4xl text-neutral-200">
                Muwereza
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-neutral-500">
                Designer &amp; developer
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-on-primary transition hover:bg-accent-dark active:scale-95"
                >
                  Start a project
                  <FiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/about"
                  className="text-xs text-neutral-400 transition-colors hover:text-white active:text-white"
                >
                  More about me
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-neutral-800 pt-4 text-[10px] uppercase tracking-widest text-neutral-500">
            <span className="text-primary">✦</span>
            <span>Available for freelance</span>
            <span className="text-neutral-700">/</span>
            <span>{site.location}</span>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
