import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Education</p>
        <h2 className="mb-10 font-serif text-3xl text-ink">Academic background</h2>

        <div className="space-y-8">
          {education.map((e) => (
            <div key={e.degree} className="border-l-2 border-teal pl-6">
              <h3 className="font-serif text-lg text-ink">{e.degree}</h3>
              <div className="text-sm text-teal">{e.org}</div>
              <div className="font-mono text-xs text-inkDim">{e.dates}</div>
              <div className="mt-1.5 text-sm text-inkDim">{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
