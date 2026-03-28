import { ArrowRight } from "lucide-react";

const featured = [
  "Recharge+",
  "Meridian Health Foundation",
  "Apex Sourcing Group",
];

export function FeaturedClients() {
  return (
    <section id="clients" className="py-24 border-t border-[--border]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.2em] uppercase shrink-0 text-[--foreground] font-medium">
            Featured Clients
          </span>
          <div className="h-px flex-1 bg-[--border]" />
        </div>

        {/* Numbered list */}
        <ul>
          {featured.map((client, i) => (
            <li
              key={client}
              className="group flex items-center justify-between border-t border-[--border] py-5 md:py-6 cursor-pointer hover:bg-[--accent-bg] -mx-4 px-4 md:-mx-6 md:px-6 transition-all duration-300 last:border-b"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span
                  className="text-xs font-light shrink-0 tabular-nums"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "var(--accent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-[--foreground]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {client}
                </span>
              </div>
              <ArrowRight
                className="size-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 shrink-0"
                style={{ color: "var(--accent)" }}
              />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            href="#clients"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors"
          >
            View all clients <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
