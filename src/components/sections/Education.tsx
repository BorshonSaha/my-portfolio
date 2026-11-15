import type { EducationItem } from "@/types";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export default function Education({ items }: { items: EducationItem[] }) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((e) => (
          <article key={e.id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 transition-colors hover:border-zinc-600">
            <h3 className="font-display text-xl font-semibold text-zinc-50">{e.degree}</h3>
            <p className="mt-2 text-zinc-300">{e.institution}</p>
            <p className="mt-1 text-sm text-zinc-500">{e.location} / {e.period}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core focus areas">
              {e.focus.map((f) => (<li key={f}><Badge>{f}</Badge></li>))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
