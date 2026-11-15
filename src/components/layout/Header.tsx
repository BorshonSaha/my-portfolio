"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import type { NavLink, ResumeFile, SocialLink } from "@/types";
import { SocialIcon } from "@/components/ui/Icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ResumeMenu from "@/components/ui/ResumeMenu";
import MobileDrawer from "./MobileDrawer";

interface HeaderProps {
  links: NavLink[];
  socials: SocialLink[];
  resumes: ResumeFile[];
}

export default function Header({ links, socials, resumes }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // If the viewport grows past the mobile breakpoint (rotate / resize), close the drawer
  // so the scroll lock can never get stuck behind a hidden menu.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        className={
          "sticky top-0 z-40 border-b backdrop-blur-md transition-colors " +
          (scrolled ? "border-zinc-800 bg-zinc-950/80" : "border-transparent bg-zinc-950/40")
        }
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-zinc-50">
            Borshon Saha
          </a>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-md px-2.5 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-50">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            {/* Socials move to the drawer and footer below xl to keep the bar from crowding. */}
            <div className="hidden items-center gap-1 xl:flex">
              {socials.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="rounded-md p-2 text-zinc-400 transition-colors hover:text-zinc-50">
                  <SocialIcon platform={s.platform} className="size-[18px]" />
                </a>
              ))}
            </div>
            <ThemeToggle />
            <ResumeMenu resumes={resumes} />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-md p-2 text-zinc-300 transition-colors hover:text-zinc-50"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of <header>, not a child: backdrop-filter on the header would otherwise
          become the containing block for this fixed overlay and clip it to 64px. */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} links={links} socials={socials} resumes={resumes} />
    </>
  );
}
