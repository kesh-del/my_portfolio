import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

const words = ["Build", "Innovate", "Scale", "Deploy"];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 2.1,
        ease: "power3.inOut",
        onUpdate() {
          const value = Math.round(this.targets()[0].value);
          setProgress(value);
          if (lineRef.current) lineRef.current.style.transform = `scaleX(${value / 100})`;
        },
        onComplete: () => setTimeout(() => setVisible(false), 280),
      },
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-background p-6 text-primaryText md:p-10"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,172,254,0.18),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(0,242,254,0.13),transparent_34%)]" />
          <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.35em] text-mutedText">
            <span>ABHISHEK JONNA</span>
            <span>Portfolio</span>
          </div>
          <div className="relative">
            <div className="mb-6 h-px w-full origin-left overflow-hidden bg-white/10">
              <div ref={lineRef} className="h-full w-full origin-left bg-accent-gradient" />
            </div>
            <div className="flex items-end justify-between gap-6">
              <div className="h-16 overflow-hidden text-5xl font-semibold md:text-8xl">
                <motion.div
                  animate={{ y: `-${Math.min(words.length - 1, Math.floor(progress / 26)) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {words.map((word) => (
                    <div key={word} className="h-16 md:h-28">
                      {word}
                    </div>
                  ))}
                </motion.div>
              </div>
              <span className="font-mono text-4xl text-cyan-200 md:text-7xl">
                {progress.toString().padStart(3, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
