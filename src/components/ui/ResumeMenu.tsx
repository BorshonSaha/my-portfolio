"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import type { ResumeFile } from "@/types";
import { driveDownloadUrl } from "@/lib/drive";

/** Desktop: one button that opens a small language picker. */
export default function ResumeMenu({ resumes }: { resumes: ResumeFile[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative ml-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="resume-options"
        className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3.5 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50"
      >
        <Download className="size-4" aria-hidden /> Download resume
        <ChevronDown aria-hidden className={"size-4 transition-transform " + (open ? "rotate-180" : "")} />
      </button>

      <div
        id="resume-options"
        hidden={!open}
        className="absolute right-0 top-full mt-2 w-52 rounded-lg border border-zinc-800 bg-zinc-950 p-1 shadow-xl shadow-black/30"
      >
        {resumes.map((r) => (
          <a
            key={r.lang}
            href={driveDownloadUrl(r.driveFileId)}
            target="_blank"
            rel="noopener noreferrer"
            hrefLang={r.lang}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-zinc-50"
          >
            <span>{r.label}</span>
            <span className="text-xs text-zinc-500">PDF</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/** Mobile drawer: both languages as full-width buttons, no extra tap to open. */
export function ResumeList({ resumes, onSelect }: { resumes: ResumeFile[]; onSelect?: () => void }) {
  return (
    <div className="mt-8 space-y-2">
      {resumes.map((r, i) => (
        <a
          key={r.lang}
          href={driveDownloadUrl(r.driveFileId)}
          target="_blank"
            rel="noopener noreferrer"
          hrefLang={r.lang}
          onClick={onSelect}
          className={
            "flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium " +
            (i === 0 ? "bg-zinc-100 text-zinc-950" : "border border-zinc-700 text-zinc-100")
          }
        >
          <Download className="size-4" aria-hidden /> Download resume ({r.label})
        </a>
      ))}
    </div>
  );
}
