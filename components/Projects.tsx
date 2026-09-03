"use client";

import { useMemo, useState } from "react";
import { Github, ChevronDown } from "lucide-react";
import { projects } from "@/data/content";

/*
  Format change: uniform 4-card grid → one featured project + a filterable
  supporting grid. Not all projects are equally strong or equally relevant
  — burying the field-deployed ESP32 firmware at the same visual weight as
  a class assignment undersells it. The featured slot also fits a spec
  strip a plain card can't.

  Filtering: built from each project's own tags rather than a separate
  fixed category list, so it can never drift out of sync with the data.
  Filter changes use a CSS opacity/transform transition (no animation
  library) for a smooth swap without extra JS dependency weight.

  Progressive disclosure: only the first 3 tags show by default. Extra
  tags are revealed via an explicit "+N more" toggle button — not a
  hover-only reveal, since hover-only content is invisible to touch and
  keyboard users. The toggle is a real <button> so it's keyboard-operable
  and screen-reader announced (aria-expanded).

  Every project links to its real repo. Projects without a confirmed
  public repo render with no button — no badge, no fallback link.
*/

const ALL = "All";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const categories = useMemo(() => {
    const set = new Set<string>();
    rest.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort()];
  }, [rest]);

  const [filter, setFilter] = useState(ALL);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const visible = filter === ALL ? rest : rest.filter((p) => p.tags.includes(filter));

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Projects</p>
        <h1 className="mb-2 font-serif text-3xl text-ink">Selected work</h1>
        <p className="mb-10 text-inkDim">
          Embedded systems, applied ML, and backend work — spanning field-deployed research
          hardware and deployable software.
        </p>

        {featured && (
          <div className="relative mb-8 overflow-hidden rounded border border-line bg-surface p-8">
            <p className="mb-2 font-mono text-xs text-teal">{featured.dates}</p>
            <h2 className="mb-3 font-serif text-xl text-ink">{featured.title}</h2>
            <p className="mb-6 max-w-xl text-sm text-inkDim">{featured.description}</p>

            {featured.spec && (
              <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 rounded border border-line bg-bg px-4 py-3 font-mono text-xs text-ink">
                {featured.spec.map((s) => (
                  <div key={s.label}>
                    <span className="text-inkDim">{s.label}: </span>
                    {s.value}
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-inkDim">
                    {t}
                  </span>
                ))}
              </div>
              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  <Github size={15} /> View Code
                </a>
              )}
            </div>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                filter === c
                  ? "border-teal text-teal"
                  : "border-line text-inkDim hover:border-teal/50 hover:text-teal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visible.map((p) => {
            const shown = p.tags.slice(0, 3);
            const hidden = p.tags.slice(3);
            const isExpanded = !!expanded[p.title];
            return (
              <div
                key={p.title}
                className="flex flex-col gap-3 rounded border border-line bg-surface p-6 transition-all duration-300 ease-out motion-reduce:transition-none animate-[fadein_0.3s_ease-out]"
              >
                <h3 className="font-serif text-base leading-snug text-ink">{p.title}</h3>
                <p className="flex-grow text-sm text-inkDim">{p.description}</p>

                <div className="flex flex-wrap items-center gap-2">
                  {shown.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-inkDim">
                      {t}
                    </span>
                  ))}
                  {isExpanded &&
                    hidden.map((t) => (
                      <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-inkDim">
                        {t}
                      </span>
                    ))}
                  {hidden.length > 0 && (
                    <button
                      onClick={() => setExpanded((e) => ({ ...e, [p.title]: !e[p.title] }))}
                      aria-expanded={isExpanded}
                      className="flex items-center gap-1 text-[0.7rem] text-teal hover:underline"
                    >
                      {isExpanded ? "less" : `+${hidden.length} more`}
                      <ChevronDown
                        size={11}
                        className={`transition-transform motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-md border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-teal hover:text-teal"
                  >
                    <Github size={14} /> View Code
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
