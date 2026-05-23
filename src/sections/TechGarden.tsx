import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Github } from "lucide-react";

type MousePoint = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

type TechLogo = {
  name: string;
  mark: string;
  x: number;
  y: number;
  size: number;
  depth: number;
  delay: number;
  color: string;
};

const logos: TechLogo[] = [
  { name: "React", mark: "React", x: 10, y: 24, size: 96, depth: 1.1, delay: 0, color: "#61DAFB" },
  { name: "Node.js", mark: "Node", x: 28, y: 56, size: 84, depth: 0.9, delay: 1.1, color: "#8CC84B" },
  { name: "MongoDB", mark: "Mongo", x: 68, y: 26, size: 90, depth: 1, delay: 0.7, color: "#47A248" },
  { name: "TypeScript", mark: "TS", x: 83, y: 60, size: 76, depth: 1.25, delay: 1.9, color: "#3178C6" },
  { name: "JavaScript", mark: "JS", x: 48, y: 44, size: 108, depth: 1.35, delay: 0.3, color: "#F7DF1E" },
  { name: "Firebase", mark: "Fire", x: 17, y: 72, size: 72, depth: 0.85, delay: 2.4, color: "#FFCA28" },
  { name: "Tailwind CSS", mark: "TW", x: 38, y: 18, size: 78, depth: 1.05, delay: 1.5, color: "#38BDF8" },
  { name: "Python", mark: "Py", x: 60, y: 73, size: 86, depth: 0.95, delay: 2, color: "#FFD43B" },
  { name: "Java", mark: "Java", x: 76, y: 43, size: 74, depth: 0.8, delay: 2.8, color: "#F89820" },
  { name: "GitHub", mark: "GitHub", x: 33, y: 82, size: 82, depth: 1.15, delay: 0.9, color: "#F5F5F5" },
  { name: "Framer Motion", mark: "FM", x: 53, y: 14, size: 70, depth: 1.3, delay: 2.2, color: "#A78BFA" },
  { name: "Next.js", mark: "Next", x: 91, y: 28, size: 88, depth: 1, delay: 1.3, color: "#FFFFFF" },
];

function TechPetal({ logo, mouse }: { logo: TechLogo; mouse: MousePoint }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 52, damping: 18, mass: 0.55 });
  const springY = useSpring(y, { stiffness: 52, damping: 18, mass: 0.55 });

  useAnimationFrame((time) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = mouse.x.get();
    const mouseY = mouse.y.get();
    const dx = centerX - mouseX;
    const dy = centerY - mouseY;
    const distance = Math.hypot(dx, dy);
    const repel = Math.max(0, 1 - distance / 210);
    const wind = Math.max(0, 1 - distance / 520);
    const phase = time / 1000 + logo.delay;

    x.set(
      Math.sin(phase * (0.42 + logo.depth * 0.08)) * 18 * logo.depth +
        (distance ? (dx / distance) * repel * 90 : 0) +
        (distance ? (-dx / distance) * wind * 18 * logo.depth : 0),
    );
    y.set(
      Math.cos(phase * (0.36 + logo.depth * 0.07)) * 22 * logo.depth +
        (distance ? (dy / distance) * repel * 90 : 0) +
        (distance ? (-dy / distance) * wind * 12 * logo.depth : 0),
    );
  });

  return (
    <motion.div
      ref={elementRef}
      className="tech-petal group"
      style={{
        left: `${logo.x}%`,
        top: `${logo.y}%`,
        width: logo.size,
        height: logo.size,
        x: springX,
        y: springY,
        ["--logo-glow" as string]: logo.color,
      }}
      initial={{ opacity: 0, scale: 0.55, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: logo.delay * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.28, zIndex: 20 }}
      aria-label={logo.name}
      title={logo.name}
    >
      <motion.div
        className="tech-petal-core"
        animate={{ rotate: [0, 4, -5, 0], scale: [1, 1.045, 0.985, 1] }}
        transition={{
          duration: 7 + logo.depth * 2,
          repeat: Infinity,
          delay: logo.delay,
          ease: "easeInOut",
        }}
      >
        {logo.name === "GitHub" ? (
          <Github className="h-[38%] w-[38%]" />
        ) : (
          <span className="tech-logo-mark">{logo.mark}</span>
        )}
      </motion.div>
      <span className="tech-ripple" />
    </motion.div>
  );
}

export function TechGardenCanvas({ className = "" }: { className?: string }) {
  const mouse = {
    x: useMotionValue(-1000),
    y: useMotionValue(-1000),
  };

  return (
    <div
      className={`tech-garden ${className}`}
      data-reveal
      onPointerMove={(event) => {
        mouse.x.set(event.clientX);
        mouse.y.set(event.clientY);
      }}
      onPointerLeave={() => {
        mouse.x.set(-1000);
        mouse.y.set(-1000);
      }}
    >
      <div className="garden-glow" />
      <div className="garden-particles">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} style={{ ["--i" as string]: index }} />
        ))}
      </div>
      {logos.map((logo) => (
        <TechPetal key={logo.name} logo={logo} mouse={mouse} />
      ))}
    </div>
  );
}

export function TechGarden() {
  return (
    <section className="section-shell py-10">
      <TechGardenCanvas />
    </section>
  );
}
