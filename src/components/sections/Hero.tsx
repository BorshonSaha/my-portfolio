import { ArrowDown, Mail } from "lucide-react";
import type { Profile } from "@/types";
import ApiPanel from "./ApiPanel";
import RotatingTagline from "./RotatingTagline";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-14 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24">
      <div>
        <p className="mb-5 text-sm text-zinc-500">{profile.role}</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <div className="mt-6 max-w-xl">
          <RotatingTagline phrases={profile.taglines} />
        </div>
        <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
          Full-stack proficiency with a backend core: API design, service integration and web architectures that scale.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50">
            View work <ArrowDown className="size-4" aria-hidden />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900">
            <Mail className="size-4" aria-hidden /> Contact me
          </a>
        </div>
      </div>
      <ApiPanel profile={profile} />
    </section>
  );
}
