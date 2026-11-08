import Link from "next/link";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import business from "@/data/business.json";
import content from "@/data/content.json";
import services from "@/data/services.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-line bg-bg-alt">
      <div className="container-section grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-btn border border-accent bg-accent/10 font-heading text-lg font-bold text-accent">
              GJ
            </span>
            <span className="font-heading text-lg font-semibold text-ink">
              {business.shortName}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">
            {content.footer.about}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
            {content.footer.servicesTitle}
          </h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-sm text-ink/65 transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
            {content.footer.contactTitle}
          </h3>
          <ul className="space-y-3 text-sm text-ink/65">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{business.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Star size={16} className="mt-0.5 shrink-0 text-accent" />
              <a
                href={business.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {business.rating} on Google
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
            {content.footer.hoursTitle}
          </h3>
          <p className="flex items-center gap-2.5 text-sm text-ink/65">
            <Clock size={16} className="shrink-0 text-accent" />
            {business.hours}
          </p>
          <p className="mt-3 text-sm text-ink/65">
            Service area: {business.serviceArea}
          </p>
          <div className="mt-4 flex gap-2">
            <a href={business.phoneHref} className="btn-dark px-4 py-2.5">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-section flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/50 sm:flex-row">
          <p>
            © {year} {business.name}. {content.footer.rights}
          </p>
          <p>{business.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
