import Link from "next/link";
import { FiMail, FiGithub, FiMapPin, FiArrowRight, FiLinkedin, FiFileText } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="container-site pb-6 sm:pb-8">
      <div className="glass-card grid grid-cols-1 items-center gap-8 rounded-2xl p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Let&rsquo;s work
            <br />
            together <span className="text-primary">✦</span>
          </h3>
          <p className="max-w-sm text-xs text-neutral-400">
            I&rsquo;m currently open for new projects and collaborations.
            Let&rsquo;s create something amazing that drives results.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs text-primary transition hover:bg-primary hover:text-white active:scale-95"
            >
              <FiArrowRight className="h-3.5 w-3.5" aria-hidden="true" /> AVAILABLE
              FOR FREELANCE
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="break-all text-neutral-200">{site.email}</span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FiGithub className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">github.com/{site.githubHandle}</span>
          </a>
          <a
            href={site.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-[#FFD21E]">
              <SiHuggingface className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">
              huggingface.co/{site.huggingfaceHandle}
            </span>
          </a>
          <Link
            href="/resume"
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FiFileText className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">Resume / CV (PDF)</span>
          </Link>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FiLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">linkedin.com/in/marvin-muwereza</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5 transition hover:border-primary/50 active:border-primary/60"
          >
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FaWhatsapp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">WhatsApp · {site.phone}</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-neutral-900 bg-neutral-950 p-3.5">
            <span className="rounded-lg bg-neutral-900 p-2 text-neutral-400">
              <FiMapPin className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-neutral-200">{site.location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-2 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p>Built with Next.js · Designed with care.</p>
      </div>
    </footer>
  );
}
