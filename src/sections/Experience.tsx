const timeline = [
  "Started coding journey",
  "Learned frontend development",
  "Built MERN stack projects",
  "Started freelancing",
  "Exploring AI and cloud technologies",
  "Preparing for software engineering career",
];

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mb-12 max-w-3xl" data-reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">
          A focused journey toward{" "}
          <span className="font-serif italic text-cyan-100">software engineering impact.</span>
        </h2>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-white/20 to-transparent md:left-1/2" />
        {timeline.map((item, index) => (
          <div
            key={item}
            className={`relative mb-8 grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:text-right"}`}
            data-reveal
          >
            <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
              <div className="ml-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:ml-0">
                <span className="font-mono text-sm text-cyan-100">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-mutedText">
                  Building practical skill, product taste, and engineering discipline through
                  projects, study, and freelance execution.
                </p>
              </div>
            </div>
            <div className="absolute left-[9px] top-7 h-3 w-3 rounded-full bg-cyan-200 shadow-glow md:left-1/2 md:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
