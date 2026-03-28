import { ArrowRight } from "lucide-react";
import crm from '@/public/CRM.png'

const article = {
  type: "Case Study",
  title: "Building an Enterprise CRM & Operations Platform for Recharge+ in Under a Month",
  description:
    "How we designed and delivered a full-stack operations platform — CRM, procurement, finance, AI assistant, and client portal — for a B2B wellness distributor in under 30 days.",
  date: "March 2026",
  image: crm.src,
  href: "/case-studies/recharge-plus",
};

export function LatestNews() {
  return (
    <section id="latest" className="py-24 border-t border-[--border] bg-[--surface]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-6 flex-1">
            <span className="text-xs tracking-[0.2em] uppercase shrink-0 text-[--foreground] font-medium">
              Latest
            </span>
            <div className="h-px flex-1 bg-[--border]" />
          </div>
        </div>

        {/* Full-width featured article */}
        <a href={article.href} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="aspect-16/10 overflow-hidden bg-[--border]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div>
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                {article.type}
              </p>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-light text-[--foreground] leading-[1.05] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {article.title}
              </h3>
              <p className="text-[11px] text-[--muted-light] leading-[1.9] mb-8 max-w-md">
                {article.description}
              </p>
              <div className="flex items-center justify-between max-w-md">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[--muted-light]">
                  {article.date}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase transition-colors text-[--muted-light] group-hover:text-[--foreground]"
                >
                  Read case study <ArrowRight className="size-3 -rotate-45" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
