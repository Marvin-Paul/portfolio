"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass sticky top-0 z-50">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2.5 font-display text-lg tracking-tight"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-light">
            <Image
              src="/images/profile.png"
              alt={site.fullName}
              width={32}
              height={32}
              unoptimized
              className="h-full w-full object-cover"
            />
          </span>
          <span className="truncate whitespace-nowrap text-sm font-medium sm:text-lg">
            {site.name}
          </span>
        </Link>        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${
                  active
                    ? "font-medium text-ink"
                    : "text-body-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          {open ? (
            <HiOutlineX className="h-5 w-5" aria-hidden="true" />
          ) : (
            <HiOutlineMenuAlt3 className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-white/5 md:hidden">
          <nav className="container-site flex flex-col py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-light py-4 text-base text-ink last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-on-primary"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
