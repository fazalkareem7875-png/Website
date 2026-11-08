import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
import data from "@/data/servicePages.json";

export const metadata = pageMetadata(
  data["wood-interior"].title,
  "Kitchen cabinets, wardrobes, false ceilings and wood panelling — designed, built and fitted."
);

export default function WoodInteriorPage() {
  return (
    <ServiceDetail
      data={data["wood-interior"]}
      siblingLinks={[
        { label: "Aluminium Work", href: "/services/aluminium" },
        { label: "Glass Work", href: "/services/glass" },
      ]}
    />
  );
}
