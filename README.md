# Portfolio Rebuild — Verified Integration Guide

## Verification actually performed (not assumed)

This was checked with a real TypeScript compiler and a real Next.js production
build in a sandboxed environment, not just read over:

- `npx tsc --noEmit` — **0 errors** across all 15 files (confirmed via
  `--listFiles` that every component and data file was actually type-checked,
  not silently skipped).
- `npx next build` — **succeeded**, static pages generated, correct
  server/client component boundaries (Nav and Certifications are the only
  `"use client"` components — everything else stays server-rendered).
- The only build failure encountered was Google Fonts being unreachable from
  the sandbox network (no outbound access to fonts.googleapis.com there).
  This is a sandbox limitation, not a code bug — confirmed by temporarily
  swapping to system fonts, which built clean, then restoring the real
  `next/font/google` setup. **On your machine, with normal internet access,
  this will fetch and build normally.**

## File structure — App Router (not Pages Router)

This uses the **App Router** convention: `app/layout.tsx` + `app/page.tsx`,
not `pages/index.tsx` or `pages/_app.tsx`. If your existing project uses the
Pages Router instead, say so and the structure needs adjusting — check by
looking for whether you have a `pages/` or `app/` directory today.

## 1. Install dependencies

Only one dependency beyond a standard Next.js + TypeScript + Tailwind setup:
```bash
npm install lucide-react
```

If your project doesn't already have Tailwind/TypeScript set up (unlikely,
since your live site already uses this stack), the full set would be:
```bash
npm install next react react-dom
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer lucide-react
```

## 2. Drop these files into your existing Next.js project

```
app/layout.tsx        → replace your existing layout (or merge the font setup in)
app/page.tsx           → replace your existing home page
app/globals.css        → merge into your existing globals.css
tailwind.config.ts     → merge the `colors` and `fontFamily` extensions into your existing config
data/content.ts         → new file — all site content lives here
components/*.tsx        → new files — one component per section
```

## 3. Verify path aliases

These files import using `@/components/...` and `@/data/...`. Confirm your
`tsconfig.json` has:
```json
"paths": { "@/*": ["./*"] }
```
This is the Next.js default `create-next-app` setting — you very likely
already have it since your existing project builds successfully.

## 4. Run it

```bash
npm run dev
```

---

## What changed, section by section

- **Nav** — "Certs" label now reads "Certifications," matching the section heading.
- **Hero** — bio rewritten from one 40+ word run-on sentence into a short, direct hook. "2 Hands-on Roles" replaced with GPA (3.95) and shipped-project count (7).
- **About** — vague filler cut ("not collecting tools or filling space with buzzwords" etc.), replaced with specific, concrete statements.
- **Skills** — flat pill wall → grouped capability cards. ML & AI tools (PyTorch, YOLO, scikit-learn, computer vision) added and visually highlighted with a teal border.
- **Experience** — flat list → vertical timeline with "current" markers. Added PAAL Lab, Finance 2000 TA, and MGMT 4140W TA roles. Diabetes-project bullet reworded distinctly in Experience vs. Projects — verified not word-for-word identical.
- **Projects** — uniform grid → featured project + supporting grid. Every GitHub link points to its real repo (verified 3 confirmed-public repos have `githubUrl` set; the other 4 show "Request access" rather than a guessed link). Added Vision Chatbot Platform, Neural Signal Platform, ESP32 firmware.
- **Certifications** — long list with self-grading justifications → filterable category tabs (Cloud & Systems / AI & Data / Foundational) with confident, factual one-liners.
- **Leadership** — emoji bullets → lucide-react icons matching the site's tone.
- **Contact** — phone `tel:` link fixed — was `tel:+` with no digits; now uses the full number.
- **Footer** — hardcoded `© 2025` replaced with `new Date().getFullYear()`.
- **Chatbot** — the FAQ chat widget from your live site (visible as a 💬 icon there) is rebuilt as a proper `Chatbot.tsx` client component with hand-written, specific answers about your projects/experience/skills — not generic filler.

---

## Manual testing checklist (run in browser after dropping this in)

**Layout & responsiveness**
- [ ] Resize browser from mobile (375px) → tablet (768px) → desktop (1440px); confirm no horizontal scroll or overlapping text at any width
- [ ] Nav mobile menu (hamburger icon) opens/closes correctly below `md` breakpoint
- [ ] All section padding/spacing looks consistent, not cramped on mobile

**Links — click every one**
- [ ] Nav links scroll to the correct section (About, Skills, Experience, Projects, Certifications, Contact)
- [ ] Hero "View Projects" and "Get in Touch" buttons scroll correctly
- [ ] All 3 public project "View source" links open the correct GitHub repo in a new tab
- [ ] The 4 "Request access" links scroll to Contact (not a dead link)
- [ ] Contact page: Email link opens mail client with correct address
- [ ] **Contact page: phone link — tap/click it on an actual phone or check the href in devtools; confirm it's `tel:+15715716586` with all digits, not just `tel:+`**
- [ ] LinkedIn and GitHub contact links open the correct profiles

**Content accuracy**
- [ ] Experience section shows PAAL Lab, Finance 2000 TA, and MGMT 4140W TA roles with correct dates
- [ ] Certifications tabs filter correctly when clicked (All / Cloud & Systems / AI & Data / Foundational)
- [ ] Skills section shows the ML & AI group with a visually distinct highlight
- [ ] Footer shows the current year automatically (will keep updating in future years without a code change)

**Chat widget**
- [ ] Teal circular button, bottom-right corner, on every scroll position
- [ ] Click to open — greeting message appears
- [ ] Click a suggestion chip (Projects/Experience/Skills/Contact) — relevant answer appears
- [ ] Type a free-text question (e.g. "what's your tech stack") and press Enter — relevant answer appears
- [ ] Close button (X) closes the panel; reopening preserves conversation history

**Cross-browser**
- [ ] Quick check in at least Chrome and Safari/Firefox — fonts and spacing should render consistently
