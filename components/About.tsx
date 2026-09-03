import { GraduationCap, MapPin, Github, Rocket } from "lucide-react";

const cards = [
  { icon: GraduationCap, label: "University of Missouri, Columbia", detail: "M.S. Computer Science · 2025–2027" },
  { icon: MapPin, label: "Columbia, Missouri", detail: "Open to relocation for the right role" },
  { icon: Github, label: "github.com/Thakshithveera22", detail: "Projects, code, and technical work" },
  { icon: Rocket, label: "SDE & backend internships", detail: "Cloud applications · APIs · Applied ML" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">About</p>
        <h2 className="mb-8 font-serif text-3xl text-ink">Software that has to work</h2>

        {/*
          Fixed: original copy leaned on vague filler ("not collecting tools or
          filling space with buzzwords", "genuinely useful in real environments").
          Replaced with specific, concrete statements a recruiter can act on.
        */}
        <div className="mb-12 space-y-5 text-inkDim">
          <p>
            I'm a Master's student in Computer Science at the University of Missouri, focused on
            backend engineering, applied machine learning, and embedded systems.
          </p>
          <p>
            At PAAL Lab, I build field-deployed firmware and computer vision pipelines for
            agricultural monitoring — code that has to survive real weather, real power
            constraints, and real field conditions, not just a demo environment.
          </p>
          <p>
            I'm looking for SDE internships and full-time roles centered on backend systems,
            cloud infrastructure, and applied ML — where correctness and reliability matter as
            much as shipping speed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.label} className="flex items-start gap-3 bg-surface p-5">
              <c.icon size={18} className="mt-0.5 flex-shrink-0 text-teal" />
              <div>
                <div className="text-sm text-ink">{c.label}</div>
                <div className="text-xs text-inkDim">{c.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
