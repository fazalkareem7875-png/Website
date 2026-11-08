import { pageMetadata } from "@/lib/seo";
import Gallery from "@/components/Gallery";
import content from "@/data/content.json";
import business from "@/data/business.json";

export const metadata = pageMetadata(
  "Gallery",
  `Completed aluminium, glass and wood projects by ${business.name} across Islamabad & Rawalpindi.`
);

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-line bg-bg-alt py-14 md:py-20">
        <div className="container-section">
          <p className="eyebrow mb-3">Our work</p>
          <h1 className="text-4xl leading-tight text-ink md:text-5xl">
            {content.galleryPage.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            {content.galleryPage.intro}
          </p>
        </div>
      </section>

      <section className="container-section py-16 md:py-24">
        <Gallery />
      </section>
    </>
  );
}
