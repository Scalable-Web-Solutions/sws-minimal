const sectors = [
  { label: "Fintech", sub: "Financial Technology" },
  { label: "HealthTech", sub: "Health Sciences" },
  { label: "E-Commerce", sub: "Retail & Commerce" },
  { label: "SaaS", sub: "B2B Software" },
  { label: "GovTech", sub: "Public Sector" },
  { label: "Security", sub: "Cybersecurity" },
  { label: "Logistics", sub: "Supply Chain" },
  { label: "EdTech", sub: "Education" },
  { label: "Media", sub: "Publishing & Media" },
  { label: "Real Estate", sub: "PropTech" },
  { label: "Energy", sub: "CleanTech" },
  { label: "Startups", sub: "Early Stage" },
];

export function ClientLogos() {
  return (
    <section className="py-24 border-t border-[--border]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.2em] uppercase shrink-0 text-[--foreground] font-medium">
            Sectors We Serve
          </span>
          <div className="h-px flex-1 bg-[--border]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[--border]">
          {sectors.map(({ label, sub }) => (
            <div
              key={label}
              className="group bg-[--background] hover:bg-[--surface] px-5 py-8 flex flex-col gap-2 cursor-pointer transition-colors duration-300"
            >
              <span
                className="text-xl font-light text-[--foreground] group-hover:text-[--accent] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {label}
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-[--muted-light]">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
