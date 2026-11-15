import { Mail } from "lucide-react";
import Section from "@/components/ui/Section";

export default function Contact({ email }: { email: string }) {
  return (
    <Section id="contact" title="Let's talk" intro="Open to backend and full-stack roles, and to interesting API problems. I reply within a couple of days.">
      <a
        href={`mailto:${email}`}
        className="inline-flex max-w-full items-center gap-3 rounded-lg border border-zinc-700 px-4 py-3.5 font-display text-lg text-zinc-50 transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-4 sm:text-2xl"
      >
        <Mail className="size-5 shrink-0 sm:size-6" aria-hidden />
        <span className="min-w-0 break-all">{email}</span>
      </a>
    </Section>
  );
}
