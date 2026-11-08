"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export type Service = {
  slug: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  summary: string;
  items: string[];
};

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="group">
      <Link
        href={service.href}
        className="card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-ink">{service.title}</h3>
          <div className="mt-2 h-px w-10 bg-accent" />
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
            {service.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Learn more
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
