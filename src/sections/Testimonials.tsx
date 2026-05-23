const testimonials = [
  "Abhishek turns rough ideas into clean, usable interfaces with impressive speed.",
  "The project felt premium, responsive, and easy to present to stakeholders.",
  "Clear communication, thoughtful UI decisions, and solid full-stack execution.",
  "A strong collaborator for student projects, startup MVPs, and portfolio builds.",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="section-shell py-0" data-reveal>
        <p className="eyebrow">Testimonials</p>
        <h2 className="section-title max-w-3xl">
          Feedback from collaborations that valued{" "}
          <span className="font-serif italic text-cyan-100">clarity and craft.</span>
        </h2>
      </div>
      <div className="testimonial-marquee mt-12">
        <div className="testimonial-track">
          {[0, 1].map((set) => (
            <div className="testimonial-set" key={set} aria-hidden={set === 1}>
              {testimonials.map((quote) => (
                <figure key={`${quote}-${set}`} className="testimonial-card">
                  <blockquote>"{quote}"</blockquote>
                  <figcaption>Project collaborator</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
