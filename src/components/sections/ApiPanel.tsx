import type { Profile } from "@/types";

/** Hero centrepiece: a faux API response that prints in line by line on load. */
export default function ApiPanel({ profile }: { profile: Profile }) {
  const q = (s: string) => <span className="text-emerald-300/90">&quot;{s}&quot;</span>;
  const k = (s: string) => <span className="text-accent">&quot;{s}&quot;</span>;
  const arr = (items: string[]) => (
    <>
      [{items.map((s, idx) => (<span key={s}>{idx > 0 && ", "}{q(s)}</span>))}]
    </>
  );

  const lines: React.ReactNode[] = [
    <>{"{"}</>,
    <>{"  "}{k("name")}: {q(profile.name)},</>,
    <>{"  "}{k("role")}: {q("Software Developer")},</>,
    <>{"  "}{k("company")}: {q("Walton Group")},</>,
    <>{"  "}{k("stack")}: {arr(profile.api.stack)},</>,
    <>{"  "}{k("focus")}: {arr(profile.api.focus)},</>,
    <>{"  "}{k("studying")}: {q("M.Sc. Applied Computer Science")}</>,
    <>{"}"}</>,
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-4 py-3 font-mono text-[13px]">
        <span className="truncate text-zinc-300">{profile.api.endpoint}</span>
        <span className="shrink-0 rounded bg-emerald-400/10 px-2 py-0.5 text-emerald-300">200 OK</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-zinc-400 sm:text-sm">
        {lines.map((line, idx) => (
          <div key={idx} className="line-in whitespace-pre" style={{ animationDelay: `${300 + idx * 180}ms` }}>
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
}
