import type { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiGithub, FiMapPin, FiArrowUpRight, FiLinkedin, FiFileText } from "react-icons/fi";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Muwereza Marvin Paul about a project.",
};

const channels: {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  iconClass: string;
  rowClass: string;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: FiMail,
    iconClass: "text-primary",
    rowClass: "hover:border-primary/40 hover:bg-primary/5",
  },
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    icon: FaWhatsapp,
    iconClass: "text-[#25D366]",
    rowClass: "hover:border-[#25D366]/40 hover:bg-[#25D366]/5",
  },
  {
    label: "GitHub",
    value: `@${site.githubHandle}`,
    href: site.github,
    icon: FiGithub,
    iconClass: "text-neutral-200",
    rowClass: "hover:border-neutral-500/40 hover:bg-neutral-100/5",
  },
  {
    label: "LinkedIn",
    value: "marvin-muwereza",
    href: site.linkedin,
    icon: FiLinkedin,
    iconClass: "text-[#0A66C2]",
    rowClass: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
  },
  {
    label: "Resume",
    value: "Download CV (PDF)",
    href: "/resume",
    icon: FiFileText,
    iconClass: "text-primary",
    rowClass: "hover:border-primary/40 hover:bg-primary/5",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-20 sm:pt-32">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="display max-w-3xl text-4xl sm:text-5xl md:text-6xl">
              Start a <span className="text-primary">conversation.</span>
            </h1>
            <span className="flex items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new projects
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-muted">
            Tell me what you&rsquo;re building — a website, a mobile app or an
            AI tool. I usually reply within a day or two.
          </p>
        </Reveal>
      </section>

      <section className="container-site py-16 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal variant="slide-left" className="lg:col-span-2">
            <div className="glass-card relative h-full overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <p className="mono-label text-primary">Say hello</p>
                <h2 className="display mt-2 text-3xl uppercase tracking-tight text-white">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Fill this out and your email client opens with everything
                  pre-filled — nothing is stored on this site.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={150}>
            <div className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-8">
              <p className="mono-label text-primary">Direct lines</p>
              <h3 className="display mt-2 text-2xl uppercase tracking-tight text-white">
                Prefer to reach me directly?
              </h3>
              <p className="mt-3 text-sm text-neutral-500">
                Pick whichever channel suits you best.
              </p>

              <div className="mt-8 space-y-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const row = (
                    <>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 transition group-hover:scale-105 ${channel.iconClass}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-white">
                          {channel.value}
                        </span>
                      </span>
                      <FiArrowUpRight
                        className="ml-auto h-4 w-4 shrink-0 text-neutral-600 transition group-hover:text-white"
                        aria-hidden="true"
                      />
                    </>
                  );
                  const cls = `group flex items-center gap-4 rounded-xl border border-neutral-800 bg-surface p-4 transition ${channel.rowClass}`;
                  return channel.external === false ? (
                    <Link key={channel.label} href={channel.href} className={cls}>
                      {row}
                    </Link>
                  ) : (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {row}
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <div className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-primary">
                    <FiMapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                      Based in
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      {site.location}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Working with clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-site pb-24">
        <Reveal variant="zoom">
          <div className="glass-card relative overflow-hidden rounded-2xl border-red-900/50 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(211,47,47,0.18),transparent_60%)]" />
            <div className="relative">
              <p className="font-handwriting text-4xl text-primary">
                Have a project in mind?
              </p>
              <h2 className="display mx-auto mt-3 max-w-3xl text-3xl uppercase tracking-tight text-white sm:text-5xl">
                Let&rsquo;s build something great.
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-on-primary transition hover:bg-accent-dark sm:w-auto"
                >
                  Email me
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-[#25D366]/60 hover:text-[#25D366] sm:w-auto"
                >
                  <FaWhatsapp
                    className="h-4 w-4 text-[#25D366]"
                    aria-hidden="true"
                  />
                  WhatsApp me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
