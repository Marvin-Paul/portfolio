import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProjectList } from "@/components/project-list";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Muwereza Marvin Paul — business websites, web platforms and C#/.NET learning projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="container-site pt-20 sm:pt-32">
        <Reveal>
          <SectionLabel>Selected projects</SectionLabel>
          <h1 className="display max-w-4xl text-4xl sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-muted">
            A selection of business websites, web applications and learning
            projects from my public GitHub repositories. Explore the source
            code and try live projects where available.
          </p>
          <a
            href={`${site.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm text-action-blue underline underline-offset-4 hover:text-focus-blue"
          >
            Explore @{site.githubHandle} on GitHub
          </a>
        </Reveal>
      </section>

      <ProjectList projects={projects} />
    </>
  );
}
