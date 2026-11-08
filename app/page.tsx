import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import content from "@/data/content.json";
import services from "@/data/services.json";
import business from "@/data/business.json";

export const metadata = pageMetadata(
  business.name,
  "Aluminium windows, glass work and wood interiors in Islamabad & Rawalpindi. Made to measure, fitted on site. Open 24 hours."
);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-b border-line bg-white" aria-label="Trust points">
        <div className="container-section grid grid-cols-1 divide-y divide-line py-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {content.trustStrip.map((t) => (
            <div key={t.label} className="px-4 py-5 text-center">
              <p className="font-heading text-lg font-semibold text-ink">
                {t.value}
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-ink/50">
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="container-section py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">About the workshop</p>
            <h2 className="text-3xl leading-tight text-ink md:text-4xl">
              One workshop. All materials. Made to measure.
            </h2>
            <div className="mt-4 h-px w-16 bg-accent" />
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              {content.aboutSnippet.text}
            </p>
            <Link
              href={content.aboutSnippet.href}
              className="btn-outline mt-7 inline-flex"
            >
              {content.aboutSnippet.linkLabel}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
              <Image
                src={content.about.image}
                alt={content.about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 hidden rounded-card border border-line bg-white px-6 py-4 shadow-soft-lg sm:block">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Clock size={15} className="text-accent" />
                {business.hours}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-ink/60">
                <MapPin size={15} className="text-accent" />
                {business.serviceArea}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <SectionHeading
            eyebrow="What we do"
            title="Services"
            intro="Aluminium, glass and wood — fabricated in one workshop and fitted by one team."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Gallery preview */}
      <section className="container-section py-16 md:py-24">
        <SectionHeading
          eyebrow="Recent work"
          title="Project Gallery"
          intro={content.galleryPage.intro}
        />
        <Gallery limit={8} showFilters={false} />
        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-outline">
            View full gallery
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built properly, start to finish"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-btn border border-accent/30 bg-accent/10 text-accent">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-section py-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Our Process"
          intro="From first message to final handover in four steps."
        />
        <ol className="grid gap-6 md:grid-cols-4">
          {content.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <li className="relative h-full rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="font-heading text-3xl font-bold text-accent/30">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {p.text}
                </p>
                {i < content.process.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-accent md:block"
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <SectionHeading
            eyebrow="Testimonials"
            title="What customers say"
          />
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-section py-16 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FaqAccordion />
      </section>

      {/* Map + contact form */}
      <section id="contact" className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <SectionHeading
            eyebrow="Get in touch"
            title="Request a Free Quote"
            intro={content.contactPage.intro}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="card overflow-hidden p-0">
              <div className="bg-white p-6 md:p-8">
                <h3 className="text-xl text-ink">Send your details</h3>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
              <div className="border-t border-line px-6 py-5 md:px-8">
                <ul className="space-y-2.5 text-sm text-ink/70">
                  <li className="flex items-center gap-2.5">
                    <MapPin size={15} className="shrink-0 text-accent" />
                    {business.address}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={15} className="shrink-0 text-accent" />
                    <a href={business.phoneHref} className="hover:text-accent">
                      {business.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock size={15} className="shrink-0 text-accent" />
                    {business.hours}
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="card overflow-hidden p-0">
              <iframe
                src={business.mapEmbed}
                title={`Map to ${business.name}`}
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
