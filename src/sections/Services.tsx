import {
  Blocks,
  CodeXml,
  Cpu,
  Globe2,
  Palette,
  PlugZap,
} from "lucide-react";

const services = [
  ["Full Stack Web Development", CodeXml],
  ["Portfolio Website Development", Globe2],
  ["UI/UX Frontend Design", Palette],
  ["API Integration", PlugZap],
  ["Responsive Website Development", Blocks],
  ["Freelance Project Development", Cpu],
];

export function Services() {
  return (
    <section className="section-shell">
      <div className="mb-10 max-w-3xl" data-reveal>
        <p className="eyebrow">Services</p>
        <h2 className="section-title">
          Freelance services for founders, students, and{" "}
          <span className="font-serif italic text-cyan-100">growing teams.</span>
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, Icon]) => (
          <article key={title as string} className="service-card group" data-reveal>
            <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-cyan-100">
              <Icon className="h-5 w-5 transition group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold">{title as string}</h3>
            <p className="mt-4 leading-7 text-mutedText">
              Strategy, interface design, implementation, and handoff with a clean, scalable
              developer workflow.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
