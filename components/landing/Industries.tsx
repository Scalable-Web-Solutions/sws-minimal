const services = [
  { num: "01", name: "Frontend Development" },
  { num: "02", name: "Backend Development" },
  { num: "03", name: "Mobile iOS / Android" },
  { num: "04", name: "Penetration Testing" },
  { num: "05", name: "Enterprise Solutions" },
  { num: "06", name: "Infrastructure Design" },
  { num: "07", name: "Product Strategy" },
  { num: "08", name: "Security Audits" },
  { num: "09", name: "API Development" },
  { num: "10", name: "Cloud Architecture" },
  { num: "11", name: "DevOps" },
  { num: "12", name: "Full-Stack Delivery" },
];

export function Industries() {
  return (
    <section id="services" className="py-24 border-t border-[--border] bg-[--surface]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.2em] uppercase shrink-0 text-[--foreground] font-medium">
            Services
          </span>
          <div className="h-px flex-1 bg-[--border]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[--border]">
          {services.map(({ num, name }) => (
            <div
              key={num}
              className="group bg-[--surface] hover:bg-[--accent-bg] px-6 py-8 cursor-pointer transition-colors duration-300"
            >
              <p
                className="text-sm font-light mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "var(--accent)",
                }}
              >
                {num}
              </p>
              <p
                className="text-xl font-light text-[--foreground] leading-snug group-hover:text-[--accent] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
