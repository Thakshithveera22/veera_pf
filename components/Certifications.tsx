"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/content";

/*
  Format change: long single list with self-grading justifications →
  category filter tabs (kept from the prior pass — still the right fix for
  "10+ items in one column") PLUS flip cards. Front shows the credential
  name; clicking (not hover — hover-only interaction is invisible on touch
  devices and to keyboard users) flips to reveal issuer, year, and blurb.

  Each flip trigger is a real <button> with aria-pressed reflecting flip
  state, so it's keyboard-operable and announced correctly by screen
  readers. The 3D rotation itself is skipped under prefers-reduced-motion
  (global CSS rule forces near-zero transition duration) — content still
  toggles instantly, just without the animated rotation.

  credentialUrl is optional and unset for all current entries since no
  verifiable public credential links were confirmed — no link is
  fabricated. Add real URLs to data/content.ts as they become available.
*/
const categories = ["All", "Cloud & Systems", "AI & Data", "Foundational"] as const;

export default function Certifications() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const visible =
    active === "All" ? certifications : certifications.filter((c) => c.category === active);

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Certifications</p>
        <h1 className="mb-2 font-serif text-3xl text-ink">Credentials</h1>
        <p className="mb-8 text-inkDim">Click a card to see the issuer, date, and details.</p>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter certifications by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === c
                  ? "border-teal text-teal"
                  : "border-line text-inkDim hover:border-teal/50 hover:text-teal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visible.map((c) => {
            const isFlipped = !!flipped[c.name];
            return (
              <button
                key={c.name}
                onClick={() => setFlipped((f) => ({ ...f, [c.name]: !f[c.name] }))}
                aria-pressed={isFlipped}
                aria-label={`${c.name}. Click to ${isFlipped ? "see less" : "see issuer, year, and details"}`}
                className="group h-36 w-full text-left [perspective:1000px]"
              >
                <div
                  className="relative h-full w-full transition-transform duration-500 ease-out motion-reduce:transition-none [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 flex flex-col justify-between rounded border border-line bg-surface p-4 [backface-visibility:hidden]"
                  >
                    <div>
                      <div className="mb-2 inline-block rounded-full border border-teal/40 px-2 py-0.5 font-mono text-[0.65rem] text-teal">
                        {c.category}
                      </div>
                      <h3 className="text-sm text-ink">{c.name}</h3>
                    </div>
                    <span className="text-[0.7rem] text-inkDim">Click to flip &rarr;</span>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 flex flex-col justify-between rounded border border-teal/40 bg-bg p-4 [backface-visibility:hidden]"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <div>
                      <div className="mb-1 text-xs text-teal">{c.issuer}</div>
                      <div className="mb-2 font-mono text-[0.7rem] text-inkDim">{c.year}</div>
                      <p className="text-xs text-inkDim">{c.blurb}</p>
                    </div>
                    {c.credentialUrl && (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-[0.7rem] text-teal hover:underline"
                      >
                        View credential <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
