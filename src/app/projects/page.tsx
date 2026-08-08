import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProjectList } from "@/components/project-list";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Muwereza Marvin Paul — web platforms, mobile apps and AI tools.",
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
            A selection of platforms, products and prototypes. Each one was
            built end-to-end — from the first spec to the shipping build.
          </p>
        </Reveal>
      </section>

      <ProjectList projects={projects} />
    </>
  );
}
