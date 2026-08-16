"use client";

import { FiDownload } from "react-icons/fi";

export function ResumeActions() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:bg-accent-dark"
    >
      <FiDownload className="h-4 w-4" aria-hidden="true" />
      Download as PDF
    </button>
  );
}
