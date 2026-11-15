"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

/**
 * No React state on purpose: the <html data-theme> attribute is the single
 * source of truth (set before paint by the script in layout.tsx), and CSS
 * decides which icon shows. This avoids hydration mismatches and icon flicker.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={"rounded-md p-2.5 text-zinc-400 transition-colors hover:text-zinc-50 " + className}
    >
      <Sun aria-hidden className="size-[18px] [[data-theme=light]_&]:hidden" />
      <Moon aria-hidden className="hidden size-[18px] [[data-theme=light]_&]:block" />
    </button>
  );
}
