"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { SiHuggingface } from "react-icons/si";
import { Reveal } from "@/components/reveal";
import { SmartLink } from "@/components/smart-link";
import { SkillChip, getSkill } from "@/components/skill-chip";
import type { Project } from "@/lib/projects";

const filters = ["All", "Featured", "Web", "Desktop", "CMS", "Learning", "Private"] as const;
type Filter = (typeof filters)[number];

function matches(project: Project, filter: Filter) {
  switch (filter) {
    case "All":
      return true;
    case "Featured":
      return project.featured === true;
    case "Web":
      return !project.tags.some((t) => t === "Flutter" || t === "Dart" || t === ".NET");
    case "Desktop":
      return project.tags.includes("Tauri");
    case "CMS":
      return project.category.includes("CMS");
    case "Learning":
      return project.category === "Education";
    case "Private":
      return project.private === true;
  }
}

function monogram(title: string) {
  return title
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-[#1a0404] ${className ?? ""}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className="object-cover object-top transition duration-500 group-hover:scale-105 group-active:scale-105"
        />
      ) : (
        <span className="font-display text-5xl font-bold uppercase text-white/10 transition duration-300 group-hover:scale-110 group-hover:text-primary/30 sm:text-6xl">
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
  );
}

function FeaturedCard({
  project,
  flip,
  delay = 0,
}: {
  project: Project;
  flip?: boolean;
  delay?: number;
}) {
  const content = (
    <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
      <div>
        <p className="mono-label text-primary">
          {project.category} · {project.year}
        </p>
        <h3 className="display mt-3 text-3xl uppercase tracking-tight text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const skill = getSkill(tag);
            return skill ? (
              <SkillChip key={tag} skill={skill} />
            ) : (
              <span
                key={tag}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] text-neutral-300"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <SmartLink
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-on-primary transition hover:bg-accent-dark active:scale-95"
          >
            {link.label === "GitHub" ? "View on GitHub" : link.label}
            <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </SmartLink>
        ))}
        {project.hf && project.hfPublic !== false && (
          <SmartLink
            href={`https://huggingface.co/spaces/Marvin256/${project.hf}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFD21E]/40 px-5 py-2.5 text-xs font-semibold text-[#FFD21E] transition hover:border-[#FFD21E] hover:bg-[#FFD21E]/10 active:scale-95"
          >
            <SiHuggingface className="h-3.5 w-3.5" aria-hidden="true" />
            Hugging Face
          </SmartLink>
        )}
        {project.hf && project.hfPublic === false && (
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-5 py-2.5 text-xs font-semibold text-neutral-500">
            <SiHuggingface className="h-3.5 w-3.5" aria-hidden="true" />
            HF Space · private
          </span>
        )}
        {project.links.length === 0 && (
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-xs font-semibold text-neutral-400">
            <FiLock className="h-3.5 w-3.5" aria-hidden="true" />
            Private build · ask for a walkthrough
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Reveal variant={flip ? "slide-left" : "slide-right"} delay={delay}>
      <article className="glass-card group grid overflow-hidden rounded-2xl md:grid-cols-2">
        <div className={flip ? "md:order-2" : "md:order-1"}>
          <ProjectVisual
            project={project}
            className="aspect-video md:aspect-auto md:h-full md:min-h-[320px]"
          />
        </div>
        <div className={flip ? "md:order-1" : "md:order-2"}>{content}</div>
      </article>
    </Reveal>
  );
}

function CompactCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal variant="zoom" delay={delay} className="h-full">
      <article
        className="glass-card group flex h-full flex-col overflow-hidden rounded-xl transition hover:border-white/20 active:border-white/25"
      >
        <ProjectVisual project={project} className="aspect-video" />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg uppercase tracking-tight text-white">
              {project.links[0] ? (
                <SmartLink
                  href={project.links[0].href}
                  className="hover:underline underline-offset-4"
                >
                  {project.title}
                </SmartLink>
              ) : (
                project.title
              )}
            </h3>
            <span className="mono-label shrink-0 pt-1 text-neutral-500">
              {project.year}
            </span>
          </div>
          <p className="mono-label mt-2 text-primary">{project.category}</p>
          <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => {
              const skill = getSkill(tag);
              return skill ? (
                <SkillChip key={tag} skill={skill} />
              ) : (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 text-[10px] text-neutral-400"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
            {project.links.map((link) => (
              <SmartLink
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 transition hover:text-white active:text-white"
              >
                {link.label === "GitHub" ? "VIEW ON GITHUB" : "VISIT LIVE SITE"}
                <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </SmartLink>
            ))}
            {project.hf && project.hfPublic !== false && (
              <SmartLink
                href={`https://huggingface.co/spaces/Marvin256/${project.hf}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFD21E]/80 transition hover:text-[#FFD21E] active:text-[#FFD21E]"
              >
                <SiHuggingface className="h-3.5 w-3.5" aria-hidden="true" />
                HF SPACE
              </SmartLink>
            )}
            {project.links.length === 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                <FiLock className="h-3.5 w-3.5" aria-hidden="true" />
                PRIVATE · SOURCE ON REQUEST
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => matches(p, filter));
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <>
      <section className="container-site py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="mb-2 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition active:scale-95 ${
                    active
                      ? "border-primary text-primary"
                      : "border-hairline text-ink hover:border-primary/50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <p className="mono-label text-body-muted">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </section>

      <section className="container-site space-y-14 pb-24">
        {featured.length > 0 && (
          <div className="space-y-8">
            <Reveal>
              <h2 className="mono-label text-body-muted">Featured work</h2>
            </Reveal>
            {featured.map((project, i) => (
              <FeaturedCard
                key={project.slug}
                project={project}
                flip={i % 2 === 1}
                delay={i * 120}
              />
            ))}
          </div>
        )}

        {others.length > 0 && (
          <div className="space-y-8">
            <Reveal>
              <h2 className="mono-label text-body-muted">
                {filter === "All" ? "More projects" : filter}
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, i) => (
                <CompactCard
                  key={project.slug}
                  project={project}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>
        )}

        {visible.length === 0 && (
          <p className="text-sm text-body-muted">
            No projects in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
