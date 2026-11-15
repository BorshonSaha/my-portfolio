import type { SocialLink } from "@/types";
import { SocialIcon } from "@/components/ui/Icons";

interface FooterProps {
  name: string;
  email: string;
  socials: SocialLink[];
}

export default function Footer({ name, email, socials }: FooterProps) {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <a href={`mailto:${email}`} className="break-all text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
            {email}
          </a>
          <p className="mt-2 text-sm text-zinc-500">Copyright © {new Date().getFullYear()} Developed by {name}.</p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.platform}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="block rounded-md p-2 text-zinc-500 transition-colors hover:text-zinc-100">
                <SocialIcon platform={s.platform} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
