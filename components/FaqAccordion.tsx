"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqs from "@/data/faqs.json";
import Reveal from "./Reveal";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-card border border-line bg-white shadow-soft">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 0.05}>
            <div>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-base font-semibold text-ink md:text-lg">
                  {item.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 text-sm leading-relaxed text-ink/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
