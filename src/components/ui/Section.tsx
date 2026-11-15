interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mb-10 max-w-2xl">
        <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 leading-relaxed text-zinc-400">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
