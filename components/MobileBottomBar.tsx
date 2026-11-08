import { Phone, MessageCircle } from "lucide-react";
import business from "@/data/business.json";

export default function MobileBottomBar() {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to ask about a quote.`
  )}`;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-line bg-white shadow-soft-lg md:hidden"
      aria-label="Quick contact"
    >
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink"
      >
        <Phone size={17} className="text-accent" />
        Call Now
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-line bg-[#25D366] py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}
