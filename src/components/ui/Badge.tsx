interface BadgeProps {
  children: React.ReactNode;
  /** Stronger treatment for core technologies. */
  strong?: boolean;
}

export default function Badge({ children, strong = false }: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center rounded-md border px-2.5 py-1 text-[13px] leading-none transition-colors " +
        (strong
          ? "border-accent-dim/60 bg-accent/10 text-accent"
          : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700")
      }
    >
      {children}
    </span>
  );
}
