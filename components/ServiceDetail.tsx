import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export type ServicePageData = {
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { title: string; text: string }[];
  cta: string;
};

export default function ServiceDetail({
  data,
  siblingLinks,
}: {
  data: ServicePageData;
  siblingLinks: { label: string; href: string }[];
}) {
  return (
    <>
      <section className="border-b border-line bg-bg-alt py-14 md:py-20">
        <div className="container-section">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-ink/50">
            <Link href="/services" className="hover:text-accent">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink/80">{data.title}</span>
          </nav>
          <h1 className="max-w-3xl text-4xl leading-tight text-ink md:text-5xl">
            {data.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            {data.intro}
          </p>
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="card mt-6 p-6">
              <p className="font-heading text-lg text-ink">
                Free measure &amp; quote
              </p>
              <p className="mt-2 text-sm text-ink/65">{data.cta}</p>
              <Link href="/contact" className="btn-primary mt-4">
                Get Free Quote
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-6">
            {data.sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="border-l-2 border-accent pl-5">
                  <h2 className="text-xl text-ink">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {s.text}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-medium text-accent">
                    <CheckCircle2 size={14} />
                    Made to measure · Fitted on site
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt py-12">
        <div className="container-section flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-ink/60">Other services:</p>
          <div className="flex flex-wrap gap-3">
            {siblingLinks.map((l) => (
              <Link key={l.href} href={l.href} className="btn-outline px-4 py-2.5">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
