import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects" intro="Backend-heavy work with enough frontend to make it usable.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, problem, solution, stack, highlights, repoUrl, repos, demoUrl } = project;
  const repoLinks = repos ?? (repoUrl ? [{ label: "Source code", url: repoUrl }] : []);
  const hasMultipleRepos = repoLinks.length > 1;

  return (
    <article className="flex flex-col min-w-0 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 transition-colors hover:border-zinc-600">
      <header className="flex items-start justify-between gap-4">
        <h3 className="min-w-0 break-words font-display text-xl font-semibold text-zinc-50">{title}</h3>
        <div className="flex shrink-0 items-center gap-1">
          {repoLinks.map((repo) => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer"
              aria-label={`${title} ${repo.label.toLowerCase()} repository on GitHub`}
              className="flex items-center gap-1.5 rounded-md p-2 text-zinc-400 transition-colors hover:text-zinc-50">
              <GithubIcon className="size-[18px]" />
              {hasMultipleRepos && <span className="text-xs font-medium">{repo.label}</span>}
            </a>
          ))}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}
              className="rounded-md p-2 text-zinc-400 transition-colors hover:text-zinc-50">
              <ExternalLink className="size-[18px]" aria-hidden />
            </a>
          )}
        </div>
      </header>

      {/* <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-zinc-400">
        <p><span className="font-medium text-zinc-200">Problem: </span>{problem}</p>
        <p><span className="font-medium text-zinc-200">Solution: </span>{solution}</p>
      </div> */}

      <ul className="mt-5 space-y-2 text-sm text-zinc-300">
        {highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${title} tech stack`}>
        {stack.map((s) => (
          <li key={s}><Badge>{s}</Badge></li>
        ))}
      </ul>
    </article>
  );
}