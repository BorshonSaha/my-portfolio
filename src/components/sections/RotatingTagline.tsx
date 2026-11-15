"use client";

import { useEffect, useState } from "react";

export default function RotatingTagline({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (phrases.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % phrases.length), 3500);
    return () => window.clearInterval(id);
  }, [phrases.length]);

  return (
    <p key={i} aria-live="polite" className="tagline-in min-h-[5.5rem] text-lg leading-relaxed text-zinc-300 sm:min-h-[4.25rem] sm:text-xl">
      {phrases[i]}
    </p>
  );
}
