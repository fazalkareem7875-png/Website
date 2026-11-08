import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import content from "@/data/content.json";
import services from "@/data/services.json";
import business from "@/data/business.json";

export const metadata = pageMetadata(
  "Services",
  "Aluminium windows & doors, glass work and wood interiors — fabricated to measure and fitted across Islamabad & Rawalpindi."
);

export default function ServicesPage() {
  const { servicesPage } = content;
  return (
    <>
      <section className="border-b border-line bg-bg-alt py-14 md:py-20">
        <div className="container-section">
          <p className="eyebrow mb-3">What we do</p>
          <h1 className="max-w-3xl text-4xl leading-tight text-ink md:text-5xl">
            {servicesPage.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            {servicesPage.intro}
          </p>
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <div className="card h-full p-6">
                    <h2 className="text-xl text-ink">{s.title}</h2>
                    <div className="mt-2 h-px w-10 bg-accent" />
                    <ul className="mt-4 space-y-2">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ink/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="mt-5 inline-block text-sm font-semibold text-accent hover:underline"
                    >
                      Details →
                    </Link>
                  </div>
                </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
