import type { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ResumeActions } from "@/components/resume-actions";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.fullName} — a software developer in ${site.location}.`,
};

const summary =
  "Software developer based in Entebbe, Uganda, focused on full-stack web, mobile and AI products. I take work from specification and design to a shipping build — documenting before building, and testing along the way. Experienced in startup product work, an internship as a full-stack developer, and professional application and website testing.";

const skills = site.skills;

const experience = [
  {
    role: "Full-Stack Developer Intern",
    org: "HYSYS Global Solutions",
    period: "2026",
    body: "Developed the company website as a TypeScript monorepo with complete PRD, design, SEO and analytics documentation.",
  },
  {
    role: "Application & Website Tester",
    org: "Testbirds",
    period: "2026",
    body: "Testing applications and websites for functionality, usability and bugs as part of a professional crowdtesting network.",
  },
  {
    role: "Product Developer",
    org: "Wabz Foods",
    period: "2026",
    body: "Shipped a full-stack food ordering platform with an admin panel and Supabase-backed data layer.",
  },
  {
    role: "AI Applications Developer",
    org: "MaizeGuard",
    period: "2026",
    body: "Built a mobile AI diagnostic for maize leaf disease using Flutter and Gemini vision.",
  },
];

const education = [
  {
    level: "University",
    org: "Kampala International University",
    period: "Current",
  },
  {
    level: "Advanced Level (A-Level)",
    org: "Kyaddondo Secondary School Matuga",
  },
  {
    level: "Ordinary Level (O-Level)",
    org: "Kyaddondo Secondary School Matuga",
  },
];

const featured = projects
  .filter((p) => p.featured || p.slug === "hysys-global-solutions")
  .slice(0, 4);

function ContactLine({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-600 transition hover:text-[#d32f2f]"
    >
      {label}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[#d32f2f] pb-1.5 font-display text-base font-semibold uppercase tracking-[0.18em] text-neutral-900">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <section className="container-site pt-20 sm:pt-32">
      <div className="no-print flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>Resume</SectionLabel>
          <h1 className="display text-4xl sm:text-5xl">Curriculum Vitae</h1>
        </div>
        <ResumeActions />
      </div>

      <div className="resume-doc mt-10 overflow-hidden rounded-lg border border-neutral-800 bg-white text-neutral-900 shadow-2xl">
        <div className="border-b-4 border-[#d32f2f] bg-neutral-50 px-8 py-10 sm:px-12">
          <p className="font-display text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-5xl">
            {site.fullName}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-[#d32f2f]">
            {site.title}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiPhone className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              <ContactLine href={site.whatsapp} label={site.phone} />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMail className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              <ContactLine href={`mailto:${site.email}`} label={site.email} />
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <FiGithub className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              <ContactLine href={site.github} label={`github.com/${site.githubHandle}`} />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiLinkedin className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              <ContactLine
                href={site.linkedin}
                label="linkedin.com/in/marvin-muwereza"
              />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FaWhatsapp className="h-4 w-4 text-[#d32f2f]" aria-hidden="true" />
              <ContactLine href={site.whatsapp} label="WhatsApp" />
            </span>
          </div>
        </div>

        <div className="space-y-10 px-8 py-10 sm:px-12">
          <section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              {summary}
            </p>
          </section>

          <section>
            <SectionTitle>Core Skills</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Experience</SectionTitle>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-900">
                      {item.role} — <span className="font-normal">{item.org}</span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#d32f2f]">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="mt-4 space-y-3">
              {education.map((item) => (
                <div key={item.level} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{item.org}</p>
                    <p className="text-xs text-neutral-600">{item.level}</p>
                  </div>
                  {item.period && (
                    <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#d32f2f]">
                      {item.period}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="mt-4 space-y-4">
              {featured.map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-neutral-900 underline-offset-2 hover:underline"
                    >
                      {project.title}
                    </a>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d32f2f]">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-1 max-w-3xl text-xs leading-relaxed text-neutral-600">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="border-t border-neutral-200 bg-neutral-50 px-8 py-6 text-center text-xs text-neutral-500 sm:px-12">
          {site.fullName} · {site.location} · {site.email}
        </div>
      </div>
    </section>
  );
}
