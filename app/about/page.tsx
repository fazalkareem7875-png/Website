import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import content from "@/data/content.json";
import business from "@/data/business.json";

export const metadata = pageMetadata(
  "About",
  `About ${business.name} — workshop-based fabrication and fitting of aluminium, glass and wood work in Islamabad & Rawalpindi.`
);

export default function AboutPage() {
  const { about } = content;
  return (
    <>
      <section className="border-b border-line bg-bg-alt py-14 md:py-20">
        <div className="container-section">
          <p className="eyebrow mb-3">Who we are</p>
          <h1 className="max-w-3xl text-4xl leading-tight text-ink md:text-5xl">
            {about.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5">
            {about.story.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="card mt-6 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon name="MapPin" className="h-4 w-4 text-accent" />
                Workshop
              </p>
              <p className="mt-2 text-sm text-ink/65">{business.address}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink/65">
                <Icon name="Clock" className="h-4 w-4 text-accent" />
                {business.hours}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="container-section">
          <SectionHeading eyebrow="Our approach" title={about.missionTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {about.mission.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <span className="font-heading text-3xl font-bold text-accent/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <SectionHeading eyebrow="Trust" title={about.trustTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.trustPoints.map((t, i) => (
            <Reveal key={t.text} delay={i * 0.08}>
              <div className="card flex items-center gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-btn border border-accent/30 bg-accent/10 text-accent">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium leading-snug text-ink">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
