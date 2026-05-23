import { ArrowUpRight, Calendar, Github, Linkedin, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../components/ui/button";

const email = "jabhiabhi70750@gmail.com";
const linkedIn = "https://www.linkedin.com/in/j-abhishek-93a4182b7/";

export function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contactEmail: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const openForm = () => {
    setShowForm(true);
    window.setTimeout(() => {
      document.getElementById("meeting-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = [
      "Hi Abhishek,",
      "",
      "I would like to discuss a project or meeting.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.contactEmail}`,
      `Project type: ${form.projectType}`,
      `Budget / timeline: ${form.timeline}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-shell pb-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card px-6 py-16 shadow-soft md:px-12 md:py-24" data-reveal>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[90px]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="text-center lg:text-left">
            <p className="eyebrow justify-center lg:justify-start">Contact</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-7xl">
              Let’s Build Something{" "}
              <span className="font-serif italic text-transparent bg-clip-text bg-accent-gradient">
                Amazing Together.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mutedText">
              Open for freelance opportunities, portfolio websites, full-stack builds, API
              integrations, and AI-powered product ideas.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button type="button" variant="gradient" onClick={openForm}>
                Hire Me <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="ghost">
                <a href={`mailto:${email}`}>Email Me <Mail className="h-4 w-4" /></a>
              </Button>
              <Button type="button" variant="ghost" onClick={openForm}>
                Schedule Meeting <Calendar className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-mutedText lg:justify-start">
              <a className="contact-pill" href={`mailto:${email}`}><Mail className="h-4 w-4" /> {email}</a>
              <a className="contact-pill" href={linkedIn} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a className="contact-pill" href="https://github.com/" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            </div>
          </div>
          <div id="meeting-form" className="min-h-[96px]">
            <AnimatePresence mode="wait">
              {showForm ? (
                <motion.form
                  key="meeting-form"
                  onSubmit={submitRequest}
                  className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-left backdrop-blur-xl md:p-6"
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Name</span>
                      <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" />
                    </label>
                    <label className="form-field">
                      <span>Email</span>
                      <input required type="email" value={form.contactEmail} onChange={(event) => updateField("contactEmail", event.target.value)} placeholder="you@example.com" />
                    </label>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Project Type</span>
                      <input required value={form.projectType} onChange={(event) => updateField("projectType", event.target.value)} placeholder="Portfolio, app, API..." />
                    </label>
                    <label className="form-field">
                      <span>Budget / Timeline</span>
                      <input value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)} placeholder="Budget, deadline, meeting time" />
                    </label>
                  </div>
                  <label className="form-field mt-4">
                    <span>Project Details</span>
                    <textarea required rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell me what you want to build..." />
                  </label>
                  <Button type="submit" variant="gradient" className="mt-5 w-full">
                    Send Meeting Request <Mail className="h-4 w-4" />
                  </Button>
                  <p className="mt-4 text-center text-sm text-mutedText">
                    The form opens a ready-to-send email addressed to {email}.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="meeting-placeholder"
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6 text-center backdrop-blur-xl"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Calendar className="mx-auto h-6 w-6 text-cyan-100" />
                  <p className="mt-4 text-lg font-semibold text-white">Ready to discuss a project?</p>
                  <p className="mt-2 text-sm leading-6 text-mutedText">
                    Tap Schedule Meeting to open the form.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
