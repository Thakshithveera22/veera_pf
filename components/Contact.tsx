import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/content";

// Fixed: original tel: link was coded as "tel:+" with no digits after the
// plus sign — visually showed the right number but the link itself was
// dead. profile.phone now holds the full digit string used in the href.
export default function Contact() {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phoneDisplay, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: "linkedin.com/in/nvvthakshith", href: profile.linkedin },
    { icon: Github, label: "github.com/Thakshithveera22", href: profile.github },
  ];

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Contact</p>
        <h2 className="mb-4 font-serif text-3xl text-ink">Let's work together</h2>
        <p className="mb-10 max-w-lg text-inkDim">
          Open to internships, research collaborations, and interesting engineering problems.
          Email or LinkedIn is the fastest way to reach me.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded border border-line bg-surface p-4 text-sm text-ink transition-colors hover:border-teal hover:text-teal"
            >
              <l.icon size={16} className="flex-shrink-0" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
