"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/types";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export default function Experience({ items }: { items: ExperienceItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <Section id="experience" title="Experience" intro="Select a role to see what I shipped.">
      <ol className="relative ml-2 border-l border-zinc-800">
        {items.map((item) => {
          const open = item.id === openId;
          const panelId = `exp-${item.id}`;
          return (
            <li key={item.id} className="relative pb-8 pl-8 last:pb-0">
              <span aria-hidden className={"absolute -left-[5px] top-2 size-2.5 rounded-full border transition-colors " +
                (open ? "border-accent bg-accent" : "border-zinc-600 bg-zinc-950")} />
              <button type="button" aria-expanded={open} aria-controls={panelId}
                      onClick={() => setOpenId(open ? null : item.id)}
                      className="flex w-full items-start justify-between gap-4 rounded-lg text-left">
                <span>
                  <span className="block font-display text-xl font-semibold text-zinc-50">{item.role}</span>
                  <span className="mt-1 block text-zinc-400">{item.company} <span className="text-zinc-600">/</span> {item.period}</span>
                </span>
                <ChevronDown aria-hidden className={"mt-1.5 size-5 shrink-0 text-zinc-500 transition-transform " + (open ? "rotate-180" : "")} />
              </button>

              <div id={panelId} className={"grid transition-[grid-template-rows] duration-300 " + (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <div className="pt-4">
                    <p className="max-w-2xl leading-relaxed text-zinc-400">{item.summary}</p>
                    <ul className="mt-4 max-w-2xl space-y-2.5 text-[15px] text-zinc-300">
                      {item.impact.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((s) => (<li key={s}><Badge>{s}</Badge></li>))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
