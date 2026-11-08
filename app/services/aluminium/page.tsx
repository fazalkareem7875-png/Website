import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
import data from "@/data/servicePages.json";

export const metadata = pageMetadata(
  data.aluminium.title,
  "Aluminium windows, doors, sliding systems, partitions and shopfronts — fabricated to measure in Islamabad."
);

export default function AluminiumPage() {
  return (
    <ServiceDetail
      data={data.aluminium}
      siblingLinks={[
        { label: "Glass Work", href: "/services/glass" },
        { label: "Wood Interior", href: "/services/wood-interior" },
      ]}
    />
  );
}
