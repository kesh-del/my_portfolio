import { Sparkles } from "lucide-react";
import profileImage from "../../images/myprofile.jpg.jpeg";

const stats = ["15+ Projects", "10+ Technologies", "3+ Years Learning", "100% Passion Driven"];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md" data-reveal data-parallax>
          <div className="absolute -inset-1 rounded-[2rem] bg-accent-gradient opacity-70 blur-xl" />
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(79,172,254,0.25),transparent_45%)]" />
            <img
              src={profileImage}
              alt="Portrait of Abhishek Jonna"
              className="h-full w-full object-cover object-[50%_28%] saturate-[0.92]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-cyan-300/10 mix-blend-soft-light" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" /> Andhra Pradesh, India
              </div>
              <p className="mt-2 text-2xl font-semibold">ABHISHEK JONNA</p>
            </div>
          </div>
        </div>
        <div data-reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            A developer shaping ideas into{" "}
            <span className="font-serif italic text-cyan-100">clean systems.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-mutedText">
            I am a B.Tech IT student with a serious passion for software development,
            modern UI systems, and intelligent products. My work blends full-stack
            engineering, AI-integrated platforms, cloud curiosity, and freelance project
            experience into digital experiences that feel polished and scalable.
          </p>
          <p className="mt-4 text-lg leading-8 text-mutedText">
            I am preparing for GATE 2027 while building production-minded projects, studying
            core computer science, and constantly refining how interfaces move, respond, and
            communicate.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">{stat.split(" ")[0]}</p>
                <p className="mt-1 text-sm text-mutedText">{stat.split(" ").slice(1).join(" ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
