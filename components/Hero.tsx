"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroStats } from "@/data/content";

/*
  Typewriter cycles between the two role phrases. On mount, we check
  prefers-reduced-motion — if set, we skip the animation entirely and
  render the full static line (both phrases together), so motion-sensitive
  users get the exact same information with zero animation, not a
  degraded experience.
*/
const PHRASES = ["ML & IoT research engineer.", "Full-stack builder."];
const STATIC_FALLBACK = "ML & IoT research engineer. Full-stack builder.";
const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

function useTypewriter() {
  const [text, setText] = useState(STATIC_FALLBACK);
  const [reduced, setReduced] = useState(true); // default to static until we can check

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(STATIC_FALLBACK);
      return;
    }
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = PHRASES[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, HOLD_MS);
          return;
        }
        timeoutId = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % PHRASES.length;
        }
        timeoutId = setTimeout(tick, DELETE_SPEED);
      }
    }

    timeoutId = setTimeout(tick, TYPE_SPEED);
    return () => clearTimeout(timeoutId);
  }, [reduced]);

  return { text, reduced };
}

export default function Hero() {
  const { text, reduced } = useTypewriter();

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-36">
      <svg
        className="pointer-events-none absolute -right-16 -top-10 w-[420px] opacity-30"
        viewBox="0 0 420 400"
        fill="none"
      >
        <path
          d="M420 20 H300 V100 H220 V180 H320 V260 H160 V340 H420"
          stroke="#4C86D6"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <circle cx="300" cy="20" r="4" fill="#4C86D6" opacity="0.7" />
        <circle cx="220" cy="100" r="4" fill="#4C86D6" opacity="0.7" />
        <circle cx="320" cy="180" r="4" fill="#4C86D6" opacity="0.7" />
      </svg>

      <div className="mx-auto max-w-3xl">
        <p className="mb-5 font-mono text-sm text-teal">
          Available for internships &amp; research roles
        </p>

        <h1
          className="mb-6 min-h-[4.5rem] font-serif text-4xl leading-tight text-ink md:min-h-[3.5rem] md:text-5xl"
          aria-label={STATIC_FALLBACK}
        >
          <span aria-hidden={!reduced}>{text}</span>
          {!reduced && (
            <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-teal motion-reduce:hidden" style={{ height: "0.9em", verticalAlign: "-0.1em" }} aria-hidden="true" />
          )}
        </h1>

        <p className="mb-10 max-w-xl text-lg text-inkDim">
          At the University of Missouri, I build field-deployed hardware and the full-stack
          systems that run it — from embedded firmware to production APIs.
        </p>

        <div className="mb-14 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded border border-teal bg-teal px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:bg-tealLight"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex flex-wrap gap-10">
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-2xl text-ink">{s.value}</div>
              <div className="text-sm text-inkDim">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
