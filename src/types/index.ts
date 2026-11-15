export interface NavLink {
  label: string;
  href: `#${string}`;
}

export type SocialPlatform = "github" | "linkedin" | "xing";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface RepoLink {
  /** Short label, e.g. "Client" or "Server". */
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  /** Single repository (use `repos` when a project has more than one). */
  repoUrl?: string;
  /** Multiple repositories, e.g. client + server. Takes precedence over `repoUrl`. */
  repos?: RepoLink[];
  demoUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  /** Core, day-to-day tools get a stronger visual treatment. */
  core?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  impact: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  focus: string[];
}

export interface ResumeFile {
  lang: "en" | "de";
  label: string;
  /** Google Drive share link or bare file ID. */
  driveFileId: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  /** Free text, e.g. "Mar 2025". */
  issued: string;
  credentialId?: string;
  skills?: string[];
  /** Google Drive share link or bare file ID. */
  driveLink: string;
}

export interface Profile {
  name: string;
  role: string;
  taglines: string[];
  email: string;
  resumes: ResumeFile[];
  api: { endpoint: string; focus: string[]; stack: string[] };
}