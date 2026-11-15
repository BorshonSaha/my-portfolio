import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { certificates, education, experience, profile, projects, skillGroups } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Hero profile={profile} />
      <Projects projects={projects} />
      <Skills groups={skillGroups} />
      <Experience items={experience} />
      <Education items={education} />
      <Certifications certificates={certificates} />
      <Contact email={profile.email} />
    </>
  );
}
