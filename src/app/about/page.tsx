import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";
import { capabilities } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — a software developer in ${site.location}.`,
};

const experience = [
  {
    role: "Founder & Full-Stack Developer",
    org: "HYSYS Global Solutions",
    period: "2026",
    body: "Built the company product website as a TypeScript monorepo with complete PRD, design, SEO and analytics documentation.",
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
    body: "Built an on-device AI diagnostic for maize leaf disease using Flutter and Gemini vision.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 sm:pt-32">
        <Reveal>
          <SectionLabel>About me</SectionLabel>
        </Reveal>
        <div className="grid items-start gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <h1 className="display max-w-4xl text-4xl sm:text-5xl md:text-6xl">
                I build software that respects the person using it.
              </h1>
            </Reveal>
            <div className="mt-10 max-w-2xl">
              <Reveal delay={220}>
                <p className="text-lg leading-relaxed text-body-muted">
                  I&rsquo;m {site.fullName}, a {site.title.toLowerCase()} in{" "}
                  {site.location}. My work sits at the intersection of
                  full-stack web, mobile and AI — products that are documented
                  before they are built, and kept deliberately simple once they
                  are.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <p className="mt-6 text-lg leading-relaxed text-body-muted">
                  From food ordering platforms to on-device AI diagnostics, I
                  care about the details most people never see: typed data,
                  honest interfaces and systems that hold up under real use.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal variant="slide-right" delay={200} className="lg:col-span-1">
            <div className="glass-card overflow-hidden rounded-lg">
              <Image
                src="/images/profile.png"
                alt={`${site.fullName}, ${site.title}`}
                width={432}
                height={432}
                unoptimized
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-site py-20">
        <Reveal variant="slide-left">
          <div className="glass-card flex flex-col justify-between gap-8 rounded-lg p-8 sm:max-w-md lg:max-w-sm">
            <div>
              <p className="mono-label mb-4 text-body-muted">Profile</p>
              <p className="text-sm leading-relaxed text-body-muted">
                {site.fullName}
                <br />
                {site.title}
                <br />
                {site.location}
                <br />
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-action-blue underline underline-offset-4 hover:text-focus-blue"
                >
                  {site.phone}
                </a>
              </p>
            </div>
            <div>
              <p className="mono-label mb-4 text-body-muted">Links</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-action-blue underline underline-offset-4 hover:text-focus-blue"
                  >
                    GitHub · {site.githubHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-action-blue underline underline-offset-4 hover:text-focus-blue"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border-light bg-pale-blue/50 py-20">
        <div className="container-site">
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} variant="zoom" delay={i * 120} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-surface p-8 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl text-ink">{cap.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-body-muted">
                    {cap.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-24">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>
        <div className="border-t border-hairline">
          {experience.map((item, i) => (
            <Reveal key={item.role} variant="blur" delay={i * 100}>
              <div className="grid gap-2 border-b border-hairline py-8 md:grid-cols-12">
                <div className="md:col-span-5">
                  <h3 className="text-xl text-ink">{item.role}</h3>
                  <p className="mt-1 text-sm text-body-muted">{item.org}</p>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-body-muted md:col-span-6">
                  {item.body}
                </p>
                <p className="mono-label text-body-muted md:col-span-1 md:text-right">
                  {item.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site pb-24 text-center">
        <Reveal>
          <h2 className="display text-3xl sm:text-4xl">
            Want to know more?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-accent-dark sm:w-auto"
          >
            Contact me
          </Link>
        </Reveal>
      </section>
    </>
  );
}
