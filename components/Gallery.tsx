"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import gallery from "@/data/gallery.json";
import Reveal from "./Reveal";

const categories = [
  "All",
  ...Array.from(new Set(gallery.map((g) => g.category))),
] as const;

export default function Gallery({
  limit,
  showFilters = true,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered =
      filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % items.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-btn border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-white text-ink/70 hover:border-ink/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.src} delay={(i % 4) * 0.05}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-card border border-line bg-bg-alt"
              aria-label={`View larger: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Expand size={13} />
                  {item.category}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {items.length === 0 && (
        <p className="py-16 text-center text-ink/50">
          No photos in this category yet.
        </p>
      )}

      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={24} />
          </button>
          <figure
            className="relative max-h-[82vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={items[active].src}
                alt={items[active].alt}
                fill
                priority
                sizes="100vw"
                className="rounded-card object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {items[active].alt} — {items[active].category}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
