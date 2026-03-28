export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-36 pt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 w-full">
        {/* Top label bar */}
        <div className="anim-1 flex items-center gap-6 mb-10 md:mb-14">
          <span
            className="text-[9px] tracking-[0.4em] uppercase shrink-0"
            style={{ color: "var(--accent)" }}
          >
            8+ Years of Experience
          </span>
          <div className="h-px flex-1 bg-[--border]" />
          <span className="text-[9px] tracking-[0.25em] uppercase text-[--muted-light] shrink-0 hidden sm:block">
            Software & Operations Scaling done right
          </span>
        </div>

        {/* Headline */}
        <div className="anim-2">
          <h1
            className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.87] font-light tracking-[-0.02em] select-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span className="block text-[--foreground]">Consulting</span>
            <span
              className="block text-right italic"
              style={{ color: "var(--muted-light)" }}
            >
              done
            </span>
            <span className="block text-[--foreground]">right.</span>
          </h1>
        </div>

        {/* Meta row */}
        <div className="anim-3 mt-14 pt-8 border-t border-[--border] flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p className="text-[11px] text-[--muted-light] max-w-sm leading-[1.9] tracking-wide">
            Custom software delivery across product, infrastructure, and
            security. Eight years of senior-level execution for ambitious
            companies.
          </p>

          <div className="flex items-end gap-12 shrink-0">
            {[
              ["8+", "Years"],
              ["50+", "Projects"],
              ["12", "Sectors"],
            ].map(([n, l]) => (
              <div key={l}>
                <p
                  className="text-5xl font-light leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "var(--accent)",
                  }}
                >
                  {n}
                </p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[--muted-light] mt-2">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
