import type { Metadata } from "next";
import { SiHuggingface } from "react-icons/si";
import { Reveal } from "@/components/reveal";
import { ProjectList } from "@/components/project-list";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Muwereza Marvin Paul — business websites, web and desktop apps, mobile AI tools and private client builds.",
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
            A selection of business websites, web and desktop applications,
            mobile AI tools and learning projects. Public repositories link to
            their source; projects marked Private are client or personal builds
            where the code stays closed, but the stack and approach are open to
            talk through.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`${site.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-action-blue underline underline-offset-4 hover:text-focus-blue"
            >
              Explore @{site.githubHandle} on GitHub
            </a>
            <a
              href={site.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFD21E] underline underline-offset-4 hover:text-[#ffe066]"
            >
              <SiHuggingface className="h-4 w-4" aria-hidden="true" />
              {site.huggingfaceHandle} on Hugging Face
            </a>
          </div>
        </Reveal>
      </section>

      <ProjectList projects={projects} />
    </>
  );
}
