"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import type { NavLink, ResumeFile, SocialLink } from "@/types";
import { SocialIcon } from "@/components/ui/Icons";
import { ResumeList } from "@/components/ui/ResumeMenu";
import { useDialog } from "@/hooks/useDialog";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  socials: SocialLink[];
  resumes: ResumeFile[];
}

export default function MobileDrawer({ open, onClose, links, socials, resumes }: MobileDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  useDialog(open, onClose, panelRef);

  return (
    // `inert` removes the closed drawer from tab order and the accessibility tree.
    <div className={"fixed inset-0 z-[60] lg:hidden " + (open ? "" : "pointer-events-none")} inert={!open}>
      <div
        aria-hidden
        onClick={onClose}
        className={"absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 " + (open ? "opacity-100" : "opacity-0")}
      />
      <aside
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        className={
          "absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col overflow-y-auto overscroll-contain border-l border-zinc-800 bg-zinc-950 px-5 shadow-2xl outline-none transition-transform duration-300 ease-out " +
          "pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="mb-4 ml-auto rounded-md p-2.5 text-zinc-300 transition-colors hover:text-zinc-50"
        >
          <X className="size-6" aria-hidden />
        </button>

        <nav aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="block border-b border-zinc-900 py-4 font-display text-xl text-zinc-200 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ResumeList resumes={resumes} onSelect={onClose} />

        <div className="mt-auto flex gap-2 pt-8">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-md border border-zinc-800 p-3 text-zinc-300 transition-colors hover:text-zinc-50"
            >
              <SocialIcon platform={s.platform} className="size-5" />
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
