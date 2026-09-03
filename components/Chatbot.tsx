"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { text: string; from: "bot" | "user" };

const KB: { keys: string[]; reply: string }[] = [
  {
    keys: ["project", "projects", "built", "build"],
    reply:
      "My top project is field-tested firmware for a solar-powered agricultural sensor — deployed right now at PAAL Lab. I've also built a Vision + Data Intelligence chatbot platform (YOLOv8 + FastAPI) and an EEG-based seizure detection platform. Want details on any of those?",
  },
  {
    keys: ["firmware", "esp32", "battery", "lifepo4", "iot hardware"],
    reply:
      "That's the LiFePO4 field monitoring firmware — ESP32-C3 based, with state-of-charge estimation and a hysteresis-based low-power cutoff. It's genuinely deployed in the field, not just a demo. Check the Projects section for the repo link!",
  },
  {
    keys: ["vision", "chatbot platform", "yolo", "computer vision"],
    reply:
      "The Vision + Data Intelligence Chatbot Platform lets you ask natural-language questions over images and video. Built with YOLOv8 + OpenCV for detection and FastAPI for the backend, architected for 25,000+ dataset records. It's public on GitHub!",
  },
  {
    keys: ["eeg", "neural", "seizure", "brain", "signal"],
    reply:
      "That's the Neural Signal Intelligence Platform — EEG-based seizure detection trained on the CHB-MIT Scalp EEG Database, with a Random Forest classifier and SHAP explainability. Also public on GitHub!",
  },
  {
    keys: ["experience", "work history", "job", "role", "career"],
    reply:
      "Currently an ML & IoT Research Engineer at PAAL Lab, University of Missouri, plus a Teaching Assistant for Business Finance. Before that: Research Assistant at VIT and a Web Developer internship at Ethnus. Full breakdown in the Experience section!",
  },
  {
    keys: ["skill", "skills", "tech stack", "technologies", "know"],
    reply:
      "Core stack is Python, C++, and TypeScript, plus FastAPI/Flask for backends, PyTorch/scikit-learn for ML, ESP32 for embedded work, and React/Next.js on the frontend.",
  },
  {
    keys: ["certification", "certifications", "certs", "certified"],
    reply:
      "10 certifications — strongest is AWS Certified Cloud Practitioner, plus IoT, Ethical AI, and Threat Modeling. Full list in the Certifications section!",
  },
  {
    keys: ["education", "degree", "university", "college", "bachelor", "master"],
    reply:
      "Master's in Computer Science at the University of Missouri (2025–2027), and a Bachelor's in Computer Science and Engineering from Vellore Institute of Technology (2021–2025).",
  },
  {
    keys: ["contact", "email", "reach", "hire", "linkedin", "connect"],
    reply:
      "Email or LinkedIn is fastest — both are linked in the Contact section. Open to internships, research collabs, and full-time roles!",
  },
  { keys: ["hello", "hi", "hey"], reply: "Hey there! Ask me about projects, experience, skills, or how to get in touch." },
  { keys: ["thank", "thanks"], reply: "Anytime! Let me know if there's anything else." },
  {
    keys: ["intern", "internship", "hiring", "available"],
    reply:
      "Yes — open to both SDE internships and full-time engineering roles, especially backend systems, cloud, and applied ML. Reach out via the Contact section!",
  },
];

const FALLBACK =
  "Good question — I don't have a canned answer for that one. Try asking about projects, experience, skills, certifications, education, or how to get in touch.";

function findReply(text: string): string {
  const t = text.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some((k) => t.includes(k))) return entry.reply;
  }
  return FALLBACK;
}

const CHIPS = ["Projects", "Experience", "Skills", "Contact"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages]);

  function handleOpen() {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          from: "bot",
          text: "Hi! I'm a quick assistant that knows Veera's background — ask me about projects, experience, skills, or how to get in touch.",
        },
      ]);
    }
  }

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: findReply(text) }]);
    }, 350);
  }

  return (
    <>
      <button
        onClick={() => (open ? setOpen(false) : handleOpen())}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-bg shadow-lg shadow-teal/30 transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[460px] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
          <div className="flex items-center gap-3 border-b border-line bg-surfaceHi px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal font-serif text-xs text-bg">
              VN
            </div>
            <div>
              <div className="text-sm text-ink">Ask about Veera</div>
              <div className="flex items-center gap-1.5 text-xs text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Usually replies instantly
              </div>
            </div>
          </div>

          <div ref={bodyRef} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.from === "bot"
                    ? "self-start rounded-bl-sm bg-surfaceHi text-ink"
                    : "self-end rounded-br-sm bg-teal text-bg"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 px-4 pb-3">
            {CHIPS.map((c) => (
              <button
                key={c}
                onClick={() => send(c)}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-inkDim transition-colors hover:border-teal hover:text-teal"
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex gap-2 border-t border-line p-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask a question..."
              className="flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-teal"
            />
            <button
              onClick={() => send(input)}
              aria-label="Send"
              className="flex w-9 flex-shrink-0 items-center justify-center rounded-md bg-teal text-bg"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
