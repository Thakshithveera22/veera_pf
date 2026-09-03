import { experience } from "@/data/content";

/*
  Format change: list → vertical timeline.
  Experience is inherently chronological and progression matters here
  (research assistant → intern → TA → current research engineer role).
  A connecting line with dots makes that progression visually obvious in
  half a second, versus a flat list where every role reads with equal
  visual weight regardless of recency. Current roles get a teal "current"
  dot so the most relevant entries pop first.
*/
export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Experience</p>
        <h2 className="mb-12 font-serif text-3xl text-ink">Career timeline</h2>

        <div className="relative border-l border-line pl-8">
          {experience.map((item, i) => (
            <div key={item.role + item.dates} className={i !== experience.length - 1 ? "mb-10" : ""}>
              <span
                className={`absolute -left-[5px] h-2.5 w-2.5 rounded-full ${
                  item.current ? "bg-teal" : "bg-line"
                }`}
                style={{ marginTop: "6px" }}
              />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-lg text-ink">{item.role}</h3>
                {item.current && (
                  <span className="rounded-full border border-teal/50 px-2 py-0.5 font-mono text-[0.65rem] text-teal">
                    current
                  </span>
                )}
              </div>
              <div className="mb-1 text-sm text-teal">{item.org}</div>
              <div className="mb-3 font-mono text-xs text-inkDim">{item.dates}</div>
              <ul className="list-disc space-y-1.5 pl-4 text-sm text-inkDim">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
