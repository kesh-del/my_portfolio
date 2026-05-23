import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "../components/ui/button";

const projects = [
  {
    title: "CommunityBridge",
    description: "Community empowerment platform connecting rural and urban communities.",
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    features: ["Panchayat Document Request Portal", "Community services", "Authentication system"],
  },
  {
    title: "AI Portfolio Assistant",
    description: "AI-powered chatbot portfolio assistant for guided recruiter conversations.",
    tech: ["React", "AI APIs", "TypeScript", "Node.js"],
    features: ["Context-aware replies", "Lead capture", "Project discovery"],
  },
  {
    title: "Smart Task Manager",
    description: "Productivity platform with analytics dashboard and smart workflow summaries.",
    tech: ["MERN", "Charts", "REST APIs", "Tailwind"],
    features: ["Analytics dashboard", "Task automation", "Responsive workspace"],
  },
  {
    title: "Interactive 3D Developer Portfolio",
    description: "Three.js immersive developer experience with cinematic motion and scroll scenes.",
    tech: ["Three.js", "GSAP", "Framer Motion", "Vite"],
    features: ["3D grid", "Scroll storytelling", "Animated transitions"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
        <div className="max-w-3xl">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">
            Selected work with{" "}
            <span className="font-serif italic text-cyan-100">product-grade polish.</span>
          </h2>
        </div>
        <Button variant="ghost">View Archive <ArrowUpRight className="h-4 w-4" /></Button>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card group" data-reveal>
            <div className="relative mb-7 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-surface">
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-110"
                style={{
                  background:
                    index % 2 === 0
                      ? "radial-gradient(circle at 30% 30%, rgba(79,172,254,.38), transparent 32%), linear-gradient(135deg, #111, #06151a)"
                      : "radial-gradient(circle at 70% 25%, rgba(0,242,254,.30), transparent 34%), linear-gradient(135deg, #080808, #151515)",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl">
                Live preview
              </div>
            </div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 leading-7 text-mutedText">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1 text-sm text-mutedText">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-2 text-sm text-mutedText">
              {project.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <Button variant="ghost" size="sm"><Github className="h-4 w-4" /> GitHub</Button>
              <Button variant="gradient" size="sm">Live Demo <ArrowUpRight className="h-4 w-4" /></Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
