import type { SkillGroup } from "@/types";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

interface SkillsProps {
  groups: SkillGroup[];
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills" title="Skills" intro="Highlighted chips are what I use every day.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.id} className="bg-zinc-950 p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold text-zinc-50">{g.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{g.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <Badge strong={s.core}>{s.name}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
