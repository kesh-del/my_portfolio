import {
  Braces,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  type LucideIcon,
} from "lucide-react";
import { TechGardenCanvas } from "./TechGarden";

type SkillGroup = {
  title: string;
  Icon: LucideIcon;
  skills: string[];
  progress: number;
};

const groups: SkillGroup[] = [
  { title: "Frontend", Icon: Layers3, skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"], progress: 94 },
  { title: "Backend", Icon: Database, skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"], progress: 86 },
  { title: "Programming", Icon: Code2, skills: ["Java", "Python", "JavaScript", "C"], progress: 82 },
  { title: "Core CS", Icon: Braces, skills: ["DBMS", "Operating Systems", "Computer Networks", "DSA"], progress: 78 },
  { title: "Tools", Icon: GitBranch, skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"], progress: 90 },
  { title: "AI + Cloud", Icon: CloudCog, skills: ["Prompting", "APIs", "Automation", "Cloud Basics"], progress: 74 },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell skills-with-garden">
      <div className="skills-garden-backdrop" aria-hidden="true">
        <TechGardenCanvas className="tech-garden-background" />
      </div>
      <div className="relative z-10 mb-10 max-w-3xl" data-reveal>
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">
          Bento-grid toolkit for building{" "}
          <span className="font-serif italic text-cyan-100">fast digital products.</span>
        </h2>
      </div>
      <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(({ title, Icon, skills, progress }) => (
          <article key={title} className="skill-card group" data-reveal data-cursor="magnetic">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                <Icon className="h-5 w-5 transition group-hover:rotate-6 group-hover:scale-110" />
              </div>
              <span className="font-mono text-sm text-cyan-100">{progress}%</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-sm text-mutedText">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-accent-gradient" style={{ width: `${progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
