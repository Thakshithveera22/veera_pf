import { Layers, Boxes, Users } from "lucide-react";
import { leadership } from "@/data/content";

// Fixed: emoji bullets (🏆🧠🤝) read as casual against the formal tone
// elsewhere on the site. Swapped for consistent lucide-react line icons
// that match the visual language used in About and Projects.
const icons = [Layers, Boxes, Users];

export default function Leadership() {
  return (
    <section className="border-t border-line bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-teal">Beyond the code</p>
        <h2 className="mb-10 font-serif text-3xl text-ink">Leadership &amp; involvement</h2>

        <div className="space-y-6">
          {leadership.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-line text-teal">
                  <Icon size={16} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-medium text-ink">{item.title}</h3>
                  <p className="text-sm text-inkDim">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
