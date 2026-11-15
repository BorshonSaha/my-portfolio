"use client";

import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Award, ExternalLink, Eye, X } from "lucide-react";
import type { Certificate } from "@/types";
import Badge from "@/components/ui/Badge";
import { useDialog } from "@/hooks/useDialog";
import { driveThumbnailUrl, drivePreviewUrl, driveViewUrl } from "@/lib/drive";

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
  const { title, issuer, issued, credentialId, skills, driveLink } = certificate;
  const [open, setOpen] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-600">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Preview ${title} from ${issuer}`}
        className="relative block aspect-[4/3] w-full overflow-hidden border-b border-zinc-800 bg-zinc-900"
      >
        {thumbFailed ? (
          <span className="flex size-full items-center justify-center text-zinc-600">
            <Award className="size-12" aria-hidden />
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- remote Drive thumbnail, no optimisation needed
          <img
            src={driveThumbnailUrl(driveLink)}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setThumbFailed(true)}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <span aria-hidden className="absolute inset-0 flex items-center justify-center bg-zinc-950/50 text-sm font-medium text-zinc-50 opacity-0 transition-opacity group-hover:opacity-100">
          <Eye className="mr-2 size-4" /> Preview
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="break-words font-display text-lg font-semibold leading-snug text-zinc-50">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{issuer}</p>
        <p className="mt-1 break-all text-sm text-zinc-500">
          Issued {issued}
          {credentialId && <> / ID {credentialId}</>}
        </p>

        {skills && skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills covered">
            {skills.map((s) => (
              <li key={s}><Badge>{s}</Badge></li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-100 px-3.5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50"
          >
            <Eye className="size-4" aria-hidden /> Preview
          </button>
          <a
            href={driveViewUrl(driveLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-zinc-700 px-3.5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            View <ExternalLink className="size-4" aria-hidden />
            <span className="sr-only">(opens Google Drive in a new tab)</span>
          </a>
        </div>
      </div>

      {open && <PreviewDialog certificate={certificate} onClose={() => setOpen(false)} />}
    </article>
  );
}

/** Rendered in a portal on <body> so no ancestor can clip or re-contain it. */
function PreviewDialog({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  const { title, issuer, driveLink } = certificate;
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useDialog(true, onClose, dialogRef);

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-stretch justify-center sm:items-center sm:p-6">
      <div aria-hidden onClick={onClose} className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex h-dvh w-full flex-col overflow-hidden bg-zinc-950 outline-none sm:h-[min(85dvh,56rem)] sm:max-w-4xl sm:rounded-xl sm:border sm:border-zinc-800 sm:shadow-2xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-zinc-800 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5 sm:pt-3">
          <div className="min-w-0">
            <h3 id={titleId} className="truncate font-display text-base font-semibold text-zinc-50">{title}</h3>
            <p className="truncate text-xs text-zinc-500">{issuer}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={driveViewUrl(driveLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:text-zinc-50 sm:inline-flex"
            >
              Open in Drive <ExternalLink className="size-4" aria-hidden />
            </a>
            <button type="button" onClick={onClose} aria-label="Close preview"
                    className="rounded-md p-2.5 text-zinc-300 transition-colors hover:text-zinc-50">
              <X className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 bg-zinc-900">
          <iframe src={drivePreviewUrl(driveLink)} title={`${title} preview`} loading="lazy" className="absolute inset-0 size-full border-0" />
        </div>

        <p className="border-t border-zinc-800 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-xs text-zinc-500 sm:px-5 sm:pb-3">
          Preview not loading?{" "}
          <a href={driveViewUrl(driveLink)} target="_blank" rel="noopener noreferrer"
             className="text-zinc-300 underline underline-offset-2 hover:text-accent">
            Open it in Google Drive
          </a>
          .
        </p>
      </div>
    </div>,
    document.body,
  );
}
