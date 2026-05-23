import { AnimatedBackground } from "../components/AnimatedBackground";
import { CustomCursor } from "../components/CustomCursor";
import { Preloader } from "../components/Preloader";
import { ScrollProgress } from "../components/ScrollProgress";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useLenis } from "../hooks/useLenis";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Services } from "../sections/Services";
import { Skills } from "../sections/Skills";
import { Testimonials } from "../sections/Testimonials";

export default function Home() {
  useLenis();
  useGsapReveal();

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <main className="overflow-hidden text-primaryText">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
