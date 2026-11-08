"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import stats from "@/data/stats.json";
import Reveal from "./Reveal";

type Stats = {
  projects: number | null;
  sqft: number | null;
  years: number | null;
  customers: number | null;
};

const statsData = stats as Stats;

const labels: Record<keyof Stats, string> = {
  projects: "Projects Done",
  sqft: "Sq. Ft Installed",
  years: "Years of Experience",
  customers: "Happy Customers",
};

function formatValue(n: number) {
  return n.toLocaleString("en-US");
}

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="px-4 py-8 text-center">
      <p className="font-heading text-4xl font-bold text-white md:text-5xl">
        {formatValue(display)}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const entries = (Object.keys(statsData) as (keyof Stats)[])
    .map((key) => ({ key, value: statsData[key] }))
    .filter(
      (e): e is { key: keyof Stats; value: number } =>
        typeof e.value === "number"
    );

  if (entries.length === 0) return null;

  return (
    <section className="bg-ink" aria-label="Statistics">
      <Reveal className="container-section grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
        {entries.map((e) => (
          <Counter key={e.key} value={e.value} label={labels[e.key]} />
        ))}
      </Reveal>
    </section>
  );
}
