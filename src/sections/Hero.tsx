import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ThreeGrid } from "../components/ThreeGrid";

const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"];
const roles = ["Full Stack Developer", "MERN Developer", "AI Explorer", "UI Engineer"];
const email = "jabhiabhi70750@gmail.com";
const linkedIn = "https://www.linkedin.com/in/j-abhishek-93a4182b7/";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-6 md:px-8">
      <ThreeGrid />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(5,5,5,0.44)_38%,#050505_78%)]" />
      <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/[0.045] px-3 py-3 shadow-soft backdrop-blur-2xl md:px-5">
        <a href="#home" className="flex items-center gap-2" aria-label="Abhishek Jonna home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-gradient p-px">
            <span className="grid h-full w-full place-items-center rounded-full bg-background text-sm font-bold">
              AJ
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-mutedText transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <Button asChild variant="ghost" size="sm">
          <a href="#contact">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-24">
        <div className="max-w-5xl" data-reveal>
          <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.34em] text-cyan-100">
            Freelance Developer • 2026
          </div>
          <h1 className="max-w-6xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white md:text-7xl lg:text-8xl">
            Crafting Digital Experiences That{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-accent-gradient">
              Feel Alive.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mutedText md:text-xl">
            I build scalable full-stack applications, interactive interfaces, and AI-powered
            digital products.
          </p>
          <div className="mt-5 flex h-10 items-center gap-3 overflow-hidden text-lg text-cyan-100">
            <span className="text-mutedText">Currently:</span>
            <motion.div
              animate={{ y: [0, -40, -80, -120, -160, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {roles.concat(roles[0]).map((role, index) => (
                <span key={`${role}-${index}`} className="h-10">
                  {role}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="gradient">
              <a href="#projects">
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="/resume.pdf" download>
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-9 flex items-center gap-3">
            {[
              [Github, "GitHub", "https://github.com/"],
              [Linkedin, "LinkedIn", linkedIn],
              [Twitter, "Twitter", "https://twitter.com/"],
              [Mail, "Gmail", `mailto:${email}`],
            ].map(([Icon, label, href]) => (
              <a
                key={label as string}
                href={href as string}
                aria-label={label as string}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-mutedText transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-white hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute bottom-16 right-10 hidden h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl lg:block"
        animate={{ x: [0, 30, 0], y: [0, -28, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
