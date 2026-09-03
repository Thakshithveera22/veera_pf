import { skillGroups } from "@/data/content";

/*
  Format change: the old site used one flat wall of tag pills with no
  hierarchy — ML/AI tools were missing entirely, and everything else read
  as equally important. Replacing it with grouped capability cards:
  - Each category gets its own labeled block, so a recruiter scanning for
    "does she know ML?" finds the answer in one glance instead of parsing
    a 30-pill wall.
  - The ML & AI group is visually emphasized (teal border) since it's the
    category most relevant to the roles being targeted, and the one that
    was previously missing.
*/
export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Skills</p>
        <h2 className="mb-10 font-serif text-3xl text-ink">Technical toolkit</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.category}
              className={`rounded border p-5 ${
                g.highlight ? "border-teal bg-teal/5" : "border-line bg-surface"
              }`}
            >
              <h3 className={`mb-3 text-sm font-medium ${g.highlight ? "text-teal" : "text-ink"}`}>
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-inkDim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
