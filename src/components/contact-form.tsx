"use client";

import { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail } from "react-icons/fi";
import { site } from "@/lib/site";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const inputClass =
  "w-full rounded-xl border border-neutral-800 bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-muted transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!ACCESS_KEY || ACCESS_KEY === "your_access_key_here") {
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Project inquiry from ${name}`,
          name,
          email,
          replyto: email,
          message,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setStatus("sent");
      } else {
        setError(result.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Could not reach the mail service. Please try again or email me directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <FiCheckCircle className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="display mt-6 text-3xl uppercase text-white">
          Message sent.
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-body-muted">
          Thanks for reaching out — your message is on its way. I usually reply
          within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-body-muted">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-body-muted">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-body-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What are you building?"
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-error/40 bg-error/10 p-4 text-sm text-error"
        >
          <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <FiMail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-primary hover:underline"
          >
            {site.email}
          </a>
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-on-primary transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <FiSend
            className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}
