import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
import data from "@/data/servicePages.json";

export const metadata = pageMetadata(
  data.glass.title,
  "Shower cabins, glass doors and partitions, railings and 12mm shopfront glazing — supplied and fitted."
);

export default function GlassPage() {
  return (
    <ServiceDetail
      data={data.glass}
      siblingLinks={[
        { label: "Aluminium Work", href: "/services/aluminium" },
        { label: "Wood Interior", href: "/services/wood-interior" },
      ]}
    />
  );
}
