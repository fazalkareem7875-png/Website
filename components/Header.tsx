"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import business from "@/data/business.json";
import content from "@/data/content.json";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-line shadow-soft" : "border-transparent"
      }`}
    >
      <div className="container-section flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-btn border border-accent bg-accent/10 font-heading text-lg font-bold text-accent">
            GJ
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-base font-semibold leading-tight text-ink md:text-lg">
              {business.shortName}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.14em] text-ink/50 sm:block">
              Aluminum · Glass · Wood Interior
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="btn-primary hidden sm:inline-flex">
            <Phone size={15} />
            {business.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-btn border border-line text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-white lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-section flex flex-col py-2">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-sm font-medium text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="btn-primary mt-3 mb-2 sm:hidden"
            >
              <Phone size={15} />
              {business.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
