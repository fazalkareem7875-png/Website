import {
  Ruler,
  Layers,
  Wrench,
  Clock,
  Star,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Ruler,
  Layers,
  Wrench,
  Clock,
  Star,
  MapPin,
  ShieldCheck,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Star;
  return <Cmp className={className} aria-hidden="true" />;
}
