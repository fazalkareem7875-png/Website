"use client";

import { MessageCircle } from "lucide-react";
import business from "@/data/business.json";

export default function WhatsAppButton() {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to ask about a quote.`
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-transform hover:scale-110 md:bottom-6"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}
