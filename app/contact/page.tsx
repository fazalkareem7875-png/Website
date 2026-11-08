import { MapPin, Phone, Clock, MessageCircle, Star } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import content from "@/data/content.json";
import business from "@/data/business.json";

export const metadata = pageMetadata(
  "Contact",
  `Contact ${business.name} — ${business.address}. Call ${business.phone} or send a message. Open 24 hours.`
);

export default function ContactPage() {
  const waHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to ask about a quote.`
  )}`;

  return (
    <>
      <section className="border-b border-line bg-bg-alt py-14 md:py-20">
        <div className="container-section">
          <p className="eyebrow mb-3">Get in touch</p>
          <h1 className="max-w-3xl text-4xl leading-tight text-ink md:text-5xl">
            {content.contactPage.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            {content.contactPage.intro}
          </p>
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl text-ink">Contact details</h2>
              <div className="mt-2 h-px w-10 bg-accent" />
              <ul className="mt-5 space-y-4 text-sm text-ink/75">
                <li className="flex gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                  <span>{business.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={17} className="mt-0.5 shrink-0 text-accent" />
                  <a href={business.phoneHref} className="font-semibold hover:text-accent">
                    {business.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock size={17} className="mt-0.5 shrink-0 text-accent" />
                  <span>{business.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Star size={17} className="mt-0.5 shrink-0 text-accent" />
                  <a
                    href={business.googleProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {business.rating} on Google — read reviews
                  </a>
                </li>
              </ul>

              <div className="mt-6 grid gap-3">
                <a href={business.phoneHref} className="btn-primary w-full">
                  <Phone size={15} />
                  Call {business.phone}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-btn bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Service area
                </p>
                <p className="mt-1.5 text-sm text-ink/70">
                  {business.serviceArea}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl text-ink">{content.contactPage.formTitle}</h2>
              <div className="mt-2 h-px w-10 bg-accent" />
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-section">
          <SectionHeading eyebrow="Find us" title="Workshop Location" />
          <Reveal className="card overflow-hidden p-0">
            <iframe
              src={business.mapEmbed}
              title={`Map to ${business.name}`}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
