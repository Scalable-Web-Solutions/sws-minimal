"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer id="contact" className="border-t border-[--border]">
      {/* Large CTA */}
      <div className="py-24 md:py-32 bg-[--surface] border-b border-[--border]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <p
            className="text-[11vw] font-light leading-[0.88] text-[--foreground] mb-10"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Let&apos;s build
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              together.
            </span>
          </p>
          <a
            href="mailto:contact@scalableweb.solutions"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors border-b border-[--border] hover:border-[--accent] pb-1"
          >
            contact@scalableweb.solutions <ArrowRight className="size-3" />
          </a>
        </div>
      </div>

      {/* Footer columns */}
      <div className="py-16 bg-[--background]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-[--border]">
            {/* Newsletter */}
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-6 text-[--foreground] font-medium"
            >
                Newsletter
              </p>
              <p className="text-[11px] text-[--muted-light] mb-6 leading-[1.9]">
                Stay up to date on our latest thinking, work, and events.
              </p>
              {submitted ? (
                <p className="text-[11px] text-[--foreground]">
                  You&apos;re subscribed. Thank you.
                </p>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex border border-[--border] focus-within:border-[--accent] transition-colors duration-300"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3 text-[11px] outline-none bg-transparent placeholder:text-[--muted-light] text-[--foreground]"
                  />
                  <button
                    type="submit"
                    className="px-4 border-l border-[--border] hover:bg-[--surface] transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="size-3.5 text-[--muted-light]" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                Contact
              </p>
              <p className="text-[11px] text-[--muted-light] mb-2">
                United States
              </p>
              <a
                href="mailto:contact@scalableweb.solutions"
                className="text-[11px] text-[--foreground] hover:text-[--accent] transition-colors"
              >
                contact@scalableweb.solutions
              </a>
            </div>

            {/* Social */}
            <div>
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                Follow
              </p>
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/company/scalable-web-solutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--muted-light] hover:text-[--foreground] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[9px] tracking-[0.15em] uppercase text-[--muted-light]">
              © {new Date().getFullYear()} Scalable Web Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "DEI", "FR"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[9px] tracking-[0.15em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
