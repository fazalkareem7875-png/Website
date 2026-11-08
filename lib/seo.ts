import type { Metadata } from "next";
import business from "@/data/business.json";

const siteName = business.name;

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title: title === siteName ? siteName : `${title} | ${siteName}`,
    description,
    openGraph: {
      title: title === siteName ? siteName : `${title} | ${siteName}`,
      description,
      siteName,
      type: "website",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: title === siteName ? siteName : `${title} | ${siteName}`,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "#local-business",
    name: business.name,
    description: business.tagline,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fateh Jang Rd, E 18 Gulshan e Sehat",
      addressLocality: "Islamabad",
      postalCode: "45230",
      addressCountry: "PK",
    },
    areaServed: business.serviceArea,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      bestRating: "5",
      ratingCount: 1,
    },
  };
}
