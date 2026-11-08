"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import content from "@/data/content.json";

const { hero } = content;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slides = hero.slides;

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5500
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-ink" aria-label="Hero">
      <div className="relative h-[85vh] min-h-[560px] w-full md:h-[92vh]">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Image
              src={slides[index].image}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        <div className="container-section relative flex h-full flex-col justify-center pb-20 pt-16">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-4 text-accent">
              Islamabad &amp; Rawalpindi · Open 24 Hours
            </p>
            <h1 className="text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label}
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink"
              >
                <Phone size={15} />
                {hero.secondaryCta.label}
              </a>
            </div>
          </motion.div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 md:bottom-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-accent" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
