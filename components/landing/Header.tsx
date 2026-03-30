"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[--background]/95 backdrop-blur-sm border-b border-[--border]"
          : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[10px] tracking-[0.3em] uppercase text-[--foreground]"
        >
          Scalable Web Solutions
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] tracking-[0.2em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="size-4 text-[--foreground]" />
          ) : (
            <Menu className="size-4 text-[--foreground]" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[--border] bg-[--surface]/88 backdrop-blur-xl shadow-[0_18px_60px_rgba(23,20,17,0.12)]">
          <nav className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
