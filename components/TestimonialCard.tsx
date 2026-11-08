import { Star, ExternalLink } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import business from "@/data/business.json";
import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  source?: string;
  stars?: number;
};

const testimonialList = testimonials as Testimonial[];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  if (testimonialList.length === 0) {
    return (
      <Reveal className="mx-auto max-w-2xl rounded-card border border-line bg-white p-10 text-center shadow-soft">
        <div className="mx-auto mb-4 flex w-fit gap-1 text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="font-heading text-2xl text-ink">
          {business.rating} rating on Google
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          See what customers in Islamabad &amp; Rawalpindi are saying about our
          aluminium, glass and wood work.
        </p>
        <a
          href={business.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Read our Google reviews
          <ExternalLink size={15} />
        </a>
      </Reveal>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonialList.map((t, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <figure className="card flex h-full flex-col p-6">
            <Stars n={t.stars ?? 5} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-sm font-semibold text-ink">
              {t.name}
              {t.source && (
                <span className="ml-2 font-normal text-ink/50">{t.source}</span>
              )}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
