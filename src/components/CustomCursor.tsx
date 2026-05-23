import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 420, damping: 36 });
  const y = useSpring(mouseY, { stiffness: 420, damping: 36 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    const targets = "a, button, [data-cursor='magnetic']";

    window.addEventListener("pointermove", move);
    document.querySelectorAll(targets).forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });

    return () => {
      window.removeEventListener("pointermove", move);
      document.querySelectorAll(targets).forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/70 mix-blend-screen md:block"
      style={{ x, y }}
      animate={{
        scale: active ? 1.85 : 1,
        backgroundColor: active ? "rgba(79,172,254,0.16)" : "rgba(79,172,254,0.04)",
      }}
    />
  );
}
