import { profile } from "@/data/content";

// Fixed: was a hardcoded "© 2025" string. new Date().getFullYear() means
// this never needs a manual update again.
export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 text-xs text-inkDim sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div>
          {profile.email} · {profile.location}
        </div>
      </div>
    </footer>
  );
}
