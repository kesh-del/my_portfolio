import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const email = "jabhiabhi70750@gmail.com";
const linkedIn = "https://www.linkedin.com/in/j-abhishek-93a4182b7/";
const socials = [
  { Icon: Github, href: "https://github.com/", label: "GitHub" },
  { Icon: Linkedin, href: linkedIn, label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { Icon: Mail, href: `mailto:${email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-mutedText md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <p>© 2026 ABHISHEK JONNA. All rights reserved.</p>
        <div className="flex items-center gap-2 text-sm text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
          Available for freelance opportunities.
        </div>
        <div className="flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:border-cyan-300/50 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
